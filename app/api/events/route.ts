import { NextResponse } from 'next/server';
import lifeEventsData from './life_events.json';
import { auth } from '@/auth';

interface LifeEvent {
    id: number;
    event: string;
    description: string;
    monetaryValue: number;
}

const events: LifeEvent[] = lifeEventsData as LifeEvent[];

export async function GET(): Promise<NextResponse<LifeEvent | { error: string }>> {
    const session = await auth();

    if (!session) {
        return NextResponse.json({ error: 'Unauthorized: You must be logged in to access this resource.' }, { status: 401 });
    }

    try {
        if (!Array.isArray(events) || events.length === 0) {
            console.error('[API/EVENTS] Error: Life events data is invalid or empty.', events);
            return NextResponse.json({ error: 'Internal Server Error: No events data available' }, { status: 500 });
        }

        const randomIndex = Math.floor(Math.random() * events.length);
        const randomEvent = events[randomIndex];

        if (!randomEvent) {
            console.error('[API/EVENTS] Error: Failed to select a random event, randomIndex may be out of bounds.', { randomIndex, eventsCount: events.length });
            return NextResponse.json({ error: 'Internal Server Error: Could not retrieve event' }, { status: 500 });
        }

        return NextResponse.json(randomEvent);
    } catch (error) {
        console.error('[API/EVENTS] Unhandled error:', error);
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
