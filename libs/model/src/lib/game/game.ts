import { PlayerState } from './player-state';
import { RevealedCard } from './revealed-card';

export interface Game {
  players: PlayerState[];

  // Revealed cards per player
  revealedCards: Record<string, RevealedCard[]>;
}
