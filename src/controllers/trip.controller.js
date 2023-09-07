import httpStatus from "http-status";
import { tripServices } from "../services/trip.service.js";

async function registerCity(req,res){
    const {name} = req.body;
    const resposta = await tripServices.createCity(name);
    return res.status(httpStatus.CREATED).send(resposta);
}

export const tripsController = {registerCity};