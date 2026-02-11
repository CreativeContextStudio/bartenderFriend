// Client-side progress tracking using localStorage
// This replaces database progress tracking for Phase 1

const STORAGE_KEY = 'bartender-friend-progress';
const STORAGE_VERSION = 1;
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

interface StorageEnvelope {
  version: number;
  events: ProgressEvent[];
}

function migrateStorage(raw: string): ProgressEvent[] {
  try {
    const parsed = JSON.parse(raw);

    // Already versioned envelope
    if (parsed && typeof parsed === 'object' && 'version' in parsed) {
      const envelope = parsed as StorageEnvelope;
      // Future: add version-specific migrations here
      // if (envelope.version < 2) { ... }
      return envelope.events;
    }

    // Legacy format: bare array of events
    if (Array.isArray(parsed)) {
      // Re-save in envelope format
      writeEvents(parsed);
      return parsed;
    }

    return [];
  } catch {
    return [];
  }
}

function writeEvents(events: ProgressEvent[]): void {
  const envelope: StorageEnvelope = {
    version: STORAGE_VERSION,
    events,
  };
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(envelope));
  } catch (e) {
    if (e instanceof DOMException && e.name === 'QuotaExceededError') {
      // Drop oldest 25% of events to free space, then retry
      const trimmed = events.slice(Math.floor(events.length * 0.25));
      const fallback: StorageEnvelope = { version: STORAGE_VERSION, events: trimmed };
      try {
        localStorage.setItem(STORAGE_KEY, JSON.stringify(fallback));
      } catch {
        // Storage completely full — silently fail rather than crash
      }
    }
  }
}

export function getProgressEvents(): ProgressEvent[] {
  if (typeof window === 'undefined') return [];

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) return [];
    return migrateStorage(stored);
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
  writeEvents(events);

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
