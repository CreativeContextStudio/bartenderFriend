'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Label } from '@/components/ui/label';
import { useToast } from '@/components/ui/use-toast';
import { CheckCircle2, XCircle, ArrowRight } from 'lucide-react';

interface Question {
  id: string;
  question: string;
  type: 'multiple_choice' | 'multiple_select';
  options: string[];
  correct: number | number[];
  explanation?: string;
}

interface QuizFormProps {
  quiz: {
    id: string;
    type: string;
    questions: Question[];
  };
}

export function QuizForm({ quiz }: QuizFormProps) {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<Record<string, number | number[]>>({});
  const [showResults, setShowResults] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const { toast } = useToast();

  const question = quiz.questions[currentQuestion];
  const progress = ((currentQuestion + 1) / quiz.questions.length) * 100;

  const handleAnswer = (value: string) => {
    if (submitted) return;

    if (question.type === 'multiple_choice') {
      setAnswers({ ...answers, [question.id]: parseInt(value) });
    } else {
      // Multiple select logic would go here
      setAnswers({ ...answers, [question.id]: parseInt(value) });
    }
  };

  const handleSubmit = () => {
    setSubmitted(true);
    const score = calculateScore();
    toast({
      title: `Score: ${score}%`,
      description: `You got ${score}% of the questions correct.`,
    });
    setShowResults(true);
  };

  const calculateScore = () => {
    let correct = 0;
    quiz.questions.forEach((q) => {
      const userAnswer = answers[q.id];
      if (Array.isArray(q.correct)) {
        // Multiple select scoring
        if (Array.isArray(userAnswer)) {
          const correctSet = new Set(q.correct);
          const userSet = new Set(userAnswer);
          if (correctSet.size === userSet.size && [...correctSet].every((x) => userSet.has(x))) {
            correct++;
          }
        }
      } else {
        if (userAnswer === q.correct) {
          correct++;
        }
      }
    });
    return Math.round((correct / quiz.questions.length) * 100);
  };

  const handleNext = () => {
    if (currentQuestion < quiz.questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
      setSubmitted(false);
    } else {
      handleSubmit();
    }
  };

  if (showResults) {
    const score = calculateScore();
    return (
      <Card className="border-brutal">
        <CardHeader className="border-b-4 border-brutal">
          <CardTitle className="text-3xl font-black">Quiz Results</CardTitle>
          <CardDescription className="text-lg font-medium">Your performance summary</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6 pt-6">
          <div className="text-center space-y-3">
            <div className="text-6xl font-black">{score}%</div>
            <Progress value={score} className="w-full h-3 border-brutal-sm" />
            <p className="text-lg font-bold text-muted-foreground">
              {score >= 90 ? 'Excellent!' : score >= 70 ? 'Good job!' : 'Keep practicing!'}
            </p>
          </div>
          <Button onClick={() => window.location.reload()} className="w-full border-brutal-sm font-bold" size="lg">
            Try Again
          </Button>
        </CardContent>
      </Card>
    );
  }

  if (!question) {
    return null;
  }

  const isCorrect = submitted && answers[question.id] === question.correct;

  return (
    <Card className="border-brutal">
      <CardHeader className="border-b-4 border-brutal">
        <div className="flex items-center justify-between mb-3">
          <CardTitle className="text-2xl font-black">Question {currentQuestion + 1} of {quiz.questions.length}</CardTitle>
          <Badge variant="secondary" className="text-base px-4 py-2 font-bold border-brutal-sm">{quiz.type}</Badge>
        </div>
        <Progress value={progress} className="h-3 border-brutal-sm" />
      </CardHeader>
      <CardContent className="space-y-6 pt-6">
        <div>
          <h3 className="text-2xl font-black mb-6 leading-tight">{question.question}</h3>
          <RadioGroup
            value={answers[question.id]?.toString()}
            onValueChange={handleAnswer}
            disabled={submitted}
            className="space-y-3"
          >
            {question.options.map((option, index) => {
              const isSelected = answers[question.id] === index;
              const isAnswerCorrect = submitted && index === question.correct;
              const isAnswerWrong = submitted && isSelected && !isAnswerCorrect;

              return (
                <div key={index} className="flex items-center space-x-3">
                  <RadioGroupItem value={index.toString()} id={`option-${index}`} />
                  <Label
                    htmlFor={`option-${index}`}
                    className={`flex-1 cursor-pointer p-4 border-brutal-sm transition-all duration-200 ${
                      isAnswerCorrect
                        ? 'bg-primary/20 border-primary border-4'
                        : isAnswerWrong
                        ? 'bg-destructive/20 border-destructive border-4'
                        : 'bg-background hover:bg-muted/50 hover:border-primary'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="text-base font-medium leading-relaxed">{option}</span>
                      {submitted && (
                        <>
                          {isAnswerCorrect && (
                            <CheckCircle2 className="h-6 w-6 text-primary shrink-0 ml-3" />
                          )}
                          {isAnswerWrong && (
                            <XCircle className="h-6 w-6 text-destructive shrink-0 ml-3" />
                          )}
                        </>
                      )}
                    </div>
                  </Label>
                </div>
              );
            })}
          </RadioGroup>
        </div>

        {submitted && question.explanation && (
          <div className="border-brutal-sm p-5 bg-muted/30">
            <p className="text-base font-medium text-muted-foreground leading-relaxed">{question.explanation}</p>
          </div>
        )}

        <div className="flex justify-end gap-3">
          {currentQuestion > 0 && (
            <Button
              variant="outline"
              onClick={() => {
                setCurrentQuestion(currentQuestion - 1);
                setSubmitted(false);
              }}
              className="border-brutal-sm font-bold"
              size="lg"
            >
              Previous
            </Button>
          )}
          <Button
            onClick={submitted ? handleNext : () => setSubmitted(true)}
            disabled={answers[question.id] === undefined}
            className="border-brutal-sm font-bold"
            size="lg"
          >
            {submitted
              ? currentQuestion < quiz.questions.length - 1
                ? 'Next'
                : 'Submit Quiz'
              : 'Check Answer'}
            {submitted && currentQuestion < quiz.questions.length - 1 && (
              <ArrowRight className="ml-2 h-5 w-5" />
            )}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}
