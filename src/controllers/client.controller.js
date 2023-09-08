import httpStatus from "http-status";
import { clientServices } from "../services/client.service.js";

async function registerPassenger(req,res){
    const {firstName, lastName} = req.body;
    const resposta = await clientServices.createClient(firstName, lastName);
    return res.status(httpStatus.CREATED).send(resposta);
}

async function registerTravel(req,res){
    const {passengerId,flightId} = req.body;
    const mensagem = await clientServices.createTravel(passengerId,flightId);
    return res.status(httpStatus.CREATED).send(mensagem);
}

async function getPassengersTravels(req,res){
    const {name} = req.query;
    const respList = await clientServices.selectPassengersTravels(name);
    return res.send(respList);
}

export const clientController = {registerPassenger,registerTravel,getPassengersTravels};