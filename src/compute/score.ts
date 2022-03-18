import {Art, Character, Element, Quartz, QuartzLine, Stats} from "../../proto/gen/kiseki/v1/data_pb";
import walk from "./walk";
import {artElement, evSatisfyPercentage, getArtsList, getArtsListFromElements} from "./arts";
import {
	usedSlots,
	getElementsValue,
	hasFreeSlot,
	quartzActualLines,
	totalSlots,
	getStats,
	getCharacterStats
} from "./utils";

export type Scorer = (state: readonly QuartzLine[]) => number;

export async function findBest(scorer: Scorer, state: QuartzLine[], quartz: readonly Quartz[]): Promise<{score: number, state: QuartzLine[]}> {
	let best: QuartzLine[]|null = null;
	let bestScore = Number.MIN_VALUE;
	let bestUsedSlot = 0;
	await walk(state, quartz, (state) => {
		let score = scorer(state);

		if (best === null || score > bestScore) {
			best = state;
			bestScore = score;
			bestUsedSlot = usedSlots(state);
			return true;
		}

		// this build use equal slots as best build but is not optimal
		// don't search further
		if(usedSlots(state) >= bestUsedSlot && score < bestScore) {
			return false;
		}

		return true;
	});

	return {score: bestScore, state: best!};
}

export function weightedScorer(scorers: {scorer: Scorer, weight: number}[]): Scorer {
	return (state) => {
		let score = 0;
		for (let scorer of scorers) {
			if (scorer.weight === 0) {
				continue;
			}

			score += scorer.scorer(state) * scorer.weight;
		}

		return score;
	}
}

export function scoreByArtCompletionPercentage(arts: readonly Art[]): Scorer {
	return (state) => {
		let artCompletion: {[name: string]: number} = {};
		for (let line of quartzActualLines(state)) {
			let ev = getElementsValue(line);
			for (let art of arts) {
				artCompletion[art.name] = Math.max(artCompletion[art.name]||0, evSatisfyPercentage(art.costs!, ev));
			}
		}
		let sum = Object.values(artCompletion).reduce((a, b) => a+b);
		return sum / arts.length;
	}
}

export function scoreByMostAvailableArts(arts: readonly Art[]): Scorer {
	return (state) => {
		return getArtsList(arts, state).size / arts.length;
	}
}

export function scoreByMostAvailableArtsOfType(arts: readonly Art[], type: Element): Scorer {
	let artsOfType = arts.filter((art) => artElement(art) === type);

	return (state) => {
		return Array.from(getArtsList(artsOfType, state)).length / artsOfType.length;
	}
}

export function scoreByMostElementalValues(state: readonly QuartzLine[]) {
	let out = 0;
	for (let line of quartzActualLines(state)) {
		let ev = getElementsValue(line);
		out += ev.earth;
		out += ev.water;
		out += ev.fire;
		out += ev.wind;
		out += ev.time;
		out += ev.space;
		out += ev.mirage;
	}
	const MAX_QUARTZ_VALUE = 5;
	const ELEMENTS_COUNT = 7;
	return out / (usedSlots(state) * MAX_QUARTZ_VALUE * ELEMENTS_COUNT);
}

export function scoreByLeastFreeSlot(state: readonly QuartzLine[]) {
	return usedSlots(state)/totalSlots(state);
}

export function scoreByMostStats(character: Character, stats: Stats): Scorer {
	return (state) => {
		return getStats(character, state, stats)/(getCharacterStats(character, stats)*2);
	}
}
