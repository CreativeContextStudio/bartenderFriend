// Import learning plan data
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
];
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle, Target, Clock } from 'lucide-react';
import { ChecklistForm } from '@/components/forms/checklist-form';

// Static checklist data
const checklists = {
  'day-one': {
    id: 'day-one-1',
    name: 'Day One On The Job',
    type: 'day-one',
    items: [
      { id: '1', task: 'Ask for the house spec sheet', completed: false },
      { id: '2', task: 'Confirm house versions of: Margarita, Old Fashioned, Martini, Negroni, Mojito, Mule', completed: false },
      { id: '3', task: 'Watch the fastest bartender on shift - note station setup', completed: false },
      { id: '4', task: 'Watch how they batch motions (grab all citrus at once, etc.)', completed: false },
      { id: '5', task: 'Note how they communicate with guests while building drinks', completed: false },
      { id: '6', task: 'Verify your station setup matches house standards', completed: false },
    ],
  },
  'opening': {
    id: 'opening-1',
    name: 'Opening Checklist',
    type: 'opening',
    items: [
      { id: '1', task: 'Clear, organized bartop', completed: false },
      { id: '2', task: 'All glassware clean and within reach', completed: false },
      { id: '3', task: 'Shaker, bar spoon, jigger, strainers, muddler visible and ready', completed: false },
      { id: '4', task: 'Ice bin full of fresh ice', completed: false },
      { id: '5', task: 'Garnish trays prepped: citrus wheels/wedges, olives, cherry', completed: false },
    ],
  },
  'closing': {
    id: 'closing-1',
    name: 'Closing Checklist',
    type: 'closing',
    items: [
      { id: '1', task: 'Stop accepting new orders at last call', completed: false },
      { id: '2', task: 'Finish current orders', completed: false },
      { id: '3', task: 'Wipe down bar top', completed: false },
      { id: '4', task: 'Empty garnish trays, store prepped citrus in walk-in', completed: false },
      { id: '5', task: 'Remove pouring spouts from liquor bottles, place caps back on', completed: false },
    ],
  },
  'station': {
    id: 'station-1',
    name: 'Station Setup',
    type: 'station',
    items: [
      { id: '1', task: 'Shaker tins (Boston shaker or cobbler)', completed: false },
      { id: '2', task: 'Mixing glass and bar spoon', completed: false },
      { id: '3', task: 'Jigger (dual-sided: 1 oz / 1.5 oz)', completed: false },
      { id: '4', task: 'Hawthorne strainer', completed: false },
      { id: '5', task: 'Fine strainer', completed: false },
    ],
  },
};

export default function TrainingPage() {
  const learningDays = learningPlanDays;
  const currentDay = learningDays.find((day) => day.day_number === 1) || learningDays[0] || null;

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Training Mode</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Daily tasks, quizzes, and practical checklists to build your skills.
        </p>
      </div>

      <Tabs defaultValue="tasks" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="tasks" className="data-[state=active]:bg-primary/10 data-[state=active]:shadow-brutal-primary data-[state=active]:border-primary">Daily Tasks</TabsTrigger>
          <TabsTrigger value="quizzes" className="data-[state=active]:bg-secondary/10 data-[state=active]:shadow-brutal-secondary data-[state=active]:border-secondary">Quizzes</TabsTrigger>
          <TabsTrigger value="checklists" className="data-[state=active]:bg-accent/10 data-[state=active]:shadow-brutal-accent data-[state=active]:border-accent">Checklists</TabsTrigger>
        </TabsList>

        <TabsContent value="tasks" className="space-y-6">
          {currentDay ? (
            <Card className="border-brutal">
              <CardHeader className="border-b-4 border-brutal">
                <div className="flex items-center justify-between">
                  <div>
                    <CardTitle className="text-3xl font-black mb-2">
                      Day {currentDay.day_number}: {currentDay.title}
                    </CardTitle>
                    <CardDescription className="text-lg font-medium">
                      {currentDay.description}
                    </CardDescription>
                  </div>
                  <div className="flex items-center gap-2 text-base font-bold text-muted-foreground">
                    <Clock className="h-5 w-5" />
                    <span>45-60 min</span>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4 pt-6">
                {currentDay.tasks && Array.isArray(currentDay.tasks) && currentDay.tasks.length > 0 ? (
                  <div className="space-y-3">
                    {currentDay.tasks.map((task, index: number) => (
                      <div key={index} className="flex items-start gap-4 border-brutal-sm p-4 bg-muted/30 shadow-brutal-sm hover:shadow-brutal transition-brutal">
                        <Circle className="h-6 w-6 text-muted-foreground mt-1 shrink-0" />
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
                <div className="pt-6 border-t-4 border-brutal">
                  <Link href="/guide/learning-plan">
                    <Button variant="outline" className="w-full border-brutal-sm font-bold" size="lg">
                      View Full Learning Plan (7-10 Days)
                    </Button>
                  </Link>
                </div>
              </CardContent>
            </Card>
          ) : (
            <Card className="border-brutal">
              <CardContent className="py-12 text-center text-muted-foreground">
                <p className="text-lg font-medium">No learning plan days found. Check your database connection.</p>
              </CardContent>
            </Card>
          )}
        </TabsContent>

        <TabsContent value="quizzes" className="space-y-6">
          <Card className="border-brutal">
            <CardHeader className="border-b-4 border-brutal">
              <CardTitle className="text-3xl font-black">Practice Quizzes</CardTitle>
              <CardDescription className="text-lg font-medium">
                Test your knowledge on recipes, families, and bar language.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <Link href="/training/quizzes?type=recipe">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <Target className="mr-3 h-5 w-5" />
                  Recipe Quiz
                  <span className="ml-auto text-base font-medium text-muted-foreground">Test recipe knowledge</span>
                </Button>
              </Link>
              <Link href="/training/quizzes?type=family">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <Target className="mr-3 h-5 w-5" />
                  Family Quiz
                  <span className="ml-auto text-base font-medium text-muted-foreground">Test family patterns</span>
                </Button>
              </Link>
              <Link href="/training/quizzes?type=glossary">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <Target className="mr-3 h-5 w-5" />
                  Glossary Quiz
                  <span className="ml-auto text-base font-medium text-muted-foreground">Test bar language</span>
                </Button>
              </Link>
              <Link href="/training/quizzes?type=mixed">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <Target className="mr-3 h-5 w-5" />
                  Mixed Quiz
                  <span className="ml-auto text-base font-medium text-muted-foreground">10 random questions</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="checklists" className="space-y-6">
          <Card className="border-brutal">
            <CardHeader className="border-b-4 border-brutal">
              <CardTitle className="text-3xl font-black">Practical Checklists</CardTitle>
              <CardDescription className="text-lg font-medium">
                Interactive checklists for real-world scenarios.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4 pt-6">
              <Link href="/training/checklists?type=day-one">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <CheckCircle2 className="mr-3 h-5 w-5" />
                  Day One On The Job
                  <span className="ml-auto text-base font-medium text-muted-foreground">First shift checklist</span>
                </Button>
              </Link>
              <Link href="/training/checklists?type=opening">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <CheckCircle2 className="mr-3 h-5 w-5" />
                  Opening Checklist
                  <span className="ml-auto text-base font-medium text-muted-foreground">Mise en place</span>
                </Button>
              </Link>
              <Link href="/training/checklists?type=closing">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <CheckCircle2 className="mr-3 h-5 w-5" />
                  Closing Checklist
                  <span className="ml-auto text-base font-medium text-muted-foreground">End of shift duties</span>
                </Button>
              </Link>
              <Link href="/training/checklists?type=station">
                <Button variant="outline" className="w-full justify-start border-brutal-sm font-bold" size="lg">
                  <CheckCircle2 className="mr-3 h-5 w-5" />
                  Station Setup
                  <span className="ml-auto text-base font-medium text-muted-foreground">Tool organization</span>
                </Button>
              </Link>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
