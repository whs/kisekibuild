import {Art, Element, Quartz, QuartzLine} from "../../proto/gen/kiseki/v1/data_pb";
import walk from "./walk";
import {artElement, evSatisfyPercentage, getArtsList, getArtsListFromElements} from "./arts";
import {usedSlots, getElementsValue, hasFreeSlot, quartzActualLines, totalSlots} from "./utils";

export type Scorer = (state: QuartzLine[]) => number;

export async function findBest(scorer: Scorer, state: QuartzLine[], quartz: Quartz[]): Promise<{score: number, state: QuartzLine[]}> {
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
	return (state: QuartzLine[]) => {
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

export function scoreByArtCompletionPercentage(arts: Art[]): Scorer {
	return (state: QuartzLine[]) => {
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

export function scoreByMostAvailableArts(arts: Art[]): Scorer {
	return (state: QuartzLine[]) => {
		return getArtsList(arts, state).size / arts.length;
	}
}

export function scoreByMostAvailableArtsOfType(arts: Art[], type: Element): Scorer {
	let artsOfType = arts.filter((art) => artElement(art) === type);

	return (state: QuartzLine[]) => {
		return Array.from(getArtsList(artsOfType, state)).length / artsOfType.length;
	}
}

export function scoreByMostElementalValues(state: QuartzLine[]) {
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
	return out / (5*7);
}

export function scoreByLeastFreeSlot(state: QuartzLine[]) {
	return usedSlots(state)/totalSlots(state);
}
