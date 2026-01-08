// Static learning plan data - from basicKnowledge.md

export interface LearningPlanDay {
  id: string;
  day_number: number;
  title: string;
  description: string;
  tasks: Array<{ type: 'study' | 'practice' | 'quiz'; content: string }>;
}

export const learningPlanDays: LearningPlanDay[] = [
  {
    id: 'day-1',
    day_number: 1,
    title: 'Core Templates + Flashcards',
    description: 'Get the patterns in your head',
    tasks: [
      {
        type: 'study',
        content: 'Write or type a one-page cheat sheet: Sour template + 4 examples (Margarita, Daiquiri, Whiskey Sour, Cosmo)',
      },
      {
        type: 'study',
        content: 'Stirred template + 3 examples (Old Fashioned, Manhattan, Negroni)',
      },
      {
        type: 'study',
        content: 'Highball patterns + 4 examples (G&T, Vodka Soda, Rum & Coke, Mule)',
      },
      {
        type: 'practice',
        content: 'Make flashcards (physical or digital) for 20-25 drinks',
      },
      {
        type: 'practice',
        content: 'Run 10-15 minutes of rapid drills: flip card, say spec out loud as if calling the drink on the line',
      },
    ],
  },
  {
    id: 'day-2',
    day_number: 2,
    title: 'Tighten Templates',
    description: 'Solidify the core patterns',
    tasks: [
      {
        type: 'study',
        content: 'Review all template patterns and variations',
      },
      {
        type: 'practice',
        content: 'Quiz yourself: what changes vs stays constant in each family?',
      },
      {
        type: 'practice',
        content: 'Run flashcard drills again, focus on speed',
      },
      {
        type: 'quiz',
        content: 'Take a practice quiz on template patterns',
      },
    ],
  },
  {
    id: 'day-3',
    day_number: 3,
    title: 'Physical Reps at Home',
    description: 'Rebuild muscle memory',
    tasks: [
      {
        type: 'practice',
        content: 'Use shaker, mixing glass, jigger (or measuring cup)',
      },
      {
        type: 'practice',
        content: 'Practice building 3-4 sours in a row (use water + food coloring)',
      },
      {
        type: 'practice',
        content: 'Practice stirring boozy drinks in mixing glass with ice',
      },
      {
        type: 'practice',
        content: 'Practice straining: Hawthorne vs fine strainer',
      },
      {
        type: 'practice',
        content: 'Practice workflow: imagine ticket "Margarita, Old Fashioned, Vodka Soda" - decide order',
      },
    ],
  },
  {
    id: 'day-4',
    day_number: 4,
    title: 'Workflow Practice',
    description: 'Build rhythm back',
    tasks: [
      {
        type: 'practice',
        content: 'Practice batch building: all rocks drinks first, then shaken, then highballs',
      },
      {
        type: 'practice',
        content: 'Practice physical moves as if behind bar',
      },
      {
        type: 'practice',
        content: 'Time yourself: build 5 different drinks in sequence',
      },
      {
        type: 'quiz',
        content: 'Quiz on build order and workflow',
      },
    ],
  },
  {
    id: 'day-5',
    day_number: 5,
    title: 'Menu Simulation + Scripts',
    description: 'Talk like a bartender again',
    tasks: [
      {
        type: 'study',
        content: 'Write a fake but plausible menu: 3 house cocktails, 2 spirit-forward, 2 N/A',
      },
      {
        type: 'practice',
        content: 'For each house drink, map back to core templates',
      },
      {
        type: 'practice',
        content: 'Practice guest interaction scripts: explaining Negroni vs Old Fashioned',
      },
      {
        type: 'practice',
        content: 'Practice recommending drinks: "not too sweet" or "more spirit-forward"',
      },
      {
        type: 'practice',
        content: 'Handle "Surprise me: I like tequila and citrus but not too sweet"',
      },
    ],
  },
  {
    id: 'day-6',
    day_number: 6,
    title: 'Advanced Scripts + Variations',
    description: 'Handle edge cases',
    tasks: [
      {
        type: 'practice',
        content: 'Practice handling complaints: drink too strong, too sweet, wrong temp',
      },
      {
        type: 'practice',
        content: 'Practice describing drinks on menu',
      },
      {
        type: 'practice',
        content: 'Practice upselling or suggesting variations',
      },
      {
        type: 'quiz',
        content: 'Quiz on guest interaction scenarios',
      },
    ],
  },
  {
    id: 'day-7',
    day_number: 7,
    title: 'Tighten Memory + Speed',
    description: 'Be plug-and-play ready',
    tasks: [
      {
        type: 'practice',
        content: 'Daily 20-drink sprint: randomly choose 20 classics, recite specs/build/glass/garnish',
      },
      {
        type: 'practice',
        content: 'Practice order of operations: build "up" drinks before rocks',
      },
      {
        type: 'practice',
        content: 'Group by build: all shaken, then stirred, then highballs',
      },
      {
        type: 'quiz',
        content: 'Mixed quiz: recipe + family + glossary questions',
      },
    ],
  },
  {
    id: 'day-8',
    day_number: 8,
    title: 'Speed Drills',
    description: 'Build confidence and speed',
    tasks: [
      {
        type: 'practice',
        content: 'Practice free-pouring (if allowed) with jigger as backup',
      },
      {
        type: 'practice',
        content: 'Have friend/partner "ring in" fake orders rapid-fire',
      },
      {
        type: 'practice',
        content: 'Practice while talking to imaginary guests',
      },
      {
        type: 'quiz',
        content: 'Timed quiz: 10 recipes in under 2 minutes',
      },
    ],
  },
  {
    id: 'day-9',
    day_number: 9,
    title: 'Final Review',
    description: 'Polish and refine',
    tasks: [
      {
        type: 'study',
        content: 'Review cheat sheet list - memorize cold',
      },
      {
        type: 'practice',
        content: 'Practice all core drinks one more time',
      },
      {
        type: 'quiz',
        content: 'Full practice quiz on all families',
      },
      {
        type: 'study',
        content: 'Review bar language and workflow refresher',
      },
    ],
  },
  {
    id: 'day-10',
    day_number: 10,
    title: 'Day One Prep',
    description: 'Ready for shift',
    tasks: [
      {
        type: 'study',
        content: 'Review day-one checklist',
      },
      {
        type: 'study',
        content: 'Review opening duties and station setup',
      },
      {
        type: 'practice',
        content: 'Mental walkthrough of first shift',
      },
      {
        type: 'quiz',
        content: 'Final comprehensive quiz',
      },
    ],
  },
];
