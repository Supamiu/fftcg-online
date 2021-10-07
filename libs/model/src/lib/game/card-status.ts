import { BackupCard, Card, ForwardCard, MonsterCard, SummonCard } from '../card/card';
import { CardCounter } from '../card/card-counter';
import { CardElement } from '../card/card-element';
import { CardType } from '../card/card-type';

interface BaseCardStatus {
  card: Card;
  cost: number;
  elements: CardElement[];
  // Useful for monsters turning into forwards
  type: CardType;
  counters: CardCounter[];
}

interface DullableCardStatus extends BaseCardStatus {
  card: ForwardCard | MonsterCard | BackupCard;
  dull: boolean;
}

export interface ForwardCardStatus extends DullableCardStatus {
  card: ForwardCard;
  canAttack: boolean;
  power: number;
  damage: number;
}

export interface MonsterCardStatus extends DullableCardStatus {
  card: MonsterCard;
  canAttack?: boolean;
  power?: number;
  damage?: number;
}

export interface BackupCardStatus extends DullableCardStatus {
  card: BackupCard;
}

export interface SummonCardStatus extends BaseCardStatus {
  card: SummonCard;
}

export type CardStatus = ForwardCardStatus | MonsterCardStatus | BackupCardStatus | SummonCardStatus;
