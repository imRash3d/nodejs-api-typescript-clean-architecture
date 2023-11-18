import { Db, MongoClient } from "mongodb";
import { injectable } from "tsyringe";



@injectable()
export default class MongoDatabaseManager {


    private static instance: MongoDatabaseManager;
    private client: MongoClient;
    private db!: Db;

    constructor(private readonly databaseUrl: string, private readonly dbName: string) {
        this.client = new MongoClient(this.databaseUrl);
    }


    public static getInstance(url: string, dbName: string): MongoDatabaseManager {
        if (!MongoDatabaseManager.instance) {
            MongoDatabaseManager.instance = new MongoDatabaseManager(url, dbName);
        }
        return MongoDatabaseManager.instance;
    }


    public async connect(): Promise<void> {
        await this.client.connect();
        this.db = this.client.db(this.dbName);
    }

    public async disconnect(): Promise<void> {
        await this.client.close();
    }

    public getDb(): Db {
        if (!this.db) {
            throw new Error('Database connection not established. Call connect method first.');
        }
        return this.db;
    }
}