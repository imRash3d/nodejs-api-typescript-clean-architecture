import compression from "compression";
import cors from "cors";
import express, { Application } from "express";
import helmet from "helmet";
import morgan from "morgan";

class App {


    private readonly express: Application;
    private  readonly port: number;

    constructor(port:number){
        this.port = port;
        this.express = express();

        this.initializeMiddleware();
    }


    private databaseConnection(){

    }

    private initializeMiddleware(){
        this.express.use(helmet());
        this.express.use(cors());
        this.express.use(morgan('dev'));
        this.express.use(express.json());
        this.express.use(express.urlencoded({ extended: false }));
        this.express.use(compression());
    }

    private initController(){

    }

    private handleError(){

    }

    public listen(){
        this.express.listen(this.port,()=>{
            console.log(`App listening on the port ${this.port}`);
        })
    }
}

export default App;