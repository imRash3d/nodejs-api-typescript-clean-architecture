import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";
import 'module-alias/register';
import Icontroller from "utils/interfaces/controller.interface";
import MongoDatabaseManager from "./db/mongodb";


class App {


    private readonly express: Application;
    private readonly port: number;

    constructor(
        port: number,
        private readonly controller: Icontroller[],
        private readonly databaseManager: MongoDatabaseManager
    ) {
        this.port = port;
        this.express = express();


        this.initializeMiddleware();
        this.initController(this.controller);

    }

    private async intDatabaseConnection() {
        try {
            await this.databaseManager.connect();

        } catch (error) {
            console.error('Error connecting to MongoDB:', error);
            // Handle connection error as needed
        }
    }
    public closeDatabaseConnection(): void {
        this.databaseManager.disconnect();
        console.log('MongoDB connection closed.');
        process.exit(0);
    }



    private initializeMiddleware() {
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private initController(controllers: Icontroller[]) {

        controllers.forEach(c => {
            this.express.use('/api', c.router)
        })



    }

    private handleError() {

    }

    public listen() {
        this.express.listen(this.port, async () => {
            console.log(`App listening on the port ${this.port}`);
            try {
                await this.intDatabaseConnection();
                console.log('MongoDB connected.');
            } catch (error) {
                console.error('Error connecting to MongoDB:', error);
                process.exit(1); // Exit the server if MongoDB connection fails
            }
        })
    }


}

export default App;