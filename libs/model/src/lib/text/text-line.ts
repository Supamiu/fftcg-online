import { TextType } from './text-type';
import { AutomaticTextLineTrigger } from './automatic-text-line-trigger';
import { CardAction } from './card-action';

interface BaseTextLine {
  type: TextType;
}

export interface AutomaticTextLine extends BaseTextLine {
  trigger: AutomaticTextLineTrigger;
  actions: CardAction[];
}

export type TextLine = AutomaticTextLine;
