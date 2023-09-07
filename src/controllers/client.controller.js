import httpStatus from "http-status";
import { clientServices } from "../services/client.service.js";

async function registerPassenger(req,res){
    const {firstName, lastName} = req.body;
    const resposta = await clientServices.createClient(firstName, lastName);
    return res.status(httpStatus.CREATED).send(resposta);
}

export const clientController = {registerPassenger};