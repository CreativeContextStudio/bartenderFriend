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
    <Card className="border-brutal">
      <CardHeader className="border-b-4 border-brutal">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl font-black">{checklist.name}</CardTitle>
            <CardDescription className="mt-2 text-lg font-medium">
              {completedCount} of {totalCount} completed
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black">{Math.round(progressPercent)}%</div>
            <div className="text-base font-bold text-muted-foreground">Complete</div>
          </div>
        </div>
        <div className="mt-6">
          <Progress value={progressPercent} className="h-3 border-brutal-sm" />
        </div>
      </CardHeader>
      <CardContent className="space-y-3 pt-6">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border-brutal-sm p-4 bg-muted/30 hover:bg-muted/50 transition-all duration-200 cursor-pointer hover:border-primary"
            onClick={() => toggleItem(item.id)}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleItem(item.id);
              }
            }}
            aria-label={`${item.completed ? 'Uncheck' : 'Check'} ${item.task}`}
          >
            {item.completed ? (
              <CheckCircle2 className="h-6 w-6 text-primary shrink-0 mt-1" />
            ) : (
              <Circle className="h-6 w-6 text-muted-foreground shrink-0 mt-1" />
            )}
            <div className="flex-1">
              <div
                className={`text-base leading-relaxed ${
                  item.completed ? 'line-through text-muted-foreground' : 'font-medium'
                }`}
              >
                {item.task}
              </div>
            </div>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}
