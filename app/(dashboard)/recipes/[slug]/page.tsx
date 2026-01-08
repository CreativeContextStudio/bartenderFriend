import { getRecipeBySlug } from '@/lib/static-data';
import { DrinkPlaceholder } from '@/components/ui/placeholders/drink-placeholder';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';

export default function RecipeDetailPage({
  params,
}: {
  params: { slug: string };
}) {
  const recipe = getRecipeBySlug(params.slug);

  if (!recipe) {
    notFound();
  }

  const spec = recipe.spec;
  const steps = recipe.steps || [];
  const makeItFasterTips = recipe.make_it_faster_tips || [];
  const commonMistakes = recipe.common_mistakes || [];

  const getGlassType = (glassware: string) => {
    const glass = glassware.toLowerCase();
    if (glass.includes('coupe') || glass.includes('martini')) return 'coupe';
    if (glass.includes('collins')) return 'collins';
    if (glass.includes('rocks') || glass.includes('old fashioned')) return 'rocks';
    return 'rocks';
  };

  return (
    <div className="space-y-8">
      <Link href="/recipes">
        <Button variant="outline" className="mb-6 border-brutal-sm font-bold" size="lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Recipes
        </Button>
      </Link>

      <div className="grid lg:grid-cols-2 gap-8">
        <div className="space-y-4">
          <div className="aspect-square border-brutal overflow-hidden bg-muted">
            <DrinkPlaceholder
              glassType={getGlassType(recipe.glassware) as any}
              animation="shimmer"
              className="h-full"
            />
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <h1 className="text-5xl md:text-6xl font-black">{recipe.name}</h1>
              {recipe.family && (
                <Badge variant="secondary" className="text-base px-4 py-2 font-bold border-brutal-sm">
                  {recipe.family}
                </Badge>
              )}
            </div>
            {recipe.description && (
              <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
                {recipe.description}
              </p>
            )}
          </div>

          <Card className="border-brutal">
            <CardHeader className="border-b-4 border-brutal">
              <CardTitle className="text-3xl font-black">Spec</CardTitle>
            </CardHeader>
            <CardContent className="pt-6">
              <div className="space-y-3 font-mono">
                {spec && Object.entries(spec).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex justify-between items-center border-brutal-sm p-4 bg-muted/30">
                    <span className="text-base font-bold capitalize text-muted-foreground">{key.replace('_', ' ')}:</span>
                    <span className="text-lg font-black">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="grid grid-cols-2 gap-4">
            <Card className="border-brutal-sm">
              <CardHeader className="border-b-4 border-brutal">
                <CardTitle className="text-base font-black">Method</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Badge variant="outline" className="text-base px-4 py-2 font-bold border-brutal-sm">
                  {recipe.method}
                </Badge>
              </CardContent>
            </Card>
            <Card className="border-brutal-sm">
              <CardHeader className="border-b-4 border-brutal">
                <CardTitle className="text-base font-black">Glassware</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <Badge variant="outline" className="text-base px-4 py-2 font-bold border-brutal-sm">
                  {recipe.glassware}
                </Badge>
              </CardContent>
            </Card>
          </div>

          {recipe.garnish && (
            <Card className="border-brutal-sm">
              <CardHeader className="border-b-4 border-brutal">
                <CardTitle className="text-base font-black">Garnish</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <p className="text-base font-medium text-muted-foreground leading-relaxed">{recipe.garnish}</p>
              </CardContent>
            </Card>
          )}

          {steps.length > 0 && (
            <Card className="border-brutal">
              <CardHeader className="border-b-4 border-brutal">
                <CardTitle className="text-3xl font-black">Steps</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ol className="list-decimal list-inside space-y-3 text-base font-medium text-muted-foreground leading-relaxed">
                  {steps.map((step, index) => (
                    <li key={index} className="pl-2">{step}</li>
                  ))}
                </ol>
              </CardContent>
            </Card>
          )}

          {makeItFasterTips.length > 0 && (
            <Card className="border-brutal-sm bg-secondary/20">
              <CardHeader className="border-b-4 border-brutal">
                <CardTitle className="text-3xl font-black">Make It Faster</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-3 text-base font-medium text-muted-foreground leading-relaxed">
                  {makeItFasterTips.map((tip, index) => (
                    <li key={index} className="pl-2">{tip}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}

          {commonMistakes.length > 0 && (
            <Card className="border-brutal-sm bg-destructive/10">
              <CardHeader className="border-b-4 border-brutal">
                <CardTitle className="text-3xl font-black text-destructive">Common Mistakes</CardTitle>
              </CardHeader>
              <CardContent className="pt-6">
                <ul className="list-disc list-inside space-y-3 text-base font-medium text-muted-foreground leading-relaxed">
                  {commonMistakes.map((mistake, index) => (
                    <li key={index} className="pl-2">{mistake}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </div>
      </div>
    </div>
  );
}
