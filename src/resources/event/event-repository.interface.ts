import Event from "./event";

export interface IEventRepository {

    create(data:Event):Promise<Event>;
    update(data:Event):Promise<Event>;
    delete(eventId:string):Promise<boolean | null>;
    getAllEvent():Promise<Event[]>; // will be add filter 
    getEventById(id:string):Promise<Event>;
}