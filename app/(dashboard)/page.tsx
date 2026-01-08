import Link from 'next/link';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Badge } from '@/components/ui/badge';
import { getAllRecipes } from '@/lib/static-data';
import { ArrowRight, Coffee, BookOpen, Target, BarChart3 } from 'lucide-react';
import { DashboardStreakCounter } from '@/components/dashboard-streak-counter';

export default function DashboardPage() {
  // Use static data
  const recipes = getAllRecipes();
  const studyRecipes = recipes.slice(0, 5); // Show first 5 as "to study"
  const totalDays = 10; // 10-day learning plan
  const completedDays = 0; // Would come from localStorage/DB
  const progressPercent = totalDays > 0 ? (completedDays / totalDays) * 100 : 0;

  return (
    <div className="space-y-8">

      {/* Hero Section */}
      <div className="space-y-3 border-brutal bg-primary/5 p-8 md:p-10 shadow-brutal-lg">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Welcome back</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Quick recall and confident execution. Let's get you ready for your next shift.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid gap-6 md:grid-cols-3">
        <Card className="border-brutal bg-primary/10 shadow-brutal-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Streak</CardTitle>
            <BarChart3 className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <DashboardStreakCounter />
          </CardContent>
        </Card>
        <Card className="border-brutal bg-secondary/10 shadow-brutal-secondary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Learning Plan</CardTitle>
            <Target className="h-6 w-6 text-secondary" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-4xl font-black mb-3">{completedDays}/{totalDays}</div>
            <Progress value={progressPercent} className="h-3 border-brutal-sm" />
          </CardContent>
        </Card>
        <Card className="border-brutal bg-accent/10 shadow-brutal-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Recipes to Study</CardTitle>
            <Coffee className="h-6 w-6 text-accent" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-4xl font-black mb-2">{studyRecipes.length}</div>
            <p className="text-base font-medium text-muted-foreground">Not practiced in 7 days</p>
          </CardContent>
        </Card>
      </div>

      {/* What Should I Study Today */}
      {studyRecipes.length > 0 && (
        <Card>
          <CardHeader>
            <CardTitle>What should I study today?</CardTitle>
            <CardDescription>
              Recipes you haven't practiced recently
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {studyRecipes.map((recipe) => (
                <div 
                  key={recipe.id} 
                  className="flex items-center justify-between border-brutal-sm p-4 bg-muted/30 hover:bg-muted/50 transition-colors"
                >
                  <div>
                    <div className="text-lg font-black mb-1">{recipe.name}</div>
                    <div className="text-base font-medium text-muted-foreground">{recipe.family || 'Uncategorized'}</div>
                  </div>
                  <Link href={`/recipes/${recipe.slug}`}>
                    <Button variant="outline" size="lg" className="border-brutal-sm font-bold">
                      Review
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </Button>
                  </Link>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Quick Links */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="border-b-4 border-brutal">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <Coffee className="h-7 w-7 text-primary" />
              Recipe Cards
            </CardTitle>
            <CardDescription className="text-base font-medium">Browse all cocktail recipes</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Link href="/recipes">
              <Button className="w-full border-brutal-sm font-bold" variant="outline" size="lg">
                Explore Recipes
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b-4 border-brutal">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <Target className="h-7 w-7 text-primary" />
              Training Mode
            </CardTitle>
            <CardDescription className="text-base font-medium">Daily tasks, quizzes, checklists</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Link href="/training">
              <Button className="w-full border-brutal-sm font-bold" variant="outline" size="lg">
                Start Training
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="border-b-4 border-brutal">
            <CardTitle className="flex items-center gap-3 text-2xl font-black">
              <BookOpen className="h-7 w-7 text-primary" />
              Cheat Sheet
            </CardTitle>
            <CardDescription className="text-base font-medium">Memorize these core drinks cold</CardDescription>
          </CardHeader>
          <CardContent className="pt-6">
            <Link href="/cheat-sheet">
              <Button className="w-full border-brutal-sm font-bold" variant="outline" size="lg">
                View Cheat Sheet
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
