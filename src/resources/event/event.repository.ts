import Event from "./event";
import { IEventRepository } from "./event-repository.interface";

export class EventRepository implements IEventRepository {
    constructor() {

    }
    create(data: Event): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    update(data: Event): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    delete(eventId: string): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    getAllEvent(): Promise<Event[]> {
        throw new Error("Method not implemented.");
    }
    getEventById(id: string): Promise<Event> {
        throw new Error("Method not implemented.");
    }

}