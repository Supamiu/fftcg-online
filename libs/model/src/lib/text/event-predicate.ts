import { GameEvent } from '../game/event/game-event';
import { Card } from '@fftcg-online/model';

export class EventPredicate {

  static IS_SELF = new EventPredicate(card => {
    return event => {
      return event.card?.card.code === card.code;
    };
  });

  constructor(public matches: (card: Card) => (event: GameEvent) => boolean) {
  }
}
