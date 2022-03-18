import {Game, Stats} from "../../proto/gen/kiseki/v1/data_pb";
import {readFileSync} from "fs";
import {
	findBest, scoreByArtCompletionPercentage, scoreByLeastFreeSlot,
	scoreByMostAvailableArts,
	scoreByMostElementalValues, scoreByMostStats,
	weightedScorer
} from "./score";
import {setAutoFreeze} from "immer";
import {autoWeight, getStats, linesToString} from "./utils";
import {getArtsList} from "./arts";

setAutoFreeze(false);

let data = readFileSync('data/zero.pb');
let game = Game.fromBinary(data);


(async () => {
	for (let character of game.characters) {
		console.log(character.name);

		let best = await findBest(weightedScorer(autoWeight([
			scoreByLeastFreeSlot,
			// scoreByMostAvailableArts(game.arts),
			scoreByMostStats(character, Stats.STR),
			scoreByMostStats(character, Stats.ATS),
			// scoreByArtCompletionPercentage(game.arts),
			scoreByMostElementalValues,
		])), character.lines, game.quartz);

		console.log(`Score: ${best.score}`);
		console.log(linesToString(best.state));
		let availableArts = Array.from(getArtsList(game.arts, best.state));
		console.log(`Available arts (${availableArts.length}): ` + availableArts.map((item) => item.name).join(', '));
		console.log(`STR: ${getStats(character, best.state, Stats.STR)}`);
		console.log('==============');
	}
})()
