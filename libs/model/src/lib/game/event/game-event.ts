import { GameEventType } from './game-event-type';
import { CardStatus } from '../card-status';
import { PublicPlayerState } from '../player-state';

export interface GameEvent {
  type: GameEventType;
  player: PublicPlayerState;

  //TODO make this clean with inherited types and inference

  card?: CardStatus;
  cards?: CardStatus[]; // Party attacks
  targetCard?: CardStatus;
  targetPlayer?: PublicPlayerState;
}

