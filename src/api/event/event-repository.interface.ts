import { Filter } from "utils/model/query-filter";
import { Event, EventDto } from "./event";


export default interface IEventRepository {

    create(data: EventDto): Promise<Event>;
    update(data: EventDto, id: string): Promise<Event>;
    delete(eventId: string): Promise<boolean | null>;
    getAllEvent(query?: Filter<Event>): Promise<Event[]>; // will be add filter 
    getEventById(id: string): Promise<Event | null>;
}