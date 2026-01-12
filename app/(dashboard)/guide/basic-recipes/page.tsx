import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import Link from 'next/link';

export default function BasicRecipesPage() {
  return (
    <div className="space-y-12 pb-16">
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-foreground">
          Basic Recipe Knowledge
        </h1>
        <p className="font-sans text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
          Stop memorizing 100 recipes. <br />
          Memorize the <span className="text-primary underline decoration-4 underline-offset-4">templates</span>.
        </p>
      </div>

      <section className="grid gap-x-12 gap-y-48 md:grid-cols-2 lg:grid-cols-2">
        {/* The Sour */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="neo-badge bg-[#70e000] text-black text-lg px-4 py-2">Template 01</span>
            <h2 className="font-display text-4xl font-black text-foreground">The Sour</h2>
          </div>
          <Card className="neo-card bg-card h-full relative overflow-hidden">
            <CardHeader className="border-b-4 border-border pb-4">
              <CardTitle className="text-xl font-black uppercase tracking-widest text-muted-foreground">The Formula</CardTitle>
              <div className="flex flex-col gap-2 mt-2 font-mono text-lg font-bold text-foreground">
                <div className="flex justify-between border-b border-dashed border-border pb-1">
                  <span>Base Spirit</span>
                  <span>2 oz</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-border pb-1">
                  <span>Citrus (Sour)</span>
                  <span>3/4 oz</span>
                </div>
                <div className="flex justify-between">
                  <span>Sugar (Sweet)</span>
                  <span>3/4 oz</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-black text-lg mb-2 flex items-center gap-2 text-foreground">
                  <span className="w-4 h-4 rounded-full bg-[#70e000] border-2 border-border"></span>
                  How to Build
                </h4>
                <p className="font-medium text-muted-foreground">Shake hard with ice. Strain. That's it.</p>
              </div>
              <div>
                <h4 className="font-black text-lg mb-2 text-foreground">Unlocks:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neo-badge bg-muted text-foreground hover:bg-[#70e000] hover:text-black">Margarita</Badge>
                  <Badge className="neo-badge bg-muted text-foreground hover:bg-[#70e000] hover:text-black">Daiquiri</Badge>
                  <Badge className="neo-badge bg-muted text-foreground hover:bg-[#70e000] hover:text-black">Whiskey Sour</Badge>
                  <Badge className="neo-badge bg-muted text-foreground hover:bg-[#70e000] hover:text-black">Gimlet</Badge>
                  <Badge className="neo-badge bg-muted text-foreground hover:bg-[#70e000] hover:text-black">Bee's Knees</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Spirit Forward */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="neo-badge bg-[#ff006e] text-white text-lg px-4 py-2">Template 02</span>
            <h2 className="font-display text-4xl font-black">Spirit Forward</h2>
          </div>
          <Card className="neo-card bg-white h-full relative overflow-hidden">
            <CardHeader className="border-b-4 border-black pb-4">
              <CardTitle className="text-xl font-black uppercase tracking-widest text-gray-500">The Formula</CardTitle>
              <div className="flex flex-col gap-2 mt-2 font-mono text-lg font-bold">
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                  <span>Base Spirit</span>
                  <span>2 oz</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                  <span>Vermouth/Amaro</span>
                  <span>1 oz</span>
                </div>
                <div className="flex justify-between">
                  <span>Bitters</span>
                  <span>2 dashes</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-black text-lg mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#ff006e] border-2 border-black"></span>
                  How to Build
                </h4>
                <p className="font-medium text-gray-700">Stir with ice (30s). Strain. Silky texture.</p>
              </div>
              <div>
                <h4 className="font-black text-lg mb-2">Unlocks:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ff006e] hover:text-white">Manhattan</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ff006e] hover:text-white">Martini</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ff006e] hover:text-white">Negroni</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ff006e] hover:text-white">Boulevardier</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Highball */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="neo-badge bg-[#ffd60a] text-lg px-4 py-2">Template 03</span>
            <h2 className="font-display text-4xl font-black">The Highball</h2>
          </div>
          <Card className="neo-card bg-white h-full relative overflow-hidden">
            <CardHeader className="border-b-4 border-black pb-4">
              <CardTitle className="text-xl font-black uppercase tracking-widest text-gray-500">The Formula</CardTitle>
              <div className="flex flex-col gap-2 mt-2 font-mono text-lg font-bold">
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                  <span>Base Spirit</span>
                  <span>1.5 - 2 oz</span>
                </div>
                <div className="flex justify-between">
                  <span>Carbonation</span>
                  <span>To Top</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-black text-lg mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#ffd60a] border-2 border-black"></span>
                  How to Build
                </h4>
                <p className="font-medium text-gray-700">Build in glass. Add ice. Top with soda. No shaking.</p>
              </div>
              <div>
                <h4 className="font-black text-lg mb-2">Unlocks:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ffd60a]">Gin & Tonic</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ffd60a]">Vodka Soda</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ffd60a]">Mule</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ffd60a]">Paloma</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#ffd60a]">Scotch & Soda</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* The Collins */}
        <div className="space-y-6">
          <div className="flex items-center gap-4">
            <span className="neo-badge bg-[#3a86ff] text-white text-lg px-4 py-2">Template 04</span>
            <h2 className="font-display text-4xl font-black">The Collins</h2>
          </div>
          <Card className="neo-card bg-white h-full relative overflow-hidden">
            <CardHeader className="border-b-4 border-black pb-4">
              <CardTitle className="text-xl font-black uppercase tracking-widest text-gray-500">The Formula</CardTitle>
              <div className="flex flex-col gap-2 mt-2 font-mono text-lg font-bold">
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                  <span>Base Spirit</span>
                  <span>2 oz</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                  <span>Citrus</span>
                  <span>3/4 oz</span>
                </div>
                <div className="flex justify-between border-b border-dashed border-gray-300 pb-1">
                  <span>Sugar</span>
                  <span>3/4 oz</span>
                </div>
                <div className="flex justify-between">
                  <span>Soda Water</span>
                  <span>To Top</span>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-6 space-y-6">
              <div>
                <h4 className="font-black text-lg mb-2 flex items-center gap-2">
                  <span className="w-4 h-4 rounded-full bg-[#3a86ff] border-2 border-black"></span>
                  How to Build
                </h4>
                <p className="font-medium text-gray-700">Short shake. Strain over fresh ice. Top with soda.</p>
              </div>
              <div>
                <h4 className="font-black text-lg mb-2">Unlocks:</h4>
                <div className="flex flex-wrap gap-2">
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#3a86ff] hover:text-white">Tom Collins</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#3a86ff] hover:text-white">French 75</Badge>
                  <Badge className="neo-badge bg-[#f0f0f0] text-black hover:bg-[#3a86ff] hover:text-white">Mojito</Badge>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <section className="space-y-6 mt-64 border-t-4 border-black pt-12">
        <h2 className="font-display text-4xl font-black">Glassware 101</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {[
            {
              name: 'Rocks',
              color: '#70e000',
              description: 'Also known as an Old Fashioned glass. Used for drinks built in the glass or served on the rocks.',
              examples: ['Old Fashioned', 'Negroni', 'Margarita (rocks)', 'Whiskey Sour (rocks)'],
              capacity: '8-10 oz'
            },
            {
              name: 'Coupe',
              color: '#ff006e',
              description: 'A stemmed glass with a broad, shallow bowl. Used for cocktails served "up" (chilled, no ice).',
              examples: ['Daiquiri', 'Gimlet', 'Manhattan', 'Martini', 'Sidecar'],
              capacity: '5-7 oz'
            },
            {
              name: 'Collins',
              color: '#ffd60a',
              description: 'A tall, cylindrical glass. Used for long drinks topped with soda or juice, served with plenty of ice.',
              examples: ['Tom Collins', 'Mojito', 'Paloma', 'Long Island Iced Tea'],
              capacity: '10-14 oz'
            }
          ].map((glass) => (
            <Sheet key={glass.name}>
              <SheetTrigger asChild>
                <div className="neo-card p-4 hover:shadow-neo-lg transition-all text-center group cursor-pointer hover:-translate-y-1">
                  <div
                    className="h-16 w-16 mx-auto bg-gray-200 rounded-full mb-3 border-2 border-black transition-colors"
                    style={{ backgroundColor: glass.color }}
                  ></div>
                  <h4 className="font-black text-lg">{glass.name}</h4>
                  <p className="text-sm font-medium text-gray-500 mt-1">Click for details</p>
                </div>
              </SheetTrigger>
              <SheetContent side="right" className="border-l-4 border-black p-0 sm:max-w-md">
                <div className="h-full bg-[#fffef5] flex flex-col">
                  <SheetHeader className="p-6 border-b-4 border-black bg-white">
                    <div
                      className="w-20 h-20 rounded-full border-4 border-black mb-4 mx-auto"
                      style={{ backgroundColor: glass.color }}
                    />
                    <SheetTitle className="text-4xl font-black text-center font-display uppercase tracking-tight">{glass.name}</SheetTitle>
                    <SheetDescription className="text-center text-lg font-medium text-gray-600">
                      Standard Issue Glassware
                    </SheetDescription>
                  </SheetHeader>

                  <div className="p-6 space-y-8 flex-1 overflow-y-auto">
                    <div className="space-y-3">
                      <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-gray-300 pb-2">Description</h3>
                      <p className="text-lg leading-relaxed font-medium text-gray-800">
                        {glass.description}
                      </p>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-gray-300 pb-2">Common Serves</h3>
                      <div className="flex flex-wrap gap-2">
                        {glass.examples.map(ex => (
                          <Badge key={ex} className="neo-badge bg-white text-black border-2 border-black">
                            {ex}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <div className="space-y-3">
                      <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-gray-300 pb-2">Specs</h3>
                      <div className="flex justify-between items-center bg-white p-4 border-2 border-black shadow-neo-sm">
                        <span className="font-bold text-gray-600">Typical Capacity</span>
                        <span className="font-black text-xl">{glass.capacity}</span>
                      </div>
                    </div>
                  </div>

                  <div className="p-6 border-t-4 border-black bg-white">
                    <Button className="w-full neo-btn bg-black text-white hover:bg-gray-800" asChild>
                      <SheetClose>Close Guide</SheetClose>
                    </Button>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          ))}
        </div>
      </section>
    </div>
  );
}
