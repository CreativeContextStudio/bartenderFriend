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
    <Card className="neo-card bg-white">
      <CardHeader className="border-b-4 border-black bg-gray-50/50">
        <div className="flex items-center justify-between">
          <div>
            <CardTitle className="text-3xl font-black font-display uppercase tracking-tight">{checklist.name}</CardTitle>
            <CardDescription className="mt-2 text-lg font-medium text-gray-600">
              {completedCount} of {totalCount} completed
            </CardDescription>
          </div>
          <div className="text-right">
            <div className="text-4xl font-black">{Math.round(progressPercent)}%</div>
            <div className="text-base font-bold text-muted-foreground">Complete</div>
          </div>
        </div>
        <div className="mt-6">
          <Progress value={progressPercent} className="h-4 border-2 border-black bg-white" indicatorClassName="bg-[#70e000] border-r-2 border-black" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4 pt-6">
        {items.map((item) => (
          <div
            key={item.id}
            className={`flex items-start gap-4 border-2 border-black p-4 transition-all duration-200 cursor-pointer shadow-neo-sm hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-neo-md ${item.completed ? 'bg-gray-100' : 'bg-white'
              }`}
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
              <CheckCircle2 className="h-8 w-8 text-[#70e000] shrink-0 mt-0 fill-black" />
            ) : (
              <Circle className="h-8 w-8 text-gray-300 shrink-0 mt-0" />
            )}
            <div className="flex-1 pt-1">
              <div
                className={`text-lg font-bold leading-relaxed ${item.completed ? 'line-through text-gray-400' : 'text-black'
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
