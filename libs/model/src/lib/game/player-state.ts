import { Card } from '../card/card';
import { CardElement } from '../card/card-element';
import { BackupCardStatus, CardStatus, ForwardCardStatus, MonsterCardStatus, SummonCardStatus } from './card-status';

export interface PlayerState {
  public: PublicPlayerState;
  private: PrivatePlayerState;
}

export interface PublicPlayerState {
  cp: Record<CardElement, number>;
  breakZone: Card[];
  damageZone: Card[];
  removedZone: Card[];

  // Playmat
  forwards: ForwardCardStatus[];
  backups: BackupCardStatus[];
  monsters: MonsterCardStatus[];
  summons: SummonCardStatus[];
}

export interface PrivatePlayerState {
  deck: Card[];
  hand: CardStatus[];
}
