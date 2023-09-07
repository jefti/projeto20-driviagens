import { conflictError } from "../errors/conflict.error.js";
import { internalServerError } from "../errors/internalServerError.js";
import { checkCityDB, createCityDB } from "../repositories/trip.repository.js";

async function createCity(name){
    const checkDuplicate = await checkCityDB(name);
    if(checkDuplicate.length > 0) throw conflictError("Cidade");

    const id = await createCityDB(name);
    if(!id) throw internalServerError("no momento de cadastrar o passageiro no banco");
    
    return `Cidade ${name} criada com sucesso! id: ${id}.`;
}

export const tripServices = {createCity};