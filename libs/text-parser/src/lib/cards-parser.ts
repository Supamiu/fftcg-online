import { Card, CardElement, CardType, RawCard } from '@fftcg-online/model';

export class CardsParser {
  static ELEMENTS: Record<string, CardElement> = {
    '火': CardElement.FIRE,
    '風': CardElement.WIND,
    '氷': CardElement.ICE,
    '土': CardElement.EARTH,
    '雷': CardElement.LIGHTNING,
    '水': CardElement.WATER,
    '闇': CardElement.DARK,
    '光': CardElement.LIGHT
  };

  static TYPES: Record<string, CardType> = {
    'Backup': CardType.BACKUP,
    'Summon': CardType.SUMMON,
    'Monster': CardType.MONSTER,
    'Forward': CardType.FORWARD
  };

  constructor(private cards: RawCard[]) {
  }

  public parse(): Card[] {
    return this.cards.map(card => {
      return this.parseCard(card);
    });
  }


  public parseCard(raw: RawCard): Card {
    return {
      code: raw.Code,
      cost: +raw.Cost,
      elements: raw.Element.split('/').map(rawElement => CardsParser.ELEMENTS[rawElement]),
      name: raw.Name_EN,
      additionalNames: [],
      categories: [raw.Category_1, raw.Category_2].filter(category => !!category),
      // TODO opus XV dual jobs?
      jobs: [raw.Job_EN],
      power: raw.Power ? +raw.Power : 0,
      type: CardsParser.TYPES[raw.Type_EN],
      // TODO
      text: []
    };

  }
}
