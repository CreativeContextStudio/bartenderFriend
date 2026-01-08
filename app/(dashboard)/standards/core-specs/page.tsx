import { getAllFamilies } from '@/lib/static-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

export default function CoreSpecsPage() {
  const families = getAllFamilies();

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Standard & Core Specs</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Canonical builds and templates. These are the foundations.
        </p>
      </div>

      {families.length > 0 ? (
        <div className="space-y-4">
          {families.map((family) => {
            const templatePattern = family.template_pattern;
            
            return (
              <Card key={family.id} className="border-brutal">
                <CardHeader className="border-b-4 border-brutal">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-3xl font-black">{family.name} Template</CardTitle>
                    <Badge variant="secondary" className="text-base px-4 py-2 font-bold border-brutal-sm">
                      {templatePattern.method || 'varies'}
                    </Badge>
                  </div>
                  {family.description && (
                    <CardDescription className="text-lg font-medium mt-3">
                      {family.description}
                    </CardDescription>
                  )}
                </CardHeader>
                <CardContent className="space-y-6 pt-6">
                  <div className="border-brutal-sm p-6 bg-muted/30">
                    <h4 className="text-xl font-black mb-4">Template Spec</h4>
                    <div className="grid md:grid-cols-2 gap-4 font-mono">
                      {templatePattern && Object.entries(templatePattern).map(([key, value]) => (
                        <div key={key} className="flex justify-between items-center border-brutal-sm p-3 bg-background">
                          <span className="text-base font-bold capitalize text-muted-foreground">{key.replace('_', ' ')}:</span>
                          <span className="text-lg font-black">{value}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      ) : (
        <Card>
          <CardContent className="py-8 text-center text-muted-foreground">
            No specs found.
          </CardContent>
        </Card>
      )}
    </div>
  );
}
