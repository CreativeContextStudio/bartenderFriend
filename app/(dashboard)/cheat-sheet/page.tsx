import { getAllCheatSheetItems } from '@/lib/static-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { readMarkdownFile } from '@/lib/markdown';
import { MarkdownContent } from '@/components/markdown-content';
import { PrintButton } from '@/components/print-button';

export default function CheatSheetPage() {
  const items = getAllCheatSheetItems();
  const cheatSheetContent = readMarkdownFile('bartender-cheat-sheet.md');

  return (
    <div className="space-y-6 sm:space-y-8">
      <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 sm:gap-6">
        <div className="space-y-2 sm:space-y-3 flex-1">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight">Cheat Sheet</h1>
          <p className="text-base sm:text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
            Memorize these core drinks cold. Print this and keep in your pocket for the first week.
          </p>
        </div>
        <div className="self-start sm:self-auto">
          <PrintButton />
        </div>
      </div>

      {cheatSheetContent && (
        <Card className="border-brutal">
          <CardHeader className="border-b-4 border-brutal">
            <CardTitle className="text-2xl sm:text-3xl font-black">Quick Reference Cheat Sheet</CardTitle>
          </CardHeader>
          <CardContent>
            <MarkdownContent content={cheatSheetContent} />
          </CardContent>
        </Card>
      )}

      <Card className="print:border-none print:shadow-none border-brutal">
        <CardHeader className="print:pb-2 border-b-4 border-brutal">
          <CardTitle className="text-2xl sm:text-3xl font-black">Core Drinks - Must Know Cold</CardTitle>
          <CardDescription className="print:hidden text-base sm:text-lg font-medium">
            {items.length} core drinks to memorize
          </CardDescription>
        </CardHeader>
        <CardContent>
          {items.length > 0 ? (
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b">
                    <th className="text-left p-2 font-semibold">Drink</th>
                    <th className="text-left p-2 font-semibold">Spec</th>
                    <th className="text-left p-2 font-semibold">Glass</th>
                    <th className="text-left p-2 font-semibold">Garnish</th>
                  </tr>
                </thead>
                <tbody>
                  {items.map((item, index: number) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-muted/30' : ''}>
                      <td className="p-2 font-medium">{item.name}</td>
                      <td className="p-2 text-sm font-mono text-muted-foreground">{item.spec_short}</td>
                      <td className="p-2 text-sm text-muted-foreground">{item.glass || '-'}</td>
                      <td className="p-2 text-sm text-muted-foreground">{item.garnish || '-'}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <div className="space-y-3">
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">Margarita</div>
                <div className="text-sm font-mono text-muted-foreground">2 oz tequila, 1 oz lime, ¾ oz triple sec, ¼ oz agave</div>
                <div className="text-xs text-muted-foreground mt-1">Glass: rocks | Garnish: Lime wheel, salt rim</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">Daiquiri</div>
                <div className="text-sm font-mono text-muted-foreground">2 oz light rum, 1 oz lime, ¾ oz simple</div>
                <div className="text-xs text-muted-foreground mt-1">Glass: coupe | Garnish: Lime wheel</div>
              </div>
              <div className="rounded-md border p-3">
                <div className="font-medium mb-1">Old Fashioned</div>
                <div className="text-sm font-mono text-muted-foreground">2 oz bourbon/rye, ¼-½ oz simple, 2-3 dashes Angostura</div>
                <div className="text-xs text-muted-foreground mt-1">Glass: rocks | Garnish: Orange peel</div>
              </div>
              <p className="text-sm text-muted-foreground text-center py-4">
                Database not connected. Showing sample data.
              </p>
            </div>
          )}
        </CardContent>
      </Card>

      <Card className="print:hidden">
        <CardHeader>
          <CardTitle>Print-Friendly Format</CardTitle>
          <CardDescription>
            Click the print button above to print this cheat sheet. Keep it in your pocket for the first week.
          </CardDescription>
        </CardHeader>
      </Card>
    </div>
  );
}
