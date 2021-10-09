import { BackupCard, Card, CardCounter, CardElement, CardType, ForwardCard, MonsterCard, SummonCard } from '../card';

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
  type: CardType.FORWARD | CardType.BACKUP;
}

export interface ForwardCardStatus extends DullableCardStatus {
  card: ForwardCard;
  canAttack: boolean;
  power: number;
  damage: number;
  type: CardType.FORWARD;
}

export interface MonsterCardStatus extends BaseCardStatus {
  card: MonsterCard;
  type: CardType.MONSTER;
}

export interface BackupCardStatus extends DullableCardStatus {
  card: BackupCard;
  type: CardType.BACKUP;
}

export interface SummonCardStatus extends BaseCardStatus {
  card: SummonCard;
  type: CardType.SUMMON;
}

export type CardStatus = ForwardCardStatus | MonsterCardStatus | BackupCardStatus | SummonCardStatus;
