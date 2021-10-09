import { Observable } from 'rxjs';
import { GameManager } from '../game-manager';
import { CardBehaviorType } from './card-behavior-type';

/**
 * TODO This still needs a lot of work, to see how it'd be done in the app, since an action
 * needs one or more targets, but not always, and they need to be checked when the action is resolved
 * so the action can fizzle if it's needed.
 */
export interface BehaviorEntry {
  type: CardBehaviorType;
  setup: (gameManager: GameManager) => Observable<void>;
  resolution: (gameManager: GameManager) => Observable<void>;
}
