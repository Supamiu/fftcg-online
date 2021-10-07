import { GameEvent } from '../game/event/game-event';

export class EventPredicate {

  constructor(public matches: (event: GameEvent) => boolean) {
  }
}
