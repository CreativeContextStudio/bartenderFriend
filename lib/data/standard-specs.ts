// Static standard specs data

export interface StandardSpec {
  id: string;
  name: string;
  spec: Record<string, string>;
  method: string;
  variations?: Array<{ name: string; [key: string]: any }>;
  notes: string;
}

export const standardSpecs: StandardSpec[] = [
  {
    id: 'spec-1',
    name: 'Sour Template',
    spec: { base_spirit: '2 oz', citrus: '¾ oz', sweetener: '¾ oz' },
    method: 'shake',
    variations: [
      { name: 'Daiquiri', spirit: 'rum', citrus: 'lime' },
      { name: 'Whiskey Sour', spirit: 'bourbon', citrus: 'lemon' },
    ],
    notes: 'The foundation: spirit + citrus + sweetener. Shake hard, strain.',
  },
  {
    id: 'spec-2',
    name: 'Spirit-Forward Template',
    spec: { base_spirit: '2 oz', modifier: '1 oz' },
    method: 'stir',
    variations: [
      { name: 'Old Fashioned', spirit: 'bourbon', modifier: 'simple + bitters' },
      { name: 'Manhattan', spirit: 'rye', modifier: 'sweet vermouth' },
    ],
    notes: 'Boozy, stirred, silky. 20-30 second stir.',
  },
  {
    id: 'spec-3',
    name: 'Highball Template',
    spec: { base_spirit: '1½-2 oz', mixer: 'top' },
    method: 'build',
    variations: [
      { name: 'Gin & Tonic', spirit: 'gin', mixer: 'tonic' },
      { name: 'Vodka Soda', spirit: 'vodka', mixer: 'soda' },
    ],
    notes: 'Build in glass over ice. Top with mixer. Fast and simple.',
  },
];
