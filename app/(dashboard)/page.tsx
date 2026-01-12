import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { getAllRecipes } from '@/lib/static-data';
import { ArrowRight, Martini, BookOpen, User, Flame, ArrowUpRight, Award, Zap } from 'lucide-react';

export default function DashboardPage() {
  const recipes = getAllRecipes();
  // Simulate "Trending" by picking some popular ones
  const trendingRecipes = recipes.filter(r => ['espresso-martini', 'old-fashioned', 'margarita', 'paper-plane'].includes(r.id));

  return (
    <div className="space-y-12 pb-12">

      {/* Hero Section */}
      <section className="relative overflow-hidden rounded-xl border-brutal bg-gradient-to-br from-primary/5 via-background to-secondary/5 p-8 sm:p-12 md:p-16 lg:p-24 shadow-brutal-xl">
        <div className="relative z-10 max-w-4xl space-y-6">
          <Badge variant="outline" className="border-brutal-sm px-4 py-1 text-sm font-bold uppercase tracking-wider bg-background/50 backdrop-blur-sm">
            a bar companion
          </Badge>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[0.9]">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
              bartenderFriend
            </span>
          </h1>
          <p className="max-w-2xl text-lg sm:text-xl md:text-2xl font-medium text-muted-foreground leading-relaxed">
            Your pocket reference for classic recipes, modern techniques, and industry standards.
            Build faster, smarter, and with confidence.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Link href="/recipes">
              <Button size="xl" className="w-full sm:w-auto text-lg border-brutal font-black bg-primary text-primary-foreground shadow-brutal hover:translate-y-[-2px] hover:shadow-brutal-lg transition-all">
                Explore Cocktails
                <ArrowUpRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
            <Link href="/training">
              <Button size="xl" variant="outline" className="w-full sm:w-auto text-lg border-brutal font-black bg-background hover:bg-muted/50 transition-all">
                Start Training
                <ArrowRight className="ml-3 h-6 w-6" />
              </Button>
            </Link>
          </div>
        </div>

        {/* Decorative Background Elements */}
        <div className="absolute top-0 right-0 -m-16 h-64 w-64 rounded-full bg-primary/10 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-20 -mb-20 h-96 w-96 rounded-full bg-secondary/10 blur-3xl opacity-50" />
      </section>

      {/* Feature Grid */}
      <section className="grid gap-6 sm:gap-8 grid-cols-1 md:grid-cols-3">
        <Link href="/recipes" className="group">
          <Card className="h-full border-brutal bg-card hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-brutal bg-primary/20 text-primary">
                <Martini className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-black">Curated Recipes</CardTitle>
              <CardDescription className="text-base font-medium leading-relaxed">
                Access over 40+ top requested cocktails with detailed specs, histories, and common mistakes to avoid.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/standards/core-specs" className="group">
          <Card className="h-full border-brutal bg-card hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-brutal bg-secondary/20 text-secondary">
                <Award className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-black">Pro Standards</CardTitle>
              <CardDescription className="text-base font-medium leading-relaxed">
                Learn the foundational ratios and techniques that separate the amateurs from the professionals.
              </CardDescription>
            </CardHeader>
          </Card>
        </Link>
        <Link href="/training" className="group">
          <Card className="h-full border-brutal bg-card hover:-translate-y-2 hover:shadow-brutal-lg transition-all duration-300">
            <CardHeader>
              <div className="mb-4 inline-flex h-12 w-12 items-center justify-center rounded-lg border-2 border-brutal bg-accent/20 text-accent">
                <Zap className="h-6 w-6" />
              </div>
              <CardTitle className="text-2xl font-black">Speed & Efficiency</CardTitle>
              <CardDescription className="text-base font-medium leading-relaxed">
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
            <h2 className="text-3xl md:text-4xl font-black tracking-tight">Trending Now</h2>
            <p className="text-lg font-medium text-muted-foreground">Most popular drinks this month.</p>
          </div>
          <Link href="/recipes">
            <Button variant="ghost" className="font-bold">
              View All <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </Link>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {trendingRecipes.map((recipe) => (
            <Link key={recipe.id} href={`/recipes/${recipe.slug}`} className="group">
              <Card className="h-full border-brutal bg-muted/20 hover:bg-background hover:border-primary hover:shadow-brutal-primary transition-all duration-300">
                <CardHeader className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <Badge variant="outline" className="border-brutal-sm font-bold bg-background">
                      {recipe.family}
                    </Badge>
                    <Flame className="h-5 w-5 text-orange-500 fill-orange-500 animate-pulse" />
                  </div>
                  <CardTitle className="text-xl font-black mb-2 group-hover:text-primary transition-colors">
                    {recipe.name}
                  </CardTitle>
                  <p className="text-sm font-medium text-muted-foreground line-clamp-2">
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
