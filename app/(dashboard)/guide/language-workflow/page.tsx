import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';

export default function LanguageWorkflowPage() {
  // Static glossary terms - can be moved to JSON if needed
  const glossaryTerms = [
    { term: 'neat', definition: 'Spirit only, no ice, no mixer. Served at room temperature.', category: 'method' },
    { term: 'rocks', definition: 'Over ice in a rocks glass. Same as "on the rocks."', category: 'glassware' },
    { term: 'up', definition: 'Chilled and strained into a glass with no ice. Served cold but undiluted.', category: 'method' },
    { term: 'dry', definition: 'Less vermouth. For martinis, this means less dry vermouth. Sometimes means "just rinse the glass with vermouth."', category: 'modifier' },
    { term: 'dirty', definition: 'Olive brine added. Usually for martinis.', category: 'modifier' },
    { term: 'twist', definition: 'Citrus peel (lemon or orange) expressed over the drink and used as garnish.', category: 'garnish' },
    { term: 'double', definition: 'Double the spirit amount. Usually served in a larger glass or with more ice.', category: 'method' },
  ];

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Bar Language + Workflow Refresher</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Key terms, workflow tips, and communication essentials.
        </p>
      </div>

      <Card className="border-brutal">
        <CardHeader className="border-b-4 border-brutal">
          <CardTitle className="text-3xl font-black">Key Terms You Need to Be Sharp On</CardTitle>
          <CardDescription className="text-lg font-medium">
            Master these terms and you'll sound like you know what you're doing.
          </CardDescription>
        </CardHeader>
        <CardContent className="pt-6">
          <div className="grid md:grid-cols-2 gap-4">
            {glossaryTerms.map((term, index) => (
              <div key={index} className="border-brutal-sm p-4 bg-muted/30">
                <div className="flex items-center justify-between mb-2">
                  <div className="text-lg font-black">{term.term}</div>
                  {term.category && (
                    <Badge variant="secondary" className="text-sm px-3 py-1.5 font-bold border-brutal-sm">
                      {term.category}
                    </Badge>
                  )}
                </div>
                <p className="text-base font-medium text-muted-foreground leading-relaxed">{term.definition}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Shake vs Stir Rule</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="rounded-md border p-4 bg-primary/5">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="secondary" className="text-base">SHAKE</Badge>
            </h4>
            <p className="text-sm text-muted-foreground">
              Anything with citrus, juice, egg white, dairy, or cloudy ingredients. You shake drinks with citrus, 
              juice, egg whites, or anything that needs aeration or mixing thoroughly.
            </p>
            <p className="text-sm font-medium mt-2">Examples: Margarita, Daiquiri, Whiskey Sour, Cosmopolitan</p>
          </div>
          <div className="rounded-md border p-4 bg-secondary/10">
            <h4 className="font-semibold mb-2 flex items-center gap-2">
              <Badge variant="outline" className="text-base">STIR</Badge>
            </h4>
            <p className="text-sm text-muted-foreground">
              Clear-only drinks: spirits + liqueurs + vermouth. Stir clear drinks—spirits plus liqueurs or vermouth. 
              Shake = chilled and mixed; stir = silky and diluted just right.
            </p>
            <p className="text-sm font-medium mt-2">Examples: Old Fashioned, Manhattan, Negroni, Martini</p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Common Modifiers</CardTitle>
          <CardDescription>
            Know what these are and how to use them.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Vermouth</div>
              <p className="text-sm text-muted-foreground">
                Fortified wine. Dry vermouth (white, less sweet) or sweet vermouth (red, sweeter).
              </p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Triple Sec / Cointreau</div>
              <p className="text-sm text-muted-foreground">
                Orange liqueur. Cointreau is a premium version. Used in margaritas and cosmopolitans.
              </p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Campari</div>
              <p className="text-sm text-muted-foreground">
                Italian bitter liqueur. Key ingredient in Negronis. Red color, bitter taste.
              </p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Bitters</div>
              <p className="text-sm text-muted-foreground">
                Highly concentrated flavor extracts. Angostura is most common. A few dashes add complexity.
              </p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Simple Syrup</div>
              <p className="text-sm text-muted-foreground">
                Equal parts sugar and water, dissolved. 1:1 ratio. Sweetener for cocktails.
              </p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Agave</div>
              <p className="text-sm text-muted-foreground">
                Agave nectar/syrup. Sweetener made from agave plant. Common in tequila cocktails.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Order Communication</CardTitle>
          <CardDescription>
            How to read tickets, call drinks, and communicate effectively.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <h4 className="font-semibold">Reading Tickets</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Scan quickly—don't overthink</li>
              <li>Look for modifiers: "up", "rocks", "double", "dry", "dirty"</li>
              <li>Note glassware requirements</li>
              <li>Check for special requests or allergies</li>
            </ul>
          </div>
          <div className="space-y-2">
            <h4 className="font-semibold">Calling Drinks</h4>
            <ul className="text-sm text-muted-foreground space-y-1 list-disc list-inside ml-2">
              <li>Call out what you're making: "Two margaritas on the bar"</li>
              <li>Let servers know timing: "4 minutes on that margarita order"</li>
              <li>Ask for help when needed: "I need ice, limes prepped"</li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Batch Building Strategies</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="space-y-2">
            <h4 className="font-semibold">Workflow Order (Most Efficient)</h4>
            <ol className="text-sm text-muted-foreground space-y-1 list-decimal list-inside ml-2">
              <li><strong>Build all rocks drinks first</strong>—they can sit on ice without degrading</li>
              <li><strong>Shake all sours together</strong>—batch them, build multiple at once</li>
              <li><strong>Make any stirred drinks</strong>—martinis, Negronis (take longer to stir)</li>
              <li><strong>Then simple highballs</strong>—fastest, build in glass</li>
            </ol>
          </div>
          <div className="rounded-md border p-3 bg-primary/5 mt-4">
            <p className="text-sm italic">
              <strong>Pro tip:</strong> Always build the "up" and shaken drinks before rocks if you can, 
              so they stay cold but not diluted. Group by build: do all shaken drinks, then stirred, then simple highballs.
            </p>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Speed Tips</CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="text-sm text-muted-foreground space-y-2 list-disc list-inside ml-2">
            <li><strong>Prep citrus at start of shift</strong>—cut fresh lime/lemon wheels and wedges</li>
            <li><strong>Batch motions</strong>—grab all citrus at once, prep multiple garnishes together</li>
            <li><strong>Free pour (once confident)</strong>—learn to eyeball 1.5 oz & 0.75 oz with jigger as backup</li>
            <li><strong>Keep tools within reach</strong>—don't hunt for jiggers, strainers, or spoons</li>
            <li><strong>Stay organized even in chaos</strong>—this actually makes you faster</li>
            <li><strong>Don't let shaker sit with ice</strong>—ice melts = over-diluted drink</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
}
