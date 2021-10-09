import { CardActionTarget } from './card-action-target';
import { CardActionType } from './card-action-type';

export interface CardAction {
  type: CardActionType;
  targets: CardActionTarget[];
}
