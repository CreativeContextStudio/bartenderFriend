// Client-side progress tracking using localStorage
// This replaces database progress tracking for Phase 1

const STORAGE_KEY = 'bartender-friend-progress';
const USER_ID = 'local-user-1';

export interface ProgressEvent {
  id: string;
  userId: string;
  eventType: 'quiz_attempt' | 'recipe_completed' | 'checklist_completed' | 'study_session';
  targetType: string;
  targetId: string;
  score?: number;
  data?: any;
  createdAt: string;
}

export function getProgressEvents(): ProgressEvent[] {
  if (typeof window === 'undefined') return [];
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return JSON.parse(stored);
  } catch {
    return [];
  }
}

export function saveProgressEvent(
  eventType: ProgressEvent['eventType'],
  targetType: string,
  targetId: string,
  score?: number,
  data?: any
): ProgressEvent {
  const event: ProgressEvent = {
    id: `event-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`,
    userId: USER_ID,
    eventType,
    targetType,
    targetId,
    score,
    data,
    createdAt: new Date().toISOString(),
  };

  const events = getProgressEvents();
  events.push(event);
  localStorage.setItem(STORAGE_KEY, JSON.stringify(events));
  
  return event;
}

export function getStreakDays(): number {
  const events = getProgressEvents();
  if (events.length === 0) return 0;

  // Get unique dates from events
  const dates = new Set(
    events.map(e => new Date(e.createdAt).toDateString())
  );

  return dates.size;
}

export function getRecipesPracticedLast7Days(): string[] {
  const events = getProgressEvents();
  const sevenDaysAgo = new Date();
  sevenDaysAgo.setDate(sevenDaysAgo.getDate() - 7);

  return events
    .filter(e => 
      e.eventType === 'recipe_completed' &&
      new Date(e.createdAt) > sevenDaysAgo
    )
    .map(e => e.targetId);
}

export function getQuizScores(): Array<{ quizType: string; score: number; date: string }> {
  const events = getProgressEvents();
  
  return events
    .filter(e => e.eventType === 'quiz_attempt' && e.score !== undefined)
    .map(e => ({
      quizType: e.targetType,
      score: e.score!,
      date: e.createdAt,
    }));
}

export function clearProgress(): void {
  if (typeof window !== 'undefined') {
    localStorage.removeItem(STORAGE_KEY);
  }
}
