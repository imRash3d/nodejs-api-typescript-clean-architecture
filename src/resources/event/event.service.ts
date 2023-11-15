import Event from "./event";
import { IEventRepository } from "./event-repository.interface";



export class EventService {
    constructor(private readonly eventRepo: IEventRepository) {

    }



    async getAllEvents() {
        return await this.eventRepo.getAllEvent();
    }



    async createEvent(

        eventName: string,
        description: string,
        eventDate: Date,
        startTime: string,
        endTime: string,
        venueId: string
    ) {
        const event = new Event(
            "randmom_id",
            eventName,
            description,
            eventDate,
            startTime,
            endTime,
            venueId

        );
        return await this.eventRepo.create(event);
    }

    async getEventById(id: string) {
        try {

            var event = await this.eventRepo.getEventById(id);
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

            var event = await this.eventRepo.getEventById(id);
            if (!event) {
                throw new Error("event not found id " + id);
            }

            this.eventRepo.delete(id);
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


            var event = await this.eventRepo.getEventById(id);
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

            this.eventRepo.update(mappedObject);
        }
        catch (error) {

        }

    }


}