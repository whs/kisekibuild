import {Art, Quartz, QuartzLine} from "../../proto/gen/kiseki/v1/data_pb";
import walk from "./walk";
import {getArtsList} from "./arts";
import {countUsedSlots, linesToString} from "./utils";

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
			// console.log(`===============\nBest: ${bestScore}\n${linesToString(best)}\n================`);
			return true;
		}

		// this build use equal slots as best build but is not optimal
		// don't search further
		if(countUsedSlots(state) >= bestUsedSlot && score < bestScore) {
			// console.log(`Reject ${linesToString(state)}`);
			return false;
		}

		return true;
	});

	return {score: bestScore, state: best!};
}

export function scoreByMostAvailableArts(arts: Art[]): Scorer {
	return (state: QuartzLine[]) => {
		return getArtsList(arts, state).size;
	}
}
