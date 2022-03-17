import {Art, ElementValue, QuartzLine} from "../../proto/gen/kiseki/v1/data_pb";
import {getElementsValue, quartzActualLines} from "./utils";

export function getArtsListFromElements(arts: Art[], ev: ElementValue): Art[] {
	return arts.filter((art) => {
		return art.costs!.earth <= ev.space &&
			art.costs!.water <= ev.water &&
			art.costs!.fire <= ev.fire &&
			art.costs!.wind <= ev.wind &&
			art.costs!.time <= ev.time &&
			art.costs!.space <= ev.space &&
			art.costs!.mirage <= ev.mirage;
	});
}

export function getArtsList(arts: Art[], state: QuartzLine[]): Set<Art> {
	let out = new Set<Art>();

	for (let line of quartzActualLines(state)) {
		let ev = getElementsValue(line);
		let availableArts = getArtsListFromElements(arts, ev);
		for (let art of availableArts) {
			out.add(art);
		}
	}

	return out;
}
