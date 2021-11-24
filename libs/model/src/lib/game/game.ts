import { PlayerState } from './player-state';
import { CardStatus } from './card-status';

export interface Game {
  players: PlayerState[];

  callStack: CardStatus[];
}
