import { Card } from '../card/card';
import { CardElement } from '../card/card-element';
import { BackupCardStatus, ForwardCardStatus, MonsterCardStatus, SummonCardStatus } from './card-status';

export interface PlayerState {
  cp: Record<CardElement, number>;
  breakZone: Card[];
  damageZone: Card[];
  removedZone: Card[];

  deck?: Card[];
  deckSize: number;
  hand?: Card[];
  handSize: number;

  // Playmat
  forwards: ForwardCardStatus[];
  backups: BackupCardStatus[];
  monsters: MonsterCardStatus[];
  summons: SummonCardStatus[];

  revealedCards: Card[];
}
