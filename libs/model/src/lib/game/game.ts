import { PlayerState } from './player-state';
import { RevealedCard } from './revealed-card';
import { CardStatus } from './card-status';

export interface Game {
  players: PlayerState[];

  // Revealed cards per player
  revealedCards: Record<string, RevealedCard[]>;

  callStack: CardStatus[];
}
