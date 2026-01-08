import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { readMarkdownFile } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';

export default function BasicRecipesPage() {
  const basicKnowledgeContent = readMarkdownFile('basicKnowledge.md');
  
  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Basic Recipe Knowledge</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Learn the patterns, not just individual recipes. Think templates.
        </p>
      </div>

      {basicKnowledgeContent && (
        <Card className="border-brutal">
          <CardHeader className="border-b-4 border-brutal">
            <CardTitle className="text-3xl font-black">Basic Recipe Knowledge</CardTitle>
          </CardHeader>
          <CardContent>
            <MarkdownContent content={basicKnowledgeContent} />
          </CardContent>
        </Card>
      )}

      <Card className="border-brutal">
        <CardHeader className="border-b-4 border-brutal">
          <CardTitle className="text-3xl font-black">What "Basic Recipe Knowledge" Means</CardTitle>
          <CardDescription className="text-lg font-medium">
            In a new, hip bar/restaurant, "basic recipe knowledge" typically includes:
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div>
            <h3 className="text-xl font-black mb-3">Core Families of Drinks</h3>
            <ul className="list-disc list-inside space-y-2 text-base font-medium text-muted-foreground leading-relaxed">
              <li><strong className="font-black">Sours:</strong> Margarita, Daiquiri, Whiskey Sour, Cosmopolitan</li>
              <li><strong className="font-black">Spirit-forward:</strong> Old Fashioned, Manhattan, Negroni, Martini</li>
              <li><strong className="font-black">Highballs:</strong> Gin & Tonic, Rum & Coke, Vodka Soda, Paloma, Moscow Mule</li>
              <li><strong className="font-black">Collins/Fizz:</strong> Tom Collins, Vodka Collins</li>
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-black mb-3">Standard Specs</h3>
            <ul className="list-disc list-inside space-y-2 text-base font-medium text-muted-foreground leading-relaxed">
              <li>Typical builds: 2 oz base spirit, ¾-1 oz citrus, ½-¾ oz sweetener</li>
              <li>When to shake vs stir</li>
              <li>When to serve up vs rocks vs long/Collins</li>
              <li>Common garnishes (lime wedge vs wheel, orange peel, cherry)</li>
            </ul>
          </div>
          <p className="text-muted-foreground">
            If you can walk in and comfortably make ~20-30 classics from memory and understand the patterns, 
            you'll read as "has basic recipe knowledge" and everything else you can learn on the job.
          </p>
        </CardContent>
      </Card>

      <Accordion type="single" collapsible className="w-full space-y-4">
        <AccordionItem value="sour-template">
          <AccordionTrigger className="text-xl">Sour Template (Shaken, Citrusy, Crowd-Pleasers)</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Generic Sour Template</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>2 oz base spirit</li>
                <li>¾ oz fresh lemon or lime</li>
                <li>¾ oz simple syrup (1:1) or equivalent sweetener</li>
                <li>Shake hard with ice, strain</li>
                <li>Glass: Coupe (up) or rocks (on ice)</li>
                <li>Garnish: Citrus wheel/wedge or peel</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Examples</h4>
              <div className="space-y-3 pl-4">
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Margarita</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz tequila (blanco)</li>
                    <li>1 oz lime</li>
                    <li>¾ oz triple sec (or Cointreau)</li>
                    <li>¼ oz agave or simple (optional)</li>
                    <li>Shake, strain over fresh ice in rocks glass (or up); salt rim optional</li>
                    <li>Garnish: Lime wheel</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Daiquiri</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz light rum</li>
                    <li>1 oz lime</li>
                    <li>¾ oz simple syrup</li>
                    <li>Shake, strain into coupe (no ice)</li>
                    <li>Garnish: Lime wheel</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Whiskey Sour (no egg white version)</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz bourbon</li>
                    <li>¾ oz lemon</li>
                    <li>¾ oz simple syrup</li>
                    <li>Shake, strain into rocks glass over ice (or up)</li>
                    <li>Garnish: Cherry + orange slice or lemon peel</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              Memorize the <strong>sour template</strong> and you can reconstruct tons of menu drinks on the fly.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="spirit-forward">
          <AccordionTrigger className="text-xl">Spirit-Forward Template (Stirred, Boozy, Silky)</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Generic "Boozy, Stirred" Template</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>2 oz base spirit</li>
                <li>1 oz modifier(s)</li>
                <li>Stir with ice 20-30 seconds</li>
                <li>Strain into coupe or rocks (depending on style)</li>
                <li>Garnish with peel or cherry</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Examples</h4>
              <div className="space-y-3 pl-4">
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Old Fashioned (modern spec)</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz bourbon or rye</li>
                    <li>¼-½ oz simple syrup or 1 sugar cube</li>
                    <li>2-3 dashes Angostura bitters</li>
                    <li>Stir with ice, serve over large cube in rocks glass</li>
                    <li>Garnish: Orange peel, cherry optional</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Manhattan</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz rye or bourbon</li>
                    <li>1 oz sweet vermouth</li>
                    <li>2 dashes Angostura</li>
                    <li>Stir, strain into coupe</li>
                    <li>Garnish: Cherry</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Negroni</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>1 oz gin</li>
                    <li>1 oz sweet vermouth</li>
                    <li>1 oz Campari</li>
                    <li>Stir, rocks glass over large ice</li>
                    <li>Garnish: Orange peel</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Martini (house styles vary)</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>"Dry" classic: 2½ oz gin or vodka, ½ oz dry vermouth</li>
                    <li>Stir (or shake if requested), strain into martini glass</li>
                    <li>Garnish: Lemon twist or olives (dirty martini = add olive brine)</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              If you know these, you can handle 90% of "classic but boozy" orders.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="highball">
          <AccordionTrigger className="text-xl">Highballs and Simple Builds (Speed + Volume)</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-2">
              <h4 className="font-semibold">Core Pattern</h4>
              <ul className="list-disc list-inside space-y-1 text-muted-foreground ml-4">
                <li>1½-2 oz spirit</li>
                <li>Build in tall glass over ice</li>
                <li>Top with mixer, quick garnish, no fuss</li>
              </ul>
            </div>
            <div className="space-y-2">
              <h4 className="font-semibold">Examples</h4>
              <div className="space-y-3 pl-4">
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Gin & Tonic</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>1½-2 oz gin, top tonic in Collins glass</li>
                    <li>Lime wedge</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Vodka Soda</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>1½-2 oz vodka, top soda</li>
                    <li>Lime wedge</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Rum & Coke</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>1½-2 oz rum, top cola</li>
                    <li>Lime optional</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Paloma</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz tequila, ~½ oz lime, top grapefruit soda (Jarritos/Squirt)</li>
                    <li>Salt rim optional, lime</li>
                  </ul>
                </div>
                <div className="rounded-md border p-3">
                  <div className="font-medium mb-1">Moscow Mule</div>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li>2 oz vodka, ½ oz lime, top ginger beer</li>
                    <li>Copper mug/rocks, lime garnish</li>
                  </ul>
                </div>
              </div>
            </div>
            <p className="text-sm text-muted-foreground italic">
              If you can free-pour these and keep moving, you'll feel back in rhythm fast.
            </p>
          </AccordionContent>
        </AccordionItem>

        <AccordionItem value="shake-vs-stir">
          <AccordionTrigger className="text-xl">When to Shake vs Stir (Rule of Thumb)</AccordionTrigger>
          <AccordionContent className="space-y-4 pt-4">
            <div className="space-y-3">
              <div className="rounded-md border p-4 bg-primary/5">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Badge variant="secondary">SHAKE</Badge>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Anything with citrus, juice, egg white, dairy, or cloudy ingredients. You shake drinks with citrus, 
                  juice, egg whites, or anything that needs aeration or mixing thoroughly.
                </p>
              </div>
              <div className="rounded-md border p-4 bg-secondary/10">
                <h4 className="font-semibold mb-2 flex items-center gap-2">
                  <Badge variant="outline">STIR</Badge>
                </h4>
                <p className="text-sm text-muted-foreground">
                  Clear-only drinks: spirits + liqueurs + vermouth. Stir clear drinks—spirits plus liqueurs or vermouth. 
                  Shake = chilled and mixed; stir = silky and diluted just right.
                </p>
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>

      <Card>
        <CardHeader>
          <CardTitle>Glassware Basics</CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Rocks</div>
              <p className="text-sm text-muted-foreground">Short, wide glass. Old Fashioned glass. For drinks served over ice.</p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Coupe</div>
              <p className="text-sm text-muted-foreground">Wide, shallow glass with stem. Used for cocktails served "up."</p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Collins</div>
              <p className="text-sm text-muted-foreground">Tall, narrow glass. For highballs and long drinks with mixer.</p>
            </div>
            <div className="rounded-md border p-3">
              <div className="font-medium mb-1">Martini Glass</div>
              <p className="text-sm text-muted-foreground">V-shaped glass with stem. Used for martinis and other stirred drinks served up.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
