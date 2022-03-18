import {Quartz, QuartzLine} from "../../proto/gen/kiseki/v1/data_pb";
import * as validators from "./validators";
import {getBestFreeSlot, isValid} from "./utils";
import produce from "immer";

export type Callback = (state: QuartzLine[]) => boolean;

const validatorsList = [
	validators.noLevel0SlotUsed,
	validators.quartzMustMatchSlot,
	validators.noDuplicateQuartz,
	validators.noQuartzInSameCategory,
	validators.noMultipleHitEffectsInLine,
]

export default function walk(state: readonly QuartzLine[], quartz: readonly Quartz[], cb: Callback): Promise<void> {
	let target = getBestFreeSlot(state);
	if(!target){
		return Promise.resolve();
	}

	let [lineId, slotId] = target;

	let subpromises = [];

	for (let q of quartz) {
		let newState = produce(state, (draft) => {
			draft[lineId].slots[slotId].quartz = q;
		}) as QuartzLine[];
		if(!isValid(newState, validatorsList)) {
			continue;
		}

		let shouldRecurse = cb(newState);
		if (!shouldRecurse) {
			continue;
		}

		subpromises.push(new Promise((resolve) => {
			setImmediate(() => {
				resolve(walk(newState, quartz, cb));
			});
		}));
	}

	return Promise.all(subpromises).then(()=>{});
}
