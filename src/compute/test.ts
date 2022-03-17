import {Element, Game} from "../../proto/gen/kiseki/v1/data_pb";
import {readFileSync} from "fs";
import {findBest, scoreByMostAvailableArts, scoreByMostAvailableArtsOfType, weightedScorer} from "./score";
import {setAutoFreeze} from "immer";
import {linesToString} from "./utils";
import {getArtsList} from "./arts";

setAutoFreeze(false);

let data = readFileSync('data/zero.pb');
let game = Game.fromBinary(data);


(async () => {
	for (let character of game.characters) {
		console.log(character.name);

		// let best = await findBest(scoreByMostAvailableArts(game.arts), character.lines, game.quartz)
		let best = await findBest(weightedScorer([
			{scorer: scoreByMostAvailableArts(game.arts), weight: 5},
			{scorer: scoreByMostAvailableArtsOfType(game.arts, Element.SPACE), weight: 1},
		]), character.lines, game.quartz);

		console.log(`Score: ${best.score}`);
		console.log(linesToString(best.state));
		console.log('Available arts: ' + Array.from(getArtsList(game.arts, best.state)).map((item) => item.name).join(', '));
		console.log('==============');
	}
})()
