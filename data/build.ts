import {Game} from '../proto/gen/kiseki/v1/data_pb';
import zero from './zero/game';
process.stdout.write(Game.toBinary(zero));
