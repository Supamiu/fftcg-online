import { GameEvent } from '../game/event/game-event';
import { EventPredicate } from './event-predicate';

export interface AutomaticTextLineTrigger {
  condition: GameEvent;
  predicates: EventPredicate[];
}
