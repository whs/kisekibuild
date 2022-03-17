import {ElementValue, Quartz, QuartzLine, Slot} from "../../proto/gen/kiseki/v1/data_pb";
import {Validator} from "./validators";

/**
 * Return list of quartz lines without linking
 */
export function quartzActualLines(state: QuartzLine[]): Slot[][] {
	if (!useLinkedWith(state)) {
		// if linked feature is not used then the input is already valid
		return state.map((item) => item.slots);
	}

	let out: Slot[][] = [];
	for(let line of state){
		if (line.linkedWith === undefined) {
			continue;
		}
		let actualLine = [...state[line.linkedWith].slots, ...line.slots];
		// TODO: Add MQ support
		out.push(actualLine);
	}
	return out;
}

export function useLinkedWith(state: QuartzLine[]): boolean {
	for(let line of state){
		if(line.linkedWith !== undefined) {
			return true;
		}
	}
	return false;
}

export function getFirstFreeSlot(state: QuartzLine[]): [number, number]|null {
	for (let lineId = 0; lineId < state.length; lineId++) {
		const line = state[lineId];
		for (let slotId = 0; slotId < line.slots.length; slotId++){
			const slot = line.slots[slotId];
			if (!slot.quartz) {
				return [lineId, slotId]
			}
		}
	}
	return null;
}

export function isValid(state: QuartzLine[], validators: Validator[]): boolean {
	for (let v of validators) {
		if (!v(state)) {
			return false;
		}
	}
	return true;
}

export function getElementsValue(slots: Slot[]): ElementValue {
	let out = ElementValue.create();
	for (let slot of slots) {
		if(!slot.quartz){
			continue;
		}
		let slotEv = slot.quartz.value!;
		out.earth += slotEv.earth;
		out.water += slotEv.water;
		out.fire += slotEv.fire;
		out.wind += slotEv.wind;
		out.time += slotEv.time;
		out.space += slotEv.space;
		out.mirage += slotEv.mirage;
	}
	return out;
}

export function linesToString(state: QuartzLine[]): string {
	let out = [];
	for (let lineId = 0; lineId < state.length; lineId++) {
		let line = state[lineId];
		let quartzNames = line.slots.map((slot) => {
			if(!slot.quartz){
				return 'Empty';
			}
			return slot.quartz.name;
		}).join(', ');
		out.push(`Line ${lineId+1}: ${quartzNames}`);
	}
	return out.join('\n');
}

export function countUsedSlots(state: QuartzLine[]): number{
	let out = 0;
	for (let line of state) {
		for (let slot of line.slots) {
			if (!!slot.quartz){
				out++;
			}
		}
	}
	return out;
}
