import { getAllRecipes } from '@/lib/static-data';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Progress } from '@/components/ui/progress';
import { BarChart3, Target, Coffee, TrendingUp } from 'lucide-react';
import { ProgressClientStats } from '@/components/progress-client-stats';
import { DashboardStreakCounter } from '@/components/dashboard-streak-counter';
import { ProgressRecipeCount } from '@/components/progress-recipe-count';
import { ProgressWeakAreasCount } from '@/components/progress-weak-areas-count';

export default function ProgressPage() {
  // Static data - progress tracking would require DB
  const recipes = getAllRecipes();
  const studyRecipes = recipes.slice(0, 5);
  const totalDays = 10; // 10-day learning plan
  const completedDays = 0; // Would come from localStorage/DB
  const progressPercent = totalDays > 0 ? (completedDays / totalDays) * 100 : 0;

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Progress Dashboard</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Track your learning progress and identify areas for improvement.
        </p>
      </div>

      <div className="grid gap-6 md:grid-cols-4">
        <Card className="border-brutal bg-secondary/20 shadow-brutal-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Streak</CardTitle>
            <TrendingUp className="h-6 w-6 text-secondary" />
          </CardHeader>
          <CardContent className="pt-6">
            <DashboardStreakCounter />
          </CardContent>
        </Card>
        <Card className="border-brutal bg-primary/10 shadow-brutal-primary">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Learning Plan</CardTitle>
            <Target className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <div className="text-4xl font-black mb-3">{completedDays}/{totalDays}</div>
            <Progress value={progressPercent} className="h-3 border-brutal-sm" />
          </CardContent>
        </Card>
        <Card className="border-brutal bg-accent/10 shadow-brutal-accent">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Weak Areas</CardTitle>
            <BarChart3 className="h-6 w-6 text-accent" />
          </CardHeader>
          <CardContent className="pt-6">
            <ProgressWeakAreasCount />
          </CardContent>
        </Card>
        <Card className="shadow-brutal-lg">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-4 border-b-4 border-brutal">
            <CardTitle className="text-base font-black">Recipes Practiced</CardTitle>
            <Coffee className="h-6 w-6 text-primary" />
          </CardHeader>
          <CardContent className="pt-6">
            <ProgressRecipeCount />
          </CardContent>
        </Card>
      </div>

      <ProgressClientStats />
    </div>
  );
}
