import { CardType } from '@fftcg-online/model';
import { CardStatus } from '../game/card-status';

type CardPredicateFn = <T extends CardStatus>(card: T, ...args: Array<string>) => boolean;

interface CardPredicateFnWithArgs {
  fn: CardPredicateFn,
  args?: Array<string>
}

export class CardPredicate {
  static IS_FORWARD: CardPredicateFn = cs => cs.card.type === CardType.FORWARD || cs.type === CardType.FORWARD;
  static IS_BACKUP: CardPredicateFn = cs => cs.card.type === CardType.BACKUP || cs.type === CardType.BACKUP;
  static IS_SUMMON: CardPredicateFn = cs => cs.card.type === CardType.SUMMON || cs.type === CardType.SUMMON;
  static IS_MONSTER: CardPredicateFn = cs => cs.card.type === CardType.MONSTER || cs.type === CardType.MONSTER;

  static IS_ACTIVE: CardPredicateFn = (cs) => {
    if (cs.type === CardType.FORWARD || cs.type === CardType.BACKUP) {
      return !cs.dull;
    }
    return false;
  };
  static IS_DULL: CardPredicateFn = cs => CardPredicate.not(cs, { fn: CardPredicate.IS_ACTIVE });

  static IS_COST_BELOW_OR_EQUAL: CardPredicateFn = (cs, cost) => cs.card.cost <= +cost;

  static not<T extends CardStatus>(card: T, predicate: CardPredicateFnWithArgs): boolean {
    return !predicate.fn(card, ...(predicate.args || []));
  }

  static and<T extends CardStatus>(card: T, predicates: CardPredicateFnWithArgs[]): boolean {
    return predicates.every(p => p.fn(card, ...(p.args || [])));
  }

  static or<T extends CardStatus>(card: T, predicates: CardPredicateFnWithArgs[]): boolean {
    return predicates.some(p => p.fn(card, ...(p.args || [])));
  }

  static parse(input: string): CardPredicateFn {
    return (card) => {
      let matches = true;
      if (input.startsWith('AND')) {
        const andParams = /AND\(([^)]*\)?)\)$/i.exec(input);
        if (!andParams) {
          throw Error(`Malformed AND: "${input}"`);
        }
        matches = this.and(card, andParams[1].split(',').map(p => {
          const predicateDetails = /[^(]+\(?([^)]+)?\)?/i.exec(p);
          if (!predicateDetails) {
            throw Error(`Malformed AND Predicate : "${input}", Predicate: "${p}"`);
          }
          const [, fn, subArgs] = predicateDetails;
          return {
            fn: (CardPredicate as unknown as Record<string, CardPredicateFn>)[fn],
            args: subArgs.split(',')
          };
        }));
      } else if (input.startsWith('OR')) {
        const orParams = /OR\(([^)]*\)?)\)$/i.exec(input);
        if (!orParams) {
          throw Error(`Malformed OR: "${input}"`);
        }
        matches = this.or(card, orParams[1].split(',').map(p => {
          const predicateDetails = /[^(]+\(?([^)]+)?\)?/i.exec(p);
          if (!predicateDetails) {
            throw Error(`Malformed OR Predicate : "${input}", Predicate: "${p}"`);
          }
          const [, fn, subArgs] = predicateDetails;
          return {
            fn: (CardPredicate as unknown as Record<string, CardPredicateFn>)[fn],
            args: subArgs.split(',')
          };
        }));
      } else {
        const predicateDetails = /[^(]+\(?([^)]+)?\)?/i.exec(input);
        if (!predicateDetails) {
          throw Error(`Malformed Root Predicate: "${input}"`);
        }
        const [, fn, subArgs] = predicateDetails;
        matches = (CardPredicate as unknown as Record<string, CardPredicateFn>)[fn](card, ...(subArgs || []));
      }
      return matches;
    };
  }

}
