// Static checklist data - from bartender-interview-shift-guide.md

export interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
  notes?: string;
}

export interface Checklist {
  id: string;
  name: string;
  type: 'day-one' | 'opening' | 'closing' | 'station';
  items: ChecklistItem[];
}

export const checklists: Checklist[] = [
  {
    id: 'checklist-day-one',
    name: 'Day One On The Job',
    type: 'day-one',
    items: [
      { id: '1', task: 'Ask for the house spec sheet', completed: false },
      { id: '2', task: 'Confirm house versions of: Margarita, Old Fashioned, Martini, Negroni, Mojito, Mule', completed: false },
      { id: '3', task: 'Watch the fastest bartender on shift - note station setup', completed: false },
      { id: '4', task: 'Watch how they batch motions (grab all citrus at once, etc.)', completed: false },
      { id: '5', task: 'Note how they communicate with guests while building drinks', completed: false },
      { id: '6', task: 'Verify your station setup matches house standards', completed: false },
    ],
  },
  {
    id: 'checklist-opening',
    name: 'Opening Checklist',
    type: 'opening',
    items: [
      { id: '1', task: 'Clear, organized bartop', completed: false },
      { id: '2', task: 'All glassware clean and within reach', completed: false },
      { id: '3', task: 'Shaker, bar spoon, jigger, strainers, muddler visible and ready', completed: false },
      { id: '4', task: 'Ice bin full of fresh ice', completed: false },
      { id: '5', task: 'Garnish trays prepped: citrus wheels/wedges, olives, cherry', completed: false },
      { id: '6', task: 'Speed rail: most-used spirits at arm\'s reach', completed: false },
      { id: '7', task: 'Vermouth, Cointreau, Campari, bitters lined up', completed: false },
      { id: '8', task: 'All bottles clean and facing forward (labels out)', completed: false },
      { id: '9', task: 'Bottle pourers installed on all liquor', completed: false },
      { id: '10', task: 'Simple syrup, agave, grenadine prepped and in dispensers', completed: false },
      { id: '11', task: 'Soda gun tested (know each button)', completed: false },
      { id: '12', task: 'Fresh lemon and lime juice squeezed', completed: false },
      { id: '13', task: 'POS terminal powered on and responsive', completed: false },
      { id: '14', task: 'Drawer unlocked with starting cash', completed: false },
      { id: '15', task: 'Bar tools wiped down', completed: false },
      { id: '16', task: 'Napkins, coasters, water glasses at bar', completed: false },
      { id: '17', task: 'Music volume appropriate', completed: false },
      { id: '18', task: 'Lighting set to service mode', completed: false },
      { id: '19', task: 'No broken glassware, no spills or wet spots', completed: false },
    ],
  },
  {
    id: 'checklist-closing',
    name: 'Closing Checklist',
    type: 'closing',
    items: [
      { id: '1', task: 'Stop accepting new orders at last call', completed: false },
      { id: '2', task: 'Finish current orders', completed: false },
      { id: '3', task: 'Wipe down bar top', completed: false },
      { id: '4', task: 'Empty garnish trays, store prepped citrus in walk-in', completed: false },
      { id: '5', task: 'Remove pouring spouts from liquor bottles, place caps back on', completed: false },
      { id: '6', task: 'Place liquor bottles back in secure storage', completed: false },
      { id: '7', task: 'Drain ice bins; dispose of ice; sanitize bins', completed: false },
      { id: '8', task: 'All glasses go through dishwasher or hand-wash', completed: false },
      { id: '9', task: 'All metal bar tools (shaker, spoon, strainers) washed and dried', completed: false },
      { id: '10', task: 'Bar mats washed; hang to dry', completed: false },
      { id: '11', task: 'Rinse buckets emptied and sanitized', completed: false },
      { id: '12', task: 'Soda gun lines flushed (run water through each button)', completed: false },
      { id: '13', task: 'Beer taps cleaned with water', completed: false },
      { id: '14', task: 'Record any kegs that need changing for next shift', completed: false },
      { id: '15', task: 'Fresh ice made and ready for opening shift', completed: false },
      { id: '16', task: 'Garnishes prepped (if house does this at close)', completed: false },
      { id: '17', task: 'Liquor inventory checked; alert manager if anything is low', completed: false },
      { id: '18', task: 'Count cash in drawer (should match tickets)', completed: false },
      { id: '19', task: 'Separate tips from till', completed: false },
      { id: '20', task: 'Manager verifies and records deposit', completed: false },
      { id: '21', task: 'Check under bar stools for spilled change or forgotten items', completed: false },
      { id: '22', task: 'Wipe down bar one more time', completed: false },
      { id: '23', task: 'All bottles stored correctly', completed: false },
      { id: '24', task: 'Floor swept', completed: false },
      { id: '25', task: 'Lights off, music off', completed: false },
    ],
  },
  {
    id: 'checklist-station',
    name: 'Station Setup',
    type: 'station',
    items: [
      { id: '1', task: 'Shaker tins (Boston shaker or cobbler)', completed: false },
      { id: '2', task: 'Mixing glass and bar spoon', completed: false },
      { id: '3', task: 'Jigger (dual-sided: 1 oz / 1.5 oz)', completed: false },
      { id: '4', task: 'Hawthorne strainer', completed: false },
      { id: '5', task: 'Fine strainer', completed: false },
      { id: '6', task: 'Muddler', completed: false },
      { id: '7', task: 'Channel knife (for citrus peels)', completed: false },
      { id: '8', task: 'Ice scoop', completed: false },
      { id: '9', task: 'Rinse bucket with clean water', completed: false },
      { id: '10', task: 'Bar mat or towel for spills', completed: false },
    ],
  },
];
