import { GameEventType } from '../game/event/game-event-type';
import { EventPredicate } from './event-predicate';

export interface AutomaticTextLineTrigger {
  event: GameEventType;
  predicates: Array<keyof EventPredicate>;
}
