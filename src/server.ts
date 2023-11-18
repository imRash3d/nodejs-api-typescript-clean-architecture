
import App from './app';
import 'reflect-metadata';
require('dotenv').config();
import { container } from 'tsyringe';

import EventController from './api/event/event.controller';
import EventRepository from './api/event/event.repository';
import MongoDatabaseManager from './db/mongodb';




require('dotenv').config();

// register depdency 
const { MONGO_URL, MONGO_DATABASE } = process.env;
const databaseUrl = `${MONGO_URL}`;
const dbname = `${MONGO_DATABASE}`;

console.log(dbname);
const mongoDatabaseManager = new MongoDatabaseManager(databaseUrl, dbname)



container.register<MongoDatabaseManager>('DatabaseManager', { useValue: mongoDatabaseManager });

container.register('IEventRepository', { useClass: EventRepository });


const app = new App(
    3000,
    [container.resolve(EventController)],
    mongoDatabaseManager
);


app.listen();

process.on('SIGINT', async () => {
    //  await app.closeDatabaseConnection();
});

process.on('SIGTERM', async () => {
    // await app.closeDatabaseConnection();
});


