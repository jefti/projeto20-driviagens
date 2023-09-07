import httpStatus from "http-status";
import { tripServices } from "../services/trip.service.js";

async function registerCity(req,res){
    const {name} = req.body;
    const resposta = await tripServices.createCity(name);
    return res.status(httpStatus.CREATED).send(resposta);
}

async function registerFlight(req,res){
    const {origin, destination, date} = req.body;

    await tripServices.validateDestiny(origin, destination);
    const formatedDate = tripServices.ValidateDate(date);
    const resp = await tripServices.createFlight(origin, destination, formatedDate);
    return res.send(resp).status(201);
}

export const tripsController = {registerCity,registerFlight};