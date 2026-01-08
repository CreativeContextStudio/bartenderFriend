// Static checklist data
const checklists = {
  'day-one': {
    id: 'day-one-1',
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
  'opening': {
    id: 'opening-1',
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
  'closing': {
    id: 'closing-1',
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
  'station': {
    id: 'station-1',
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
};
import { ChecklistForm } from '@/components/forms/checklist-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2 } from 'lucide-react';

export default function ChecklistsPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const checklistType = searchParams.type || 'day-one';
  const checklist = checklists[checklistType as keyof typeof checklists] || null;
  const allChecklists = Object.values(checklists);

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Practical Checklists</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Interactive checklists for real-world scenarios. Check off items as you complete them.
        </p>
      </div>

      {checklist ? (
        <ChecklistForm checklist={checklist} />
          ) : (
            <Tabs defaultValue={checklistType} className="w-full">
              <TabsList className="grid w-full grid-cols-4 border-brutal-sm">
                <TabsTrigger value="day-one" className="text-base font-bold">
                  <Link href="/training/checklists?type=day-one">Day One</Link>
                </TabsTrigger>
                <TabsTrigger value="opening" className="text-base font-bold">
                  <Link href="/training/checklists?type=opening">Opening</Link>
                </TabsTrigger>
                <TabsTrigger value="closing" className="text-base font-bold">
                  <Link href="/training/checklists?type=closing">Closing</Link>
                </TabsTrigger>
                <TabsTrigger value="station" className="text-base font-bold">
                  <Link href="/training/checklists?type=station">Station</Link>
                </TabsTrigger>
              </TabsList>

              {allChecklists.length > 0 ? (
                allChecklists.map((chk) => (
                  <TabsContent key={chk.id} value={chk.type}>
                    <ChecklistForm checklist={chk} />
                  </TabsContent>
                ))
              ) : (
                <Card className="border-brutal">
                  <CardContent className="py-12 text-center text-muted-foreground">
                    <p className="text-lg font-medium">No checklists found.</p>
                  </CardContent>
                </Card>
              )}
            </Tabs>
          )}

      <Card className="border-brutal">
        <CardHeader className="border-b-4 border-brutal">
          <CardTitle className="text-3xl font-black">All Checklists</CardTitle>
          <CardDescription className="text-lg font-medium">
            Access different checklists for different scenarios
          </CardDescription>
        </CardHeader>
        <CardContent className="grid md:grid-cols-2 gap-4 pt-6">
          <Link href="/training/checklists?type=day-one">
            <Button variant="outline" className="w-full justify-start h-auto py-5 border-brutal-sm font-bold hover:scale-[1.02] transition-all duration-200">
              <CheckCircle2 className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-base font-black">Day One On The Job</div>
                <div className="text-sm font-medium text-muted-foreground">First shift checklist</div>
              </div>
            </Button>
          </Link>
          <Link href="/training/checklists?type=opening">
            <Button variant="outline" className="w-full justify-start h-auto py-5 border-brutal-sm font-bold hover:scale-[1.02] transition-all duration-200">
              <CheckCircle2 className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-base font-black">Opening Checklist</div>
                <div className="text-sm font-medium text-muted-foreground">Mise en place</div>
              </div>
            </Button>
          </Link>
          <Link href="/training/checklists?type=closing">
            <Button variant="outline" className="w-full justify-start h-auto py-5 border-brutal-sm font-bold hover:scale-[1.02] transition-all duration-200">
              <CheckCircle2 className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-base font-black">Closing Checklist</div>
                <div className="text-sm font-medium text-muted-foreground">End of shift duties</div>
              </div>
            </Button>
          </Link>
          <Link href="/training/checklists?type=station">
            <Button variant="outline" className="w-full justify-start h-auto py-5 border-brutal-sm font-bold hover:scale-[1.02] transition-all duration-200">
              <CheckCircle2 className="mr-3 h-6 w-6" />
              <div className="text-left">
                <div className="text-base font-black">Station Setup</div>
                <div className="text-sm font-medium text-muted-foreground">Tool organization</div>
              </div>
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
