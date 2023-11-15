export default class Event {
    eventId: string;
    eventName: string;
    description: string;
    eventDate: Date;
    startTime: string;
    endTime: string;
    venueID: string | null;

    constructor(
        eventId: string,
        eventName: string,
        description: string,
        eventDate: Date,
        startTime: string,
        endTime: string,
        venueId: string

    ) {
        this.eventId = eventId;
        this.eventName = eventName;
        this.description = description;
        this.eventDate = eventDate;
        this.startTime = startTime;
        this.endTime = endTime;
        this.venueID = venueId;
    }

}