import express , { Application } from "express";
//import cros from 'cros';


class App {
    public express :Application;
    public port:number;

    constructor (controller:Controller[],port:number){
        this.port = port;
        this.express = express();
    }

    
}