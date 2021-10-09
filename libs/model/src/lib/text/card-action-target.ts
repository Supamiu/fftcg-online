import { PublicPlayerState } from '../game/player-state';

export interface CardActionTarget {
  zone: keyof PublicPlayerState;
  predicate?: string;
  pickedBy: 'opponent' | 'player';
}
