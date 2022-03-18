import {Game} from '../proto/gen/kiseki/v1/data_pb';
import cs3 from './cs3/game';
process.stdout.write(Game.toBinary(cs3));
