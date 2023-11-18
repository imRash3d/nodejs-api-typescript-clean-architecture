import { NextFunction, Router, Request, Response } from "express";
import Icontroller from "utils/interfaces/controller.interface";
import EventService from "./event.service";
import { autoInjectable, inject, injectable } from "tsyringe";
import { EventRequest } from "./event";
import { ZodError } from "zod";
import CopmmandResponse from "../../utils/model/command-response";
import QueryResponse, { QueryResult } from "../../utils/model/query-response";




@injectable()

export default class EventController implements Icontroller {
    path = '/event';
    router = Router();


    constructor(private readonly eventService: EventService) {

        this.initialiseRoutes()
    }
    private initialiseRoutes(): void {
        this.router.post(`${this.path}`, this.createEvent); // create event 
        this.router.get(`${this.path}`, this.getAllEvent); // fetch event  
    }





    private createEvent = async (
        req: Request,
        res: Response,
        next: NextFunction): Promise<Response | void> => {
        try {


            const validateReq = await EventRequest.parse(req.body);
            const { name, description, date, startTime, endTime, venueId, } = validateReq;

            const event = await this.eventService.createEvent(
                name,
                description,
                date,
                startTime,
                endTime,
                venueId
            );

            res.status(201);

            const resposne = new QueryResponse(new QueryResult([event], 1));
            res.json(resposne)
        }

        catch (error) {

            if (error instanceof ZodError) {
                res.status(422);
            }

            throw new Error("failed to create event  " + error);

        }
        next();


    }
    private getAllEvent = async (
        req: Request,
        res: Response,
        next: NextFunction): Promise<Response | void> => {
        try {


            var data = await this.eventService.getAllEvents();
            console.log('c')

            const result = new QueryResponse(new QueryResult(data, data.length));
            res.status(200).json(result)

        }

        catch (error) {
            throw new Error("failed to fetch event  " + error);

        }
        next();

    }





}

