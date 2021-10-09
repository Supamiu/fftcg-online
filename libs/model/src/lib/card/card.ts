import { TextLine } from '../text/text-line';
import { CardElement } from './card-element';
import { CardType } from './card-type';

interface BaseCard {
  name: string;
  // For the cards that have "this card is also This name and that name"
  additionalNames: string[];
  code: string;
  cost: number;
  elements: CardElement[];
  categories: string[];
  text: TextLine[];
}

export interface ForwardCard extends BaseCard {
  type: CardType.FORWARD;
  jobs: string[];
  power: number;
}


export interface BackupCard extends BaseCard {
  type: CardType.BACKUP;
  jobs: string[];
}

export interface SummonCard extends BaseCard {
  type: CardType.SUMMON;
}

export interface MonsterCard extends BaseCard {
  type: CardType.MONSTER;
  // For the monsters that become forward given some conditions.
  power?: number;
}

export type Card = ForwardCard | BackupCard | SummonCard | MonsterCard;
