

import { WithId } from 'mongodb';
import * as z from 'zod';

export const EventRequest = z.object({
    name: z.string().min(1),
    description: z.string().min(1),
    date: z.string().datetime(),
    startTime: z.string().min(1),
    endTime: z.string().min(1),
    venueId: z.string().min(1),

})

export type EventDto = z.infer<typeof EventRequest>;

export type Event = EventDto & { id: string };





