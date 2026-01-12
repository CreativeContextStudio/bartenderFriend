import { getAllCheatSheetItems } from '@/lib/static-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { readMarkdownFile } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import { PrintButton } from '@/components/print-button';
import { Badge } from '@/components/ui/badge';
import Link from 'next/link';
import { Maximize2 } from 'lucide-react';
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from '@/components/ui/button';

export default function CheatSheetPage() {
  const items = getAllCheatSheetItems();
  const cheatSheetContent = readMarkdownFile('bartender-cheat-sheet.md');

  // Group drinks by category for better organization
  const drinksByCategory = items.reduce((acc, item) => {
    const category = item.family || 'Other';
    if (!acc[category]) acc[category] = [];
    acc[category].push(item);
    return acc;
  }, {} as Record<string, typeof items>);

  const categoryColors: Record<string, { bg: string; text: string; border: string }> = {
    'Sour': { bg: 'bg-[#70e000]', text: 'text-black', border: 'border-[#70e000]' },
    'Spirit Forward': { bg: 'bg-[#ff006e]', text: 'text-white', border: 'border-[#ff006e]' },
    'Highball': { bg: 'bg-[#ffd60a]', text: 'text-black', border: 'border-[#ffd60a]' },
    'Collins': { bg: 'bg-[#3a86ff]', text: 'text-white', border: 'border-[#3a86ff]' },
    'Other': { bg: 'bg-muted', text: 'text-muted-foreground', border: 'border-border' },
  };

  return (
    <div className="space-y-12 pb-16">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
        <div className="space-y-4 max-w-4xl flex-1">
          <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-foreground">
            Cheat Sheet
          </h1>
          <p className="font-sans text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed border-l-4 border-primary pl-6">
            Memorize these core drinks cold. <br />
            Print this and keep in your pocket for the first week.
          </p>
        </div>
        <div className="self-start sm:self-auto">
          <PrintButton />
        </div>
      </div>

      {cheatSheetContent && (
        <Card className="neo-card bg-card">
          <CardHeader className="border-b-4 border-border bg-muted/30">
            <CardTitle className="text-3xl font-black font-display uppercase tracking-tight text-foreground">Quick Reference Cheat Sheet</CardTitle>
          </CardHeader>
          <CardContent className="pt-6">
            <MarkdownContent content={cheatSheetContent} />
          </CardContent>
        </Card>
      )}

      <Card className="print:border-none print:shadow-none neo-card bg-white">
        <CardHeader className="print:pb-2 border-b-4 border-border bg-muted/30 text-foreground">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-3xl font-black font-display uppercase tracking-tight">Core Drinks - Must Know Cold</CardTitle>
              <CardDescription className="print:hidden text-lg font-medium text-muted-foreground mt-2">
                {items.length} core drinks to memorize • Click for details
              </CardDescription>
            </div>
            <Badge className="neo-badge bg-primary text-primary-foreground text-lg px-4 py-2 print:hidden">
              {items.length} Drinks
            </Badge>
          </div>
        </CardHeader>
        <CardContent className="pt-6">
          {items.length > 0 ? (
            <div className="space-y-8">
              {Object.entries(drinksByCategory).map(([category, drinks]) => {
                const colors = categoryColors[category] || categoryColors['Other'];
                return (
                  <div key={category} className="space-y-4">
                    <div className="flex items-center gap-3">
                      <Badge className={`neo-badge ${colors.bg} ${colors.text} text-lg px-4 py-2`}>
                        {category}
                      </Badge>
                      <div className="flex-1 h-1 bg-muted border-2 border-border"></div>
                    </div>

                    <div className="grid gap-4 md:grid-cols-2">
                      {drinks.map((item, index) => (
                        <Sheet key={index}>
                          <SheetTrigger asChild>
                            <div
                              className={`neo-card bg-card p-5 cursor-pointer hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-lg transition-all duration-200 border-l-4 ${colors.border}`}
                            >
                              <div className="space-y-3">
                                <div className="flex items-start justify-between gap-3">
                                  <h3 className="text-2xl font-black font-display uppercase tracking-tight text-foreground">
                                    {item.name}
                                  </h3>
                                  <span className="text-sm font-bold text-muted-foreground">Click →</span>
                                </div>

                                <div className="space-y-2">
                                  <div className="flex items-start gap-2">
                                    <span className="text-sm font-black uppercase text-muted-foreground min-w-[60px]">Spec:</span>
                                    <span className="text-base font-mono font-bold text-foreground flex-1 line-clamp-2">
                                      {item.spec_short}
                                    </span>
                                  </div>

                                  <div className="flex items-start gap-2">
                                    <span className="text-sm font-black uppercase text-muted-foreground min-w-[60px]">Glass:</span>
                                    <span className="text-base font-bold text-foreground">
                                      {item.glass || '-'}
                                    </span>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </SheetTrigger>

                          <SheetContent side="right" className="border-l-4 border-border p-0 sm:max-w-md overflow-y-auto">
                            <div className="h-full bg-background flex flex-col">
                              <SheetHeader className="p-6 border-b-4 border-border bg-card sticky top-0 z-10">
                                <div
                                  className={`w-20 h-20 rounded-full border-4 border-border mb-4 mx-auto ${colors.bg} flex items-center justify-center`}
                                >
                                  <span className={`text-3xl font-black ${colors.text}`}>
                                    {item.name.charAt(0)}
                                  </span>
                                </div>
                                <div className="flex items-center justify-center gap-3 mb-2">
                                  <SheetTitle className="text-4xl font-black text-center font-display uppercase tracking-tight text-foreground">
                                    {item.name}
                                  </SheetTitle>
                                  <Link
                                    href={`/recipes/${item.slug}`}
                                    className="neo-btn bg-primary text-primary-foreground hover:bg-primary/90 transition-colors p-2 border-2 border-border"
                                    aria-label="View full recipe page"
                                  >
                                    <Maximize2 className="h-5 w-5" />
                                  </Link>
                                </div>
                                <SheetDescription className="text-center text-lg font-medium text-muted-foreground">
                                  {category} Family
                                </SheetDescription>
                              </SheetHeader>

                              <div className="p-6 space-y-6 flex-1">
                                <div className="space-y-3">
                                  <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-border pb-2 text-foreground">Full Recipe</h3>
                                  <p className="text-lg leading-relaxed font-mono font-bold text-foreground bg-card p-4 border-2 border-border shadow-neo-sm">
                                    {item.spec_short}
                                  </p>
                                </div>

                                <div className="space-y-3">
                                  <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-border pb-2 text-foreground">Glassware</h3>
                                  <div className="bg-card p-4 border-2 border-border shadow-neo-sm">
                                    <span className="text-lg font-bold text-foreground capitalize">
                                      {item.glass || 'Standard'}
                                    </span>
                                  </div>
                                </div>

                                <div className="space-y-3">
                                  <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-border pb-2 text-foreground">Garnish</h3>
                                  <div className="bg-card p-4 border-2 border-border shadow-neo-sm">
                                    <span className="text-lg font-bold text-foreground">
                                      {item.garnish || 'None'}
                                    </span>
                                  </div>
                                </div>

                                {item.notes && (
                                  <div className="space-y-3">
                                    <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-border pb-2 text-foreground">Notes</h3>
                                    <p className="text-base leading-relaxed font-medium text-muted-foreground bg-card p-4 border-2 border-border shadow-neo-sm">
                                      {item.notes}
                                    </p>
                                  </div>
                                )}

                                <div className="space-y-3">
                                  <h3 className="font-black text-xl uppercase tracking-wide border-b-2 border-dashed border-border pb-2 text-foreground">Category</h3>
                                  <Badge className={`neo-badge ${colors.bg} ${colors.text} text-lg px-4 py-2`}>
                                    {category}
                                  </Badge>
                                </div>
                              </div>

                              <div className="p-6 border-t-4 border-border bg-card sticky bottom-0">
                                <Button className="w-full neo-btn bg-foreground text-background hover:bg-foreground/90 transition-colors" asChild>
                                  <SheetClose>Close Details</SheetClose>
                                </Button>
                              </div>
                            </div>
                          </SheetContent>
                        </Sheet>
                      ))}
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <p className="text-base font-medium text-gray-500 text-center py-6 border-2 border-dashed border-gray-300 rounded">
              No drinks available. Database not connected.
            </p>
          )}
        </CardContent>
      </Card>

      <Card className="print:hidden neo-card bg-background border-2 border-border">
        <CardHeader className="border-b-4 border-border">
          <CardTitle className="text-2xl font-black font-display uppercase tracking-tight text-foreground">Print-Friendly Format (Coming Soon)</CardTitle>
          <CardDescription className="text-lg font-medium text-muted-foreground">
            Click the print button above to print this cheat sheet. Keep it in your pocket for the first week.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
