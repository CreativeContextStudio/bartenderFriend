import { NextRequest, NextResponse } from 'next/server';
import { recordProgressEvent } from '@/lib/queries';

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { eventType, targetType, targetId, score, data } = body;

    if (!eventType || !targetType || !targetId) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const result = await recordProgressEvent(
      eventType,
      targetType,
      targetId,
      score,
      data
    );

    return NextResponse.json({ success: true, data: result });
  } catch (error) {
    console.error('Error recording progress:', error);
    return NextResponse.json(
      { error: 'Failed to record progress' },
      { status: 500 }
    );
  }
}
