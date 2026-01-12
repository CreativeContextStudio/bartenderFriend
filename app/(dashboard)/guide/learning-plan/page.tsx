import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import Link from 'next/link';
import { Target, CheckCircle2, Zap } from 'lucide-react';

const learningPlanDays = [
  {
    day_number: 1,
    title: 'Core Templates',
    description: 'Get the patterns in your head',
    tasks: [
      { type: 'study', content: 'Memorize: Sour Template (Margarita, Daiquiri, Whiskey Sour, Cosmo)' },
      { type: 'study', content: 'Memorize: Stirred Template (Old Fashioned, Manhattan, Negroni)' },
      { type: 'study', content: 'Memorize: Highball Patterns (G&T, Vodka Soda, Mule)' },
      { type: 'practice', content: 'Flashcards: 20-25 drinks. 10 mins rapid fire.' },
    ],
  },
  {
    day_number: 2,
    title: 'Tighten Templates',
    description: 'Solidify the core patterns',
    tasks: [
      { type: 'study', content: 'Review all variations.' },
      { type: 'practice', content: 'Quiz: What changes? What stays same?' },
      { type: 'practice', content: 'Flashcard Drills: Speed focus.' },
    ],
  },
  {
    day_number: 3,
    title: 'Physical Reps',
    description: 'Rebuild muscle memory',
    tasks: [
      { type: 'practice', content: 'Handle the tools: Shaker, Strainer, Jigger.' },
      { type: 'practice', content: 'Water & Dye: Build 3 sours in a row.' },
      { type: 'practice', content: 'Stirring: Practice the motion with ice.' },
    ],
  },
  {
    day_number: 4,
    title: 'Workflow',
    description: 'Build rhythm back',
    tasks: [
      { type: 'practice', content: 'Batching: Build rocks first, then shake, then highball.' },
      { type: 'practice', content: 'Ghost Bartending: Move as if you are on bar.' },
      { type: 'practice', content: 'Timed Run: 5 different drinks.' },
    ],
  },
  {
    day_number: 5,
    title: 'Menu & Scripts',
    description: 'Talk like a bartender',
    tasks: [
      { type: 'study', content: 'Write a fake menu. Map to templates.' },
      { type: 'practice', content: 'Roleplay: Explain Negroni vs Old Fashioned.' },
      { type: 'practice', content: 'Roleplay: "I like tequila but not sweet."' },
    ],
  },
  {
    day_number: 6,
    title: 'Advanced Scripts',
    description: 'Handle edge cases',
    tasks: [
      { type: 'practice', content: 'Complaint handling: "Too sweet", "Too strong".' },
      { type: 'practice', content: 'Upselling: Suggesting premium spirits.' },
    ],
  },
  {
    day_number: 7,
    title: 'Final Polish',
    description: 'Plug-and-play ready',
    tasks: [
      { type: 'practice', content: 'Daily 20-drink sprint.' },
      { type: 'quiz', content: 'Full mixed quiz: Recipes + Family + Terms.' },
    ],
  },
];

export default function LearningPlanPage() {
  return (
    <div className="space-y-12 pb-16">
      <div className="space-y-4 max-w-4xl">
        <h1 className="font-display text-5xl md:text-7xl font-black tracking-tight text-black">
          7-Day Learning Plan
        </h1>
        <p className="font-sans text-xl md:text-2xl font-bold text-gray-700 leading-relaxed border-l-4 border-[#00b4d8] pl-6">
          Minimal time. Maximum confidence. <br />
          45-60 minutes per day.
        </p>
      </div>

      <div className="grid gap-8">
        {learningPlanDays.map((day) => (
          <div key={day.day_number} className="relative pl-8 md:pl-0">
            {/* Timeline Line (Desktop) */}
            <div className="hidden md:block absolute left-[27px] top-0 bottom-0 w-1 bg-black"></div>

            <div className="md:flex gap-8 items-start relative z-10">
              {/* Day Badge */}
              <div className="flex-shrink-0 mb-4 md:mb-0">
                <div className="w-14 h-14 bg-black text-[#ffd60a] rounded-full flex items-center justify-center border-4 border-white shadow-neo-sm font-black text-xl">
                  {day.day_number}
                </div>
              </div>

              {/* Content Card */}
              <Card className="neo-card flex-1 bg-white hover:translate-x-2 transition-transform duration-200">
                <CardHeader className="border-b-4 border-black pb-4 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <CardTitle className="text-3xl font-black uppercase">{day.title}</CardTitle>
                    <p className="text-lg font-bold text-gray-500">{day.description}</p>
                  </div>
                  <Badge className="neo-badge bg-[#00b4d8] text-white self-start md:self-center">45 min</Badge>
                </CardHeader>
                <CardContent className="pt-6">
                  <div className="space-y-3">
                    {day.tasks.map((task, idx) => (
                      <div key={idx} className="flex items-start gap-3 p-3 bg-gray-50 border-2 border-black/10 rounded font-medium">
                        {task.type === 'study' ? (
                          <Zap className="w-5 h-5 text-[#ff006e] shrink-0 mt-0.5" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-[#70e000] shrink-0 mt-0.5" />
                        )}
                        <span className="text-gray-800">{task.content}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        ))}
      </div>

      <section className="neo-card bg-[#ffd60a] p-12 border-4 border-black text-center space-y-6">
        <h2 className="font-display text-5xl font-black">Ready to Start?</h2>
        <p className="text-xl font-bold max-w-2xl mx-auto">
          Reading is one thing. Doing is another. Launch Training Mode now to track your daily progress.
        </p>
        <Link href="/training" className="inline-block">
          <Button size="lg" className="neo-btn bg-black text-white hover:scale-105 transition-transform text-xl px-12 py-8 border-white">
            Start Day 1
          </Button>
        </Link>
      </section>

    </div>
  );
}
