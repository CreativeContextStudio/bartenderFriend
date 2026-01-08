// Static glossary terms

export interface GlossaryTerm {
  id: string;
  term: string;
  definition: string;
  category: 'glassware' | 'method' | 'modifier';
}

export const glossaryTerms: GlossaryTerm[] = [
  {
    id: 'term-1',
    term: 'neat',
    definition: 'Spirit only, no ice, no mixer. Served at room temperature.',
    category: 'method',
  },
  {
    id: 'term-2',
    term: 'rocks',
    definition: 'Over ice in a rocks glass. Same as "on the rocks."',
    category: 'glassware',
  },
  {
    id: 'term-3',
    term: 'up',
    definition: 'Chilled and strained into a glass with no ice. Served cold but undiluted.',
    category: 'method',
  },
  {
    id: 'term-4',
    term: 'dry',
    definition: 'Less vermouth. For martinis, this means less dry vermouth. Sometimes means "just rinse the glass with vermouth."',
    category: 'modifier',
  },
  {
    id: 'term-5',
    term: 'dirty',
    definition: 'Olive brine added. Usually for martinis.',
    category: 'modifier',
  },
  {
    id: 'term-6',
    term: 'twist',
    definition: 'Citrus peel (lemon or orange) expressed over the drink and used as garnish.',
    category: 'modifier',
  },
  {
    id: 'term-7',
    term: 'double',
    definition: 'Double the spirit amount. Usually served in a larger glass or with more ice.',
    category: 'method',
  },
  {
    id: 'term-8',
    term: 'vermouth',
    definition: 'Fortified wine. Dry vermouth (white, less sweet) or sweet vermouth (red, sweeter).',
    category: 'modifier',
  },
  {
    id: 'term-9',
    term: 'triple sec',
    definition: 'Orange liqueur. Cointreau is a premium version. Used in margaritas and cosmopolitans.',
    category: 'modifier',
  },
  {
    id: 'term-10',
    term: 'bitters',
    definition: 'Highly concentrated flavor extracts. Angostura is most common. A few dashes add complexity.',
    category: 'modifier',
  },
  {
    id: 'term-11',
    term: 'simple syrup',
    definition: 'Equal parts sugar and water, dissolved. 1:1 ratio. Sweetener for cocktails.',
    category: 'modifier',
  },
  {
    id: 'term-12',
    term: 'muddle',
    definition: 'Crush ingredients in the bottom of a glass or shaker to release flavors.',
    category: 'method',
  },
  {
    id: 'term-13',
    term: 'coupe',
    definition: 'Wide, shallow glass with stem. Used for cocktails served "up."',
    category: 'glassware',
  },
  {
    id: 'term-14',
    term: 'collins',
    definition: 'Tall, narrow glass. For highballs and long drinks with mixer.',
    category: 'glassware',
  },
  {
    id: 'term-15',
    term: 'martini glass',
    definition: 'V-shaped glass with stem. Used for martinis and other stirred drinks served up.',
    category: 'glassware',
  },
  {
    id: 'term-16',
    term: 'rocks glass',
    definition: 'Short, wide glass. Old Fashioned glass. For drinks served over ice.',
    category: 'glassware',
  },
  {
    id: 'term-17',
    term: 'Campari',
    definition: 'Italian bitter liqueur. Key ingredient in Negronis. Red color, bitter taste.',
    category: 'modifier',
  },
  {
    id: 'term-18',
    term: 'amaro',
    definition: 'Italian herbal liqueur. Bitter-sweet. Many varieties (Averna, Fernet, etc.).',
    category: 'modifier',
  },
  {
    id: 'term-19',
    term: 'agave',
    definition: 'Agave nectar/syrup. Sweetener made from agave plant. Common in tequila cocktails.',
    category: 'modifier',
  },
  {
    id: 'term-20',
    term: 'grenadine',
    definition: 'Pomegranate syrup. Adds sweetness and red color. Used in many classic drinks.',
    category: 'modifier',
  },
];
