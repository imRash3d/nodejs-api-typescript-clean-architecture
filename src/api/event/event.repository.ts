import { Collection, MongoClient } from "mongodb";
import MongoDatabaseManager from "../../db/mongodb";
import IEventRepository from "./event-repository.interface";

import { inject, injectable } from "tsyringe";
import { Event } from "./event";
import { Filter } from "utils/model/query-filter";


@injectable()

export default class EventRepository implements IEventRepository {


    // private collection;

    constructor(@inject('DatabaseManager') private readonly mongoClient: MongoDatabaseManager) {

    }


    private get collection(): Collection<Event> {
        const db = this.mongoClient.getDb();
        return db.collection<Event>('events');
    }
    async create(data: Event): Promise<Event> {


        try {
            const result = await this.collection.insertOne(data);
            const response = { ...data, id: result.insertedId.toString() };
            if (!result.acknowledged) {
                throw new Error("Failed to create Event ");
            }
            return response;
        }
        catch (error) {

            throw new Error("Failed to create Event ");
        }
    }
    update(data: Event): Promise<Event> {
        throw new Error("Method not implemented.");
    }
    delete(eventId: string): Promise<boolean | null> {
        throw new Error("Method not implemented.");
    }
    getAllEvent(query?: Filter<Event>): Promise<Event[]> {

        if (query) {
            return this.collection.find(query).toArray();
        }
        return this.collection.find().toArray();

    }
    getEventById(id: string): Promise<Event> {
        throw new Error("Method not implemented.");
    }

}