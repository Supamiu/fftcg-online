import { CardsParser } from './cards-parser';
import { writeFileSync } from 'fs';
import { join } from 'path';
import { cards, RawCard } from '@fftcg-online/model';

const parsed = new CardsParser((cards as unknown as { default: RawCard[] }).default as RawCard[]).parse();

writeFileSync(join(__dirname, '../../../apps/fftcg-online/src/assets/parsed-cards.json'), JSON.stringify(parsed));

process.exit(0);
