import {Art, Element, Quartz, QuartzLine} from "../../proto/gen/kiseki/v1/data_pb";
import walk from "./walk";
import {artElement, getArtsList} from "./arts";
import {countUsedSlots} from "./utils";

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
			bestUsedSlot = countUsedSlots(state);
			return true;
		}

		// this build use equal slots as best build but is not optimal
		// don't search further
		// TODO: This is not actually valid heuristic - it can reach local max since we don't search
		// at start of each lines separately
		// I think to fix this getNextFreeSlot should be smarter and pick the 'free-est' slot
		if(countUsedSlots(state) >= bestUsedSlot && score < bestScore) {
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

export function scoreByMostAvailableArts(arts: Art[]): Scorer {
	return (state: QuartzLine[]) => {
		return getArtsList(arts, state).size / arts.length;
	}
}

export function scoreByMostAvailableArtsOfType(arts: Art[], type: Element): Scorer {
	let totalArtsOfType = arts.filter((art) => artElement(art) === type).length;

	return (state: QuartzLine[]) => {
		return Array.from(getArtsList(arts, state)).filter((art) => artElement(art) === type).length / totalArtsOfType;
	}
}
