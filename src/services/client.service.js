import { CreateTravelDB, SelectPassengersTravelsDB, checkDuplicateTravel, checkFlightExists, checkPassengerDB, checkPassengerExists, createPassengerDB } from "../repositories/client.repository.js";
import { conflictError } from "../errors/conflict.error.js";
import { internalServerError } from "../errors/internalServerError.js";
import { notFoundError } from "../errors/notFound.error.js";
import { badRequestError } from "../errors/badRequest.error.js";

async function createClient(firstName, lastName){
    const checkDuplicate = await checkPassengerDB(firstName, lastName);
    if(checkDuplicate.length > 0) throw conflictError("Passageiro");
    
    const id = await createPassengerDB(firstName, lastName);
    if(!id) throw internalServerError("no momento de cadastrar o passageiro no banco");
    
    return `Passageiro ${firstName} ${lastName} criado com sucesso! id: ${id}.`;
}

async function createTravel(passengerId,flightId){
    const checkPassenger = await checkPassengerExists(passengerId);
        if(!checkPassenger[0]) throw notFoundError("Passageiro");
    const checkFlight = await checkFlightExists(flightId);
        if(!checkFlight[0]) throw notFoundError("Voo");
    const checkDuplicate = await checkDuplicateTravel(passengerId,flightId);
        if(checkDuplicate[0]) throw conflictError("Viagem");
    const createdId = await CreateTravelDB(passengerId,flightId);
    return (`Registro do passageiro ${checkPassenger[0].firstName} ${checkPassenger[0].lastName} no voo ${checkFlight[0].id} realizado com sucesso!`);
}

async function selectPassengersTravels(name,validatedPage){
    const selectList = await SelectPassengersTravelsDB(name,validatedPage);
    return selectList;
}
 function validatePage(page){
    const pageTest = parseInt(page);
    if (isNaN(pageTest) || pageTest <= 0) {
        throw badRequestError("Valor de page informado");
    }
    return pageTest;
}
export const clientServices = {createClient, createTravel,selectPassengersTravels,validatePage};