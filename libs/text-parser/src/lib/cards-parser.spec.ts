import { CardElement, cards, CardType, RawCard } from '@fftcg-online/model';
import { CardsParser } from './cards-parser';

const rawCards: RawCard[] = (cards as unknown as { default: RawCard[] }).default;

function getRawCard(code: string): RawCard {
  return rawCards.find(c => c.Code === code) as RawCard;
}

const parser = new CardsParser(rawCards);

describe('Cards Parser', () => {

  it('Should be able to parse test-less card', () => {
    expect(parser.parseCard(getRawCard('1-040C'))).toStrictEqual({
      code: '1-040C',
      cost: 1,
      elements: [CardElement.ICE],
      name: 'Summoner',
      additionalNames: [],
      categories: ['FFT'],
      jobs: ['Standard Unit'],
      power: 0,
      type: CardType.BACKUP,
      text: []
    });
  });
});
