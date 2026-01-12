import { getRecipeBySlug } from '@/lib/static-data';
import { DrinkPlaceholder } from '@/components/ui/placeholders/drink-placeholder';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { notFound } from 'next/navigation';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Clock, GlassWater, ListChecks, Shapes } from 'lucide-react';
import { cn } from '@/lib/utils';

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

  const getFamilyColors = (family?: string): { bg: string; text: string; border: string } => {
    if (!family) return { bg: 'bg-gray-800', text: 'text-white', border: 'border-gray-800' };

    const familyLower = family.toLowerCase();
    if (familyLower === 'sour') return { bg: 'bg-[#70e000]', text: 'text-black', border: 'border-[#70e000]' };
    if (familyLower === 'spirit forward' || familyLower === 'spirit-forward' || familyLower === 'stirred') return { bg: 'bg-[#ff006e]', text: 'text-white', border: 'border-[#ff006e]' };
    if (familyLower === 'highball') return { bg: 'bg-[#ffd60a]', text: 'text-black', border: 'border-[#ffd60a]' };
    if (familyLower.includes('collins') || familyLower.includes('fizz')) return { bg: 'bg-[#3a86ff]', text: 'text-white', border: 'border-[#3a86ff]' };
    return { bg: 'bg-gray-800', text: 'text-white', border: 'border-gray-800' };
  };

  const familyColors = getFamilyColors(recipe.family);

  return (
    <div className="space-y-12 pb-16">
      <Link href="/recipes">
        <Button variant="outline" className="neo-btn border-2 border-border font-bold h-12" size="lg">
          <ArrowLeft className="mr-2 h-5 w-5" />
          Back to Recipes
        </Button>
      </Link>

      <div className="grid lg:grid-cols-2 gap-12 items-start">
        <div className="space-y-6">
          <div className="aspect-square neo-card overflow-hidden bg-card p-4">
            <div className="w-full h-full border-2 border-border overflow-hidden bg-muted/30">
              <DrinkPlaceholder
                glassType={getGlassType(recipe.glassware) as any}
                animation="shimmer"
                className="h-full"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="neo-card bg-card p-4 text-center">
              <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-1">Method</p>
              <p className="text-xl font-black uppercase text-foreground">{recipe.method}</p>
            </div>
            <div className="neo-card bg-card p-4 text-center">
              <p className="text-sm font-black text-muted-foreground uppercase tracking-widest mb-1">Difficulty</p>
              <div className="flex justify-center gap-1.5 mt-1">
                {[1, 2, 3].map((level) => (
                  <div
                    key={level}
                    className={cn(
                      "w-4 h-4 rounded-full border-2 border-border",
                      level <= recipe.difficulty ? familyColors.bg : "bg-transparent"
                    )}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-8">
          <div className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-foreground uppercase leading-none">
                {recipe.name}
              </h1>
              {recipe.family && (
                <Badge className={cn("neo-badge text-lg px-4 py-2 font-bold", familyColors.bg, familyColors.text)}>
                  {recipe.family}
                </Badge>
              )}
            </div>
            {recipe.description && (
              <p className="font-sans text-xl md:text-2xl font-bold text-muted-foreground leading-relaxed border-l-4 border-border pl-6">
                {recipe.description}
              </p>
            )}
          </div>

          <Card className="neo-card bg-card border-l-8 overflow-hidden" style={{ borderLeftColor: familyColors.border.replace('border-[', '').replace(']', '') }}>
            <CardHeader className="bg-foreground text-background border-b-4 border-border py-4">
              <CardTitle className="text-2xl font-black uppercase tracking-tight flex items-center gap-2">
                <Shapes className="h-6 w-6" />
                Ingredients Spec
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <div className="divide-y-2 divide-border">
                {spec && Object.entries(spec).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex justify-between items-center p-5 hover:bg-muted/30 transition-colors text-foreground">
                    <span className="text-lg font-black uppercase tracking-tight opacity-70">{key.replace('_', ' ')}:</span>
                    <span className="text-2xl font-black">{value}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <div className="neo-card bg-secondary p-6 text-secondary-foreground border-4 border-border shadow-neo-md">
            <div className="flex items-center gap-3 mb-2">
              <GlassWater className="h-6 w-6" />
              <p className="text-sm font-black uppercase tracking-widest">Glassware & Garnish</p>
            </div>
            <p className="text-2xl font-black uppercase">{recipe.glassware}</p>
            {recipe.garnish && (
              <p className="text-lg font-bold mt-2 border-t-2 border-border pt-2 italic">
                {recipe.garnish}
              </p>
            )}
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-2 gap-8 mt-12">
        {steps.length > 0 && (
          <div className="neo-card bg-card p-8 text-foreground border-border">
            <h3 className="text-3xl font-black font-display uppercase tracking-tight mb-6 flex items-center gap-3">
              <ListChecks className="h-8 w-8 text-primary" />
              Build Steps
            </h3>
            <ol className="space-y-6">
              {steps.map((step, index) => (
                <li key={index} className="flex gap-4 group">
                  <span className="flex-shrink-0 w-8 h-8 rounded-full bg-foreground text-background flex items-center justify-center font-black text-sm group-hover:bg-primary transition-colors">
                    {index + 1}
                  </span>
                  <p className="text-lg font-bold text-muted-foreground leading-tight pt-1">
                    {step}
                  </p>
                </li>
              ))}
            </ol>
          </div>
        )}

        <div className="space-y-8">
          {makeItFasterTips.length > 0 && (
            <div className="neo-card bg-done p-8 border-border">
              <h3 className="text-2xl font-black uppercase tracking-tight text-black mb-4 flex items-center gap-2">
                <Clock className="h-6 w-6" />
                Bar Speed Hacks
              </h3>
              <ul className="space-y-3">
                {makeItFasterTips.map((tip, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-black shrink-0" />
                    <p className="text-lg font-black leading-tight text-black">
                      {tip}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}

          {commonMistakes.length > 0 && (
            <div className="neo-card bg-[#ff006e] p-8 text-white">
              <h3 className="text-2xl font-black uppercase tracking-tight mb-4 flex items-center gap-2">
                <ArrowLeft className="h-6 w-6 rotate-180" />
                Watch Out For
              </h3>
              <ul className="space-y-3">
                {commonMistakes.map((mistake, index) => (
                  <li key={index} className="flex gap-3 items-start">
                    <div className="mt-1.5 w-2 h-2 rounded-full bg-white shrink-0" />
                    <p className="text-lg font-bold leading-tight">
                      {mistake}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
