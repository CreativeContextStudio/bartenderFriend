import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
// Learning plan data - can be moved to JSON if needed
const learningPlanDays = [
  {
    day_number: 1,
    title: 'Core Templates + Flashcards',
    description: 'Get the patterns in your head',
    tasks: [
      { type: 'study', content: 'Write or type a one-page cheat sheet: Sour template + 4 examples (Margarita, Daiquiri, Whiskey Sour, Cosmo)' },
      { type: 'study', content: 'Stirred template + 3 examples (Old Fashioned, Manhattan, Negroni)' },
      { type: 'study', content: 'Highball patterns + 4 examples (G&T, Vodka Soda, Rum & Coke, Mule)' },
      { type: 'practice', content: 'Make flashcards (physical or digital) for 20-25 drinks' },
      { type: 'practice', content: 'Run 10-15 minutes of rapid drills: flip card, say spec out loud' },
    ],
  },
  {
    day_number: 2,
    title: 'Tighten Templates',
    description: 'Solidify the core patterns',
    tasks: [
      { type: 'study', content: 'Review all template patterns and variations' },
      { type: 'practice', content: 'Quiz yourself: what changes vs stays constant in each family?' },
      { type: 'practice', content: 'Run flashcard drills again, focus on speed' },
      { type: 'quiz', content: 'Take a practice quiz on template patterns' },
    ],
  },
  {
    day_number: 3,
    title: 'Physical Reps at Home',
    description: 'Rebuild muscle memory',
    tasks: [
      { type: 'practice', content: 'Use shaker, mixing glass, jigger (or measuring cup)' },
      { type: 'practice', content: 'Practice building 3-4 sours in a row (use water + food coloring)' },
      { type: 'practice', content: 'Practice stirring boozy drinks in mixing glass with ice' },
      { type: 'practice', content: 'Practice straining: Hawthorne vs fine strainer' },
      { type: 'practice', content: 'Practice workflow: imagine ticket "Margarita, Old Fashioned, Vodka Soda" - decide order' },
    ],
  },
  {
    day_number: 4,
    title: 'Workflow Practice',
    description: 'Build rhythm back',
    tasks: [
      { type: 'practice', content: 'Practice batch building: all rocks drinks first, then shaken, then highballs' },
      { type: 'practice', content: 'Practice physical moves as if behind bar' },
      { type: 'practice', content: 'Time yourself: build 5 different drinks in sequence' },
      { type: 'quiz', content: 'Quiz on build order and workflow' },
    ],
  },
  {
    day_number: 5,
    title: 'Menu Simulation + Scripts',
    description: 'Talk like a bartender again',
    tasks: [
      { type: 'study', content: 'Write a fake but plausible menu: 3 house cocktails, 2 spirit-forward, 2 N/A' },
      { type: 'practice', content: 'For each house drink, map back to core templates' },
      { type: 'practice', content: 'Practice guest interaction scripts: explaining Negroni vs Old Fashioned' },
      { type: 'practice', content: 'Practice recommending drinks: "not too sweet" or "more spirit-forward"' },
      { type: 'practice', content: 'Handle "Surprise me: I like tequila and citrus but not too sweet"' },
    ],
  },
  {
    day_number: 6,
    title: 'Advanced Scripts + Variations',
    description: 'Handle edge cases',
    tasks: [
      { type: 'practice', content: 'Practice handling complaints: drink too strong, too sweet, wrong temp' },
      { type: 'practice', content: 'Practice describing drinks on menu' },
      { type: 'practice', content: 'Practice upselling or suggesting variations' },
      { type: 'quiz', content: 'Quiz on guest interaction scenarios' },
    ],
  },
  {
    day_number: 7,
    title: 'Tighten Memory + Speed',
    description: 'Be plug-and-play ready',
    tasks: [
      { type: 'practice', content: 'Daily 20-drink sprint: randomly choose 20 classics, recite specs/build/glass/garnish' },
      { type: 'practice', content: 'Practice order of operations: build "up" drinks before rocks' },
      { type: 'practice', content: 'Group by build: all shaken, then stirred, then highballs' },
      { type: 'quiz', content: 'Mixed quiz: recipe + family + glossary questions' },
    ],
  },
  {
    day_number: 8,
    title: 'Speed Drills',
    description: 'Build confidence and speed',
    tasks: [
      { type: 'practice', content: 'Practice free-pouring (if allowed) with jigger as backup' },
      { type: 'practice', content: 'Have friend/partner "ring in" fake orders rapid-fire' },
      { type: 'practice', content: 'Practice while talking to imaginary guests' },
      { type: 'quiz', content: 'Timed quiz: 10 recipes in under 2 minutes' },
    ],
  },
  {
    day_number: 9,
    title: 'Final Review',
    description: 'Polish and refine',
    tasks: [
      { type: 'study', content: 'Review cheat sheet list - memorize cold' },
      { type: 'practice', content: 'Practice all core drinks one more time' },
      { type: 'quiz', content: 'Full practice quiz on all families' },
      { type: 'study', content: 'Review bar language and workflow refresher' },
    ],
  },
  {
    day_number: 10,
    title: 'Day One Prep',
    description: 'Ready for shift',
    tasks: [
      { type: 'study', content: 'Review day-one checklist' },
      { type: 'study', content: 'Review opening duties and station setup' },
      { type: 'practice', content: 'Mental walkthrough of first shift' },
      { type: 'quiz', content: 'Final comprehensive quiz' },
    ],
  },
];
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Target, Clock, CheckCircle2 } from 'lucide-react';

export default function LearningPlanPage() {
  const learningDays = learningPlanDays;

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Quick Learning Plan (7-10 Days)</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Minimal time, maximum confidence. 45-60 minutes per day, plus any extra reps you want.
        </p>
      </div>

      {learningDays.length > 0 ? (
        <div className="space-y-4">
          {learningDays.map((day) => (
            <Card key={day.id} className="border-brutal">
              <CardHeader className="border-b-4 border-brutal">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <Badge variant="secondary" className="text-base px-4 py-2 font-bold border-brutal-sm">
                      Day {day.day_number}
                    </Badge>
                    <CardTitle className="text-3xl font-black">{day.title}</CardTitle>
                  </div>
                  <div className="flex items-center gap-2 text-base font-bold text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>45-60 min</span>
                  </div>
                </div>
                {day.description && (
                  <CardDescription className="text-lg font-medium mt-3">
                    {day.description}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent className="pt-6">
                {day.tasks && Array.isArray(day.tasks) && day.tasks.length > 0 ? (
                  <div className="space-y-3">
                    {day.tasks.map((task: any, index: number) => (
                      <div key={index} className="flex items-start gap-4 border-brutal-sm p-4 bg-muted/30">
                        <div className="mt-1">
                          {task.type === 'study' && (
                            <Target className="h-6 w-6 text-primary" />
                          )}
                          {task.type === 'practice' && (
                            <CheckCircle2 className="h-6 w-6 text-secondary" />
                          )}
                          {task.type === 'quiz' && (
                            <Badge variant="outline" className="text-sm px-3 py-1.5 font-bold border-brutal-sm">
                              QUIZ
                            </Badge>
                          )}
                        </div>
                        <div className="flex-1">
                          <div className="text-base font-black mb-2">
                            {task.type === 'study' && '📚 Study:'}
                            {task.type === 'practice' && '🎯 Practice:'}
                            {task.type === 'quiz' && '📝 Quiz:'}
                          </div>
                          <p className="text-base font-medium text-muted-foreground leading-relaxed">{task.content}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-base font-medium text-muted-foreground">No tasks defined for this day.</p>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
      ) : (
        <Card>
          <CardHeader>
            <CardTitle>Day 1-2: Core Templates + Flashcards</CardTitle>
            <CardDescription>Get the patterns in your head</CardDescription>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-start gap-3 rounded-md border p-3">
              <Target className="h-4 w-4 text-primary mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-medium mb-1">📚 Study:</div>
                <p className="text-sm text-muted-foreground">
                  Write or type a one-page cheat sheet: Sour template + 4 examples (Margarita, Daiquiri, Whiskey Sour, Cosmo).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md border p-3">
              <Target className="h-4 w-4 text-primary mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-medium mb-1">📚 Study:</div>
                <p className="text-sm text-muted-foreground">
                  Stirred template + 3 examples (Old Fashioned, Manhattan, Negroni).
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3 rounded-md border p-3">
              <CheckCircle2 className="h-4 w-4 text-secondary mt-0.5" />
              <div className="flex-1">
                <div className="text-sm font-medium mb-1">🎯 Practice:</div>
                <p className="text-sm text-muted-foreground">
                  Make flashcards (physical or digital) for 20-25 drinks. Run 10-15 minutes of rapid drills: 
                  flip card, say spec out loud as if calling the drink on the line.
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      )}

      <Card>
        <CardHeader>
          <CardTitle>Daily Breakdown Overview</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid md:grid-cols-2 gap-4">
            <div className="rounded-md border p-4">
              <div className="font-semibold mb-2">Day 1-2: Core Templates + Flashcards</div>
              <p className="text-sm text-muted-foreground">
                Goal: Get the patterns in your head. Write cheat sheets, make flashcards, run rapid drills.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <div className="font-semibold mb-2">Day 3-4: Physical Reps at Home</div>
              <p className="text-sm text-muted-foreground">
                Goal: Rebuild muscle memory. Practice building drinks, stirring, straining. Practice workflow.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <div className="font-semibold mb-2">Day 5-6: Menu Simulation + Scripts</div>
              <p className="text-sm text-muted-foreground">
                Goal: Talk like a bartender again. Write fake menu, map to templates, practice guest interactions.
              </p>
            </div>
            <div className="rounded-md border p-4">
              <div className="font-semibold mb-2">Day 7-10: Tighten Memory + Speed</div>
              <p className="text-sm text-muted-foreground">
                Goal: Be plug-and-play ready. Daily 20-drink sprints, practice order of operations, speed drills.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle>Ready to Start Training?</CardTitle>
          <CardDescription>
            Begin your learning journey with interactive daily tasks, quizzes, and checklists.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Link href="/training">
            <Button className="w-full" size="lg">
              Start Training Mode
            </Button>
          </Link>
        </CardContent>
      </Card>
    </div>
  );
}
