import { NextFunction, Router } from "express";
import Icontroller from "utils/interfaces/controller.interface";
import { EventService } from "./event.service";





export class EventController implements Icontroller {
    path = '/event';
    router = Router();


    constructor(private eventService: EventService) {

        this.initialiseRoutes()
    }
    private initialiseRoutes(): void {
        //  this.router.post(`${this.path}`,  this.createEvent); // create event 
        // this.router.get(`${this.path}`, this.getAllEvent); // fetch event  

    }



    private createEvent = async (
        req: Request,
        res: Response,
        next: NextFunction): Promise<Response | void> => {
        try {


        }

        catch (error) {

        }


    }
    private getAllEvent = async (
        req: Request,
        res: Response,
        next: NextFunction): Promise<Response | void> => {
        try {

            this.eventService.getAllEvents();
        }

        catch (error) {

        }


    }





}