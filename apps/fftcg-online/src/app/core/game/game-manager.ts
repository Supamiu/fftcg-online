import { Card, CardStatus, Game } from '@fftcg-online/model';
import { EMPTY, Observable } from 'rxjs';

export class GameManager {
  constructor(private game: Game) {
  }

  pickCard(zone: keyof Extract<Game, (Card | CardStatus)[]>): Observable<Card | CardStatus> {
    return EMPTY;
  }
}
