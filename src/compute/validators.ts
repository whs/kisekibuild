import {Element, QuartzLine} from "../../proto/gen/kiseki/v1/data_pb";
import {quartzActualLines} from "./utils";

export type Validator = (state: readonly QuartzLine[]) => boolean;

export function noLevel0SlotUsed(state: readonly QuartzLine[]): boolean {
	for (let line of state) {
		for (let slot of line.slots) {
			if (slot.level === 0 && !!slot.quartz) {
				return false;
			}
		}
	}
	return true;
}

export function quartzMustMatchSlot(state: readonly QuartzLine[]): boolean {
	for (let line of state) {
		for (let slot of line.slots) {
			if (slot.element === Element.UNSPECIFIED) {
				continue;
			}
			if (!slot.quartz) {
				continue;
			}

			if (slot.quartz.element !== slot.element) {
				return false;
			}
		}
	}
	return true;
}

export function noDuplicateQuartz(state: readonly QuartzLine[]): boolean {
	let found = new Set();
	for (let line of state) {
		for (let slot of line.slots) {
			if (!slot.quartz) {
				continue;
			}
			if (found.has(slot.quartz.name)) {
				return false;
			}
			found.add(slot.quartz.name);
		}
	}
	return true;
}

export function noQuartzInSameCategory(state: readonly QuartzLine[]): boolean {
	let found = new Set();
	for (let line of state) {
		for (let slot of line.slots) {
			if (!slot.quartz?.category) {
				continue;
			}

			if (found.has(slot.quartz.category)){
				return false;
			}
			found.add(slot.quartz.category);
		}
	}
	return true;
}

export function noMultipleHitEffectsInLine(state: readonly QuartzLine[]): boolean {
	for (let line of quartzActualLines(state)) {
		let hasEffect = false;
		for (let slot of line) {
			if (!slot.quartz) {
				continue;
			}
			if (slot.quartz.hasHitEffect) {
				if (hasEffect) {
					return false;
				}

				hasEffect = true;
			}
		}
	}
	return true;
}
