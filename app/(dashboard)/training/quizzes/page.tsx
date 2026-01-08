import { QuizForm } from '@/components/forms/quiz-form';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { getAllRecipes } from '@/lib/static-data';

function generateQuiz(type: string) {
  if (type === 'recipe') {
    const recipes = getAllRecipes();
    const selectedRecipes = recipes.slice(0, 5);
    const questions = selectedRecipes.map((recipe, index: number) => {
      const spec = recipe.spec || {};
      const specEntries = Object.entries(spec);
      const correctAnswer = specEntries.map(([k, v]) => `${k}: ${v}`).join(', ');
      const wrongAnswers = [
        specEntries.map(([k, v]) => `${k}: ${k === 'citrus' ? '¾ oz' : v}`).join(', '),
        specEntries.map(([k, v]) => `${k}: ${k.includes('spirit') ? '1½ oz' : v}`).join(', '),
        specEntries.map(([k, v]) => `${k}: ${k.includes('modifier') || k.includes('simple') ? '1 oz' : v}`).join(', '),
      ];
      
      return {
        id: `q${index + 1}`,
        question: `What's the spec for a ${recipe.name}?`,
        type: 'multiple_choice' as const,
        options: [correctAnswer, ...wrongAnswers.slice(0, 3)],
        correct: 0,
        explanation: `${recipe.name}: ${correctAnswer}. Method: ${recipe.method}, Glass: ${recipe.glassware}`,
      };
    });
    
    return { id: 'recipe-quiz-1', type: 'recipe', questions };
  }
  
  // Default quiz
  return {
    id: 'default-quiz-1',
    type: type || 'mixed',
    questions: [
      {
        id: 'q1',
        question: "What's the spec for a Margarita?",
        type: 'multiple_choice' as const,
        options: [
          '2 oz tequila, 1 oz lime, ¾ oz triple sec',
          '2 oz tequila, ¾ oz lime, ½ oz triple sec',
          '1½ oz tequila, 1 oz lime, ¾ oz triple sec',
          '2 oz tequila, 1 oz lime, 1 oz triple sec',
        ],
        correct: 0,
        explanation: 'Margarita: 2 oz tequila, 1 oz lime, ¾ oz triple sec. Shake hard, strain over fresh ice in rocks glass. Salt rim optional.',
      },
      {
        id: 'q2',
        question: 'What does "up" mean?',
        type: 'multiple_choice' as const,
        options: [
          'Spirit only, no ice',
          'Chilled and strained, no ice in the glass',
          'Over ice',
          'With mixer',
        ],
        correct: 1,
        explanation: '"Up" means chilled and strained into a glass with no ice. Served cold but undiluted.',
      },
      {
        id: 'q3',
        question: 'Which drinks belong to the Sour family?',
        type: 'multiple_choice' as const,
        options: [
          'Margarita, Daiquiri, Whiskey Sour',
          'Old Fashioned, Manhattan, Negroni',
          'Gin & Tonic, Vodka Soda',
          'Tom Collins, Moscow Mule',
        ],
        correct: 0,
        explanation: 'The Sour family includes drinks with citrus + spirit + sweetener, shaken. Examples: Margarita, Daiquiri, Whiskey Sour, Cosmopolitan.',
      },
    ],
  };
}

export default function QuizzesPage({
  searchParams,
}: {
  searchParams: { type?: string };
}) {
  const quizType = searchParams.type || 'mixed';
  const quiz = generateQuiz(quizType);

  return (
    <div className="space-y-8">
      <div className="space-y-3">
        <h1 className="text-5xl md:text-6xl font-black tracking-tight">Quizzes</h1>
        <p className="text-lg md:text-xl font-medium text-muted-foreground leading-relaxed">
          Test your knowledge on recipes, families, and bar language.
        </p>
      </div>

      <QuizForm quiz={quiz} />
    </div>
  );
}
