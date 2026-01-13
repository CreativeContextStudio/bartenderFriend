'use client';

import { useState } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { CheckCircle2, Circle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import { Progress } from '@/components/ui/progress';
import { saveProgressEvent } from '@/lib/progress';

interface ChecklistItem {
  id: string;
  task: string;
  completed: boolean;
  notes?: string;
}

interface ChecklistFormProps {
  checklist: {
    id: string;
    name: string;
    type: string;
    items: ChecklistItem[];
  };
}

export function ChecklistForm({ checklist }: ChecklistFormProps) {
  const [items, setItems] = useState<ChecklistItem[]>(checklist.items || []);
  const { toast } = useToast();

  const toggleItem = async (itemId: string) => {
    setItems((prev) =>
      prev.map((item) =>
        item.id === itemId ? { ...item, completed: !item.completed } : item
      )
    );

    const item = items.find((i) => i.id === itemId);
    if (item) {
      try {
        saveProgressEvent(
          'checklist_completed',
          'checklist',
          checklist.id,
          undefined,
          { item_id: itemId, completed: !item.completed }
        );
        toast({
          title: item.completed ? 'Item unchecked' : 'Item checked',
          description: item.task,
        });
      } catch (error) {
        console.error('Error recording progress:', error);
      }
    }
  };

  const completedCount = items.filter((item) => item.completed).length;
  const totalCount = items.length;
  const progressPercent = totalCount > 0 ? (completedCount / totalCount) * 100 : 0;

  return (
    <Card className="neo-card bg-card border-2 border-border shadow-neo transition-all">
      <CardHeader className="border-b-4 border-border bg-muted/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl font-black font-display uppercase tracking-tight text-foreground">{checklist.name}</CardTitle>
            <CardDescription className="mt-2 text-lg font-medium text-muted-foreground">
              {completedCount} of {totalCount} completed
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black text-foreground">{Math.round(progressPercent)}%</div>
            <div className="text-base font-bold text-muted-foreground">Complete</div>
          </div>
        </div>
        <div className="mt-6">
          <Progress
            value={progressPercent}
            className="h-4 border-2 border-border bg-muted"
            indicatorClassName="bg-neo-action border-r-2 border-border"
            aria-label={`Checklist progress: ${Math.round(progressPercent)}% complete`}
            aria-valuenow={progressPercent}
            aria-valuemin={0}
            aria-valuemax={100}
          />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {items.map((item) => (
          <button
            key={item.id}
            onClick={() => toggleItem(item.id)}
            className={`w-full flex items-start gap-4 p-4 text-left transition-all duration-200 border-2 border-border rounded-lg shadow-neo-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-md focus-visible:ring-2 focus-visible:ring-neo-focus focus-visible:outline-none ${
              item.completed ? 'bg-muted line-through opacity-70' : 'bg-card'
            }`}
            aria-pressed={item.completed}
            aria-label={`${item.completed ? 'Completed' : 'Incomplete'}: ${item.task}`}
          >
            {item.completed ? (
              <CheckCircle2 className="h-8 w-8 text-neo-action shrink-0 mt-0" aria-hidden="true" />
            ) : (
              <Circle className="h-8 w-8 text-muted-foreground shrink-0 mt-0" aria-hidden="true" />
            )}
            <div className="flex-1 pt-1">
              <div
                className={`text-lg font-bold leading-relaxed ${
                  item.completed ? 'text-muted-foreground' : 'text-foreground'
                }`}
              >
                {item.task}
              </div>
            </div>
          </button>
        ))}
      </CardContent>
    </Card>
  );
}
