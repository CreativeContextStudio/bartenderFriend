// Static cheat sheet data - from bartender-cheat-sheet.md

export interface CheatSheetItem {
  id: string;
  name: string;
  spec_short: string;
  glass: string;
  garnish: string;
  order: number;
}

export const cheatSheetItems: CheatSheetItem[] = [
  {
    id: 'cheat-1',
    name: 'Margarita',
    spec_short: '2 oz tequila, 1 oz lime, ¾ oz triple sec, ¼ oz agave',
    glass: 'rocks',
    garnish: 'Lime wheel, salt rim',
    order: 1,
  },
  {
    id: 'cheat-2',
    name: 'Daiquiri',
    spec_short: '2 oz light rum, 1 oz lime, ¾ oz simple',
    glass: 'coupe',
    garnish: 'Lime wheel',
    order: 2,
  },
  {
    id: 'cheat-3',
    name: 'Whiskey Sour',
    spec_short: '2 oz bourbon, ¾ oz lemon, ¾ oz simple',
    glass: 'rocks',
    garnish: 'Cherry + orange slice',
    order: 3,
  },
  {
    id: 'cheat-4',
    name: 'Cosmopolitan',
    spec_short: '1½ oz vodka, 1 oz Cointreau, ½ oz lime, ½ oz cranberry',
    glass: 'coupe',
    garnish: 'Lime wheel',
    order: 4,
  },
  {
    id: 'cheat-5',
    name: 'Old Fashioned',
    spec_short: '2 oz bourbon/rye, ¼-½ oz simple, 2-3 dashes Angostura',
    glass: 'rocks',
    garnish: 'Orange peel',
    order: 5,
  },
  {
    id: 'cheat-6',
    name: 'Negroni',
    spec_short: '1 oz gin, 1 oz sweet vermouth, 1 oz Campari',
    glass: 'rocks',
    garnish: 'Orange peel',
    order: 6,
  },
  {
    id: 'cheat-7',
    name: 'Manhattan',
    spec_short: '2 oz rye/bourbon, 1 oz sweet vermouth, 2 dashes Angostura',
    glass: 'coupe',
    garnish: 'Cherry',
    order: 7,
  },
  {
    id: 'cheat-8',
    name: 'Martini (Gin)',
    spec_short: '2½ oz gin, ½ oz dry vermouth',
    glass: 'coupe',
    garnish: 'Lemon twist or olive',
    order: 8,
  },
  {
    id: 'cheat-9',
    name: 'Martini (Vodka)',
    spec_short: '2½ oz vodka, ½ oz dry vermouth',
    glass: 'coupe',
    garnish: 'Lemon twist or olive',
    order: 9,
  },
  {
    id: 'cheat-10',
    name: 'Gin & Tonic',
    spec_short: '1½-2 oz gin, top tonic water',
    glass: 'collins',
    garnish: 'Lime wedge',
    order: 10,
  },
  {
    id: 'cheat-11',
    name: 'Vodka Soda',
    spec_short: '1½-2 oz vodka, top soda water',
    glass: 'collins',
    garnish: 'Lime wedge',
    order: 11,
  },
  {
    id: 'cheat-12',
    name: 'Rum & Coke',
    spec_short: '1½-2 oz rum, top Coke',
    glass: 'collins',
    garnish: 'Lime (optional)',
    order: 12,
  },
  {
    id: 'cheat-13',
    name: 'Moscow Mule',
    spec_short: '2 oz vodka, ½ oz lime juice, top ginger beer',
    glass: 'rocks',
    garnish: 'Lime wheel',
    order: 13,
  },
  {
    id: 'cheat-14',
    name: 'Paloma',
    spec_short: '2 oz tequila, ½ oz lime, top grapefruit soda',
    glass: 'rocks',
    garnish: 'Salt rim (optional), lime',
    order: 14,
  },
  {
    id: 'cheat-15',
    name: 'Tom Collins',
    spec_short: '2 oz gin, ¾ oz lemon, ¾ oz simple, shake, strain, top soda',
    glass: 'collins',
    garnish: 'Lemon wheel + cherry',
    order: 15,
  },
];
