import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { readMarkdownFile } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';

export default function BehindBarPage() {
  const interviewGuideContent = readMarkdownFile('bartender-interview-shift-guide.md');
  
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Back Behind the Bar</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Everything you need to know about setting up, working efficiently, and closing down.
        </p>
      </div>

      {interviewGuideContent && (
        <Card className="border-brutal">
          <CardHeader className="border-b-4 border-brutal">
            <CardTitle className="text-3xl font-black">Complete Shift Guide</CardTitle>
            <CardDescription className="text-lg font-medium">
              Full guide from interview prep to closing duties
            </CardDescription>
          </CardHeader>
          <CardContent>
            <MarkdownContent content={interviewGuideContent} />
          </CardContent>
        </Card>
      )}

      <Card className="border-brutal">
        <CardHeader className="border-b-4 border-brutal">
          <CardTitle className="text-3xl font-black">Mise en Place (Everything in Its Place)</CardTitle>
          <CardDescription className="text-lg font-medium">
            Your job: The bar must be ready to execute the moment the door opens.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <p className="text-sm text-muted-foreground">
            <strong>Mise en place</strong> (French for "everything in its place"). 
            30-45 minutes before opening, get everything ready.
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Station Setup</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Clear, organized bartop</li>
                <li>All glassware clean and within reach</li>
                <li>Shaker, bar spoon, jigger, strainers, muddler visible and ready</li>
                <li>Ice bin full of fresh ice</li>
                <li>Garnish trays prepped</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Speed Rail & Liquor</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Most-used spirits at arm's reach</li>
                <li>Vermouth, Cointreau, Campari, bitters lined up</li>
                <li>All bottles clean and facing forward</li>
                <li>Bottle pourers installed on all liquor</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Mixers & Syrups</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Simple syrup, agave, grenadine prepped and in dispensers</li>
                <li>Soda gun tested (know each button)</li>
                <li>Fresh lemon and lime juice squeezed</li>
                <li>Canned/bottled mixers chilled</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Tools Checklist</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Shaker tins (Boston shaker or cobbler)</li>
                <li>Mixing glass and bar spoon</li>
                <li>Jigger (dual-sided: 1 oz / 1.5 oz)</li>
                <li>Hawthorne strainer</li>
                <li>Fine strainer</li>
                <li>Muddler</li>
                <li>Channel knife (for citrus peels)</li>
              </ul>
            </div>
          </div>
          <div className="rounded-md border p-4 bg-primary/5 mt-4">
            <p className="text-sm font-medium">
              <strong>Moment of truth:</strong> Do a 2-minute visual scan. Would you feel confident 
              serving drinks in this setup? If not, fix it.
            </p>
          </div>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="ice-management">
          <AccordionTrigger className="text-xl">Ice Management</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Fresh Ice, Always</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Use fresh ice—don't let shaker sit with ice</li>
                <li>Ice melts = over-diluted drink</li>
                <li>Empty ice bins at close; sanitize bins</li>
                <li>Fresh ice made and ready for opening shift</li>
              </ul>
            </div>
            <div className="rounded-md border p-3 bg-muted/50">
              <p className="text-sm italic">
                <strong>Rule:</strong> If ice sits in your shaker while you're doing something else, 
                it's melting. Your drink will be over-diluted. Work fast, or start fresh.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="workflow">
          <AccordionTrigger className="text-xl">Workflow: Building Efficiently</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <h4 className="font-semibold">Your Strategy in a Rush</h4>
              <div className="space-y-3">
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-2">1. Read the tickets quickly</div>
                  <p className="text-sm text-muted-foreground">Scan what needs to be made. Don't overthink.</p>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-2">2. Prioritize efficiently:</div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2 mt-2">
                    <li>Build all rocks drinks first (they can sit on ice without degrading)</li>
                    <li>Then shake all sours together (batch them)</li>
                    <li>Then make any stirred drinks (martinis, Negronis)</li>
                    <li>Then simple highballs (fastest)</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-2">3. Communicate constantly:</div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2 mt-2">
                    <li>To servers: "4 minutes on that margarita order"</li>
                    <li>To barback/other bartender: "I need ice, limes prepped, garnish check"</li>
                    <li>To guests waiting: "You're up next, what can I make you?"</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-2">4. Maintain station hygiene—even in chaos:</div>
                  <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2 mt-2">
                    <li>Don't let rinse bucket overflow</li>
                    <li>Keep jiggers and spoon within reach</li>
                    <li>Wipe spills immediately (slip hazard + looks sloppy)</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-2">5. Stay calm and breathe</div>
                  <p className="text-sm text-muted-foreground">You've done this before. Muscle memory will kick in.</p>
                </div>
              </div>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold text-destructive">Common Rush-Time Mistakes to Avoid</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Leaving incomplete drinks on the bar (other bartender might grab them)</li>
                <li>Free-pouring without checking (consistency matters)</li>
                <li>Forgetting garnishes (guests notice, servers come back)</li>
                <li>Not communicating (everyone's confused, things take longer)</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="speed-cleanliness">
          <AccordionTrigger className="text-xl">Speed & Cleanliness</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Keep It Clean, Keep It Fast</h4>
              <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
                <li>Rinse bucket: Keep it clean, empty it regularly</li>
                <li>Wipe spills immediately—slip hazard and looks unprofessional</li>
                <li>Keep jiggers and spoon within reach—don't hunt for tools</li>
                <li>Batch motions: Grab all citrus at once, prep multiple garnishes together</li>
                <li>Stay organized even in chaos—this actually makes you faster</li>
              </ul>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="guest-interaction">
          <AccordionTrigger className="text-xl">Guest Interaction Micro-Scripts</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">"What would you recommend?"</div>
                <p className="text-sm text-muted-foreground italic">
                  → "Do you like spirit-forward drinks, fruity & tart, or something smooth? Tequila, gin, or vodka person?"
                </p>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">"Make me something not too sweet."</div>
                <p className="text-sm text-muted-foreground italic">
                  → Old Fashioned, Negroni, Martini, Daiquiri
                </p>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">"I like tequila and citrus, not too sweet."</div>
                <p className="text-sm text-muted-foreground italic">
                  → Paloma, Margarita (light on agave), Daiquiri (with tequila instead of rum)
                </p>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">"Something strong."</div>
                <p className="text-sm text-muted-foreground italic">
                  → Old Fashioned, Negroni, Martini (spirit-forward builds)
                </p>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">"What if I don't know a drink someone orders?"</div>
                <p className="text-sm text-muted-foreground italic">
                  → "I'm not familiar with that one—can you describe it to me, or would you like me to make you something I know well?" 
                  Or ask the manager/senior bartender nearby. Never guess.
                </p>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">"What if I mess up a drink and they complain?"</div>
                <p className="text-sm text-muted-foreground italic">
                  → Apologize, take it back, remake it immediately, don't charge them. Move on. It happens to everyone.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="closing">
          <AccordionTrigger className="text-xl">Closing Duties</AccordionTrigger>
          <AccordionContent className="space-y-3 pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">When Last Call is Announced</h4>
              <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-2">
                <li><strong>Stop accepting new orders</strong>—at call time, close the register for new drinks</li>
                <li><strong>Finish current orders</strong>—complete what's on the bar, not new requests</li>
                <li><strong>Begin station breakdown:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Wipe down bar top</li>
                    <li>Empty garnish trays, store prepped citrus in walk-in</li>
                    <li>Remove pouring spouts from liquor bottles, place caps back on</li>
                    <li>Place liquor bottles back in secure storage</li>
                    <li>Drain ice bins; dispose of ice; sanitize bins</li>
                  </ul>
                </li>
                <li><strong>Glassware & Equipment:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>All glasses go through dishwasher or hand-wash</li>
                    <li>All metal bar tools washed and dried</li>
                    <li>Bar mats washed; hang to dry</li>
                    <li>Rinse buckets emptied and sanitized</li>
                  </ul>
                </li>
                <li><strong>Soda Gun & Taps:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Soda gun lines flushed (run water through each button)</li>
                    <li>Beer taps cleaned with water</li>
                    <li>Record any kegs that need changing for next shift</li>
                  </ul>
                </li>
                <li><strong>Cash Out:</strong>
                  <ul className="list-disc list-inside ml-4 mt-1">
                    <li>Count cash in your drawer (should match tickets rung in)</li>
                    <li>Separate tips from till (your take)</li>
                    <li>Manager verifies and records deposit</li>
                  </ul>
                </li>
              </ol>
              <p className="text-sm text-muted-foreground mt-4">
                <strong>Time estimate:</strong> 45 minutes to 1.5 hours depending on how busy the shift was.
              </p>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card>
        <CardHeader>
          <CardTitle>Mindset for Success in First 2 Weeks</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <ol className="text-sm text-muted-foreground space-y-2 list-decimal list-inside ml-2">
            <li><strong>Execute the basics perfectly</strong>—don't try to innovate</li>
            <li><strong>Ask questions</strong>—"Where's the bitters?" is better than guessing wrong</li>
            <li><strong>Batch similar drinks</strong>—this builds rhythm back fast</li>
            <li><strong>Engage with guests</strong>—small talk, remember a name, remember their drink</li>
            <li><strong>Be reliable</strong>—show up on time, don't call out, follow through</li>
            <li><strong>Observe the veterans</strong>—note how they move, what they prioritize</li>
            <li><strong>Stay sober</strong>—no drinking during or after your shift while on the job</li>
            <li><strong>Tip out fairly</strong>—if there's a barback or support staff, tip them 1–2% of your take</li>
          </ol>
          <p className="text-sm font-medium mt-4">
            After 2 weeks, muscle memory returns. After a month, you'll feel like you never left.
          </p>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Day One Checklist</CardTitle>
          <CardDescription>
            Quick reference for your first shift
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/training/checklists?type=day-one">
            <Button variant="outline" className="w-full">
              View Interactive Day One Checklist
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
