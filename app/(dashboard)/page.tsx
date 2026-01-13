import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllRecipes } from '@/lib/static-data';
import { ArrowRight, Martini, Award, Zap, ArrowUpRight, Flame } from 'lucide-react';

export default function DashboardPage() {
  const recipes = getAllRecipes();
  // Simulate "Trending" by picking some popular ones
  const trendingRecipes = recipes.filter(r => ['espresso-martini', 'old-fashioned', 'margarita', 'paper-plane'].includes(r.id));

  return (
    <div className="space-y-16 pb-16">

      {/* Hero Section */}
      <section className="relative overflow-hidden neo-card bg-card p-8 sm:p-12 border-4 border-border shadow-neo-xl">
        <div className="relative z-10 max-w-4xl space-y-6">
          <Badge variant="outline" className="neo-badge bg-card text-foreground text-base border-border">
            a bar companion
          </Badge>
          <h1 className="font-display text-6xl sm:text-8xl font-black tracking-tighter leading-[0.9] text-foreground">
            bartenderFriend
          </h1>
          <p className="font-sans text-xl sm:text-2xl font-bold text-muted-foreground max-w-2xl leading-relaxed">
            Your pocket reference for classic recipes, modern techniques, and industry standards.
            Build faster, smarter, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/recipes">
              <Button size="lg" className="w-full sm:w-auto neo-btn-primary h-16 text-xl px-8 shadow-neo-lg hover:shadow-neo-xl">
                Explore Cocktails
                <ArrowUpRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/training">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-card border-border text-foreground hover:bg-secondary/10 h-16 text-xl px-8">
                Start Training
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute right-0 top-0 w-64 h-64 bg-neo-pending rounded-full blur-3xl opacity-20 -mr-16 -mt-16 pointer-events-none" />
        <div className="absolute bottom-0 right-20 w-80 h-80 bg-neo-accent rounded-full blur-3xl opacity-10 -mb-20 pointer-events-none" />
      </section>

      {/* Feature Grid */}
      <section className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
        <Link href="/recipes" className="group">
          <Card className="h-full neo-card hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-border bg-primary text-primary-foreground shadow-neo-sm">
                <Martini className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-black text-foreground">Curated Recipes</CardTitle>
              <CardDescription className="text-base font-bold text-muted-foreground mt-2">
                Access over 40+ top requested cocktails with detailed specs, histories, and common mistakes to avoid.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/standards/core-specs" className="group">
          <Card className="h-full neo-card hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-border bg-secondary text-secondary-foreground shadow-neo-sm">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-black text-foreground">Pro Standards</CardTitle>
              <CardDescription className="text-base font-bold text-muted-foreground mt-2">
                Learn the foundational ratios and techniques that separate the amateurs from the professionals.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/training" className="group">
          <Card className="h-full neo-card hover:translate-x-1 hover:translate-y-1 hover:shadow-none transition-all duration-200">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center border-2 border-border bg-done text-neo-action-text shadow-neo-sm">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-black text-foreground">Speed & Efficiency</CardTitle>
              <CardDescription className="text-base font-bold text-muted-foreground mt-2">
                Master the workflow. Tips and drills to help you build rounds faster without sacrificing quality.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
      </section>

      {/* Trending Now */}
      <section className="space-y-6">
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="font-display text-4xl font-black tracking-tight text-foreground">Trending Now</h2>
            <p className="text-lg font-bold text-muted-foreground">Most popular drinks this month.</p>
          </div>
          <Link href="/recipes">
            <Button variant="ghost" className="font-bold border-2 border-border hover:bg-foreground hover:text-background transition-colors">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.slug}`} className="group">
              <Card className="h-full neo-card hover:-translate-y-2 hover:shadow-neo-lg transition-all duration-200 bg-card border-border">
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="neo-badge bg-card border-border text-foreground">
                      {recipe.family}
                    </Badge>
                    <Flame className="h-5 w-5 text-orange-500 fill-orange-500 animate-pulse" />
                  </div>
                  <CardTitle className="text-xl font-black mb-2 group-hover:text-primary transition-colors text-foreground">
                    {recipe.name}
                  </CardTitle>
                  <p className="text-sm font-bold text-muted-foreground line-clamp-2">
                    {recipe.description}
                  </p>
                </CardHeader>
              </Card>
            </Link>
          ))}
        </div>
      </section>

    </div>
  );
}
