
import { Event, EventDto } from "./event";
import IEventRepository from "./event-repository.interface";
import { injectable, inject } from 'tsyringe';



@injectable()
export default class EventService {
    constructor(
        @inject('IEventRepository') private readonly _eventRepo: IEventRepository
    ) {
    }




    async getAllEvents() {
        return await this._eventRepo.getAllEvent();
    }




    async createEvent(
        name: string,
        description: string,
        date: string,
        startTime: string,
        endTime: string,
        venueId: string
    ) {


        const event: EventDto = {
            name: name,
            description: description,
            date: date,
            startTime: startTime,
            endTime: endTime,
            venueId: venueId,
        };

        return await this._eventRepo.create(event);
    }

    async getEventById(id: string) {
        try {

            var event = await this._eventRepo.getEventById(id);
            if (!event) {
                throw new Error("event not found id " + id);
            }

            return event;
        }
        catch (error) {

        }
    }

    async deleteEvent(id: string) {

        try {

            var event = await this._eventRepo.getEventById(id);
            if (!event) {
                throw new Error("event not found id " + id);
            }

            this._eventRepo.delete(id);
        }
        catch (error) {


        }

    }

    async updateEvent(

        id: string,
        eventName: string,
        description: string,
        eventDate: Date,
        startTime: string,
        endTime: string,
    ) {

        try {


            var event = await this._eventRepo.getEventById(id);
            if (!event) {
                throw new Error("event not found id " + id);
            }

            const mappedObject = Object.assign({}, event, {

                eventName: eventName,
                description: description,
                eventDate: eventDate,
                startTime: startTime,
                endTime: endTime

            });

            await this._eventRepo.update(mappedObject, id);
        }
        catch (error) {

        }

    }


}