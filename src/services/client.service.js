import { checkPassengerDB, createPassengerDB } from "../repositories/client.repository.js";
import { conflictError } from "../errors/conflict.error.js";
import { internalServerError } from "../errors/internalServerError.js";

async function createClient(firstName, lastName){
    const checkDuplicate = await checkPassengerDB(firstName, lastName);
    if(checkDuplicate.length > 0) throw conflictError("Passageiro");
    
    const id = await createPassengerDB(firstName, lastName);
    if(!id) throw internalServerError("no momento de cadastrar o passageiro no banco");
    
    return `Passageiro ${firstName} ${lastName} criado com sucesso! id: ${id}.`;
}

export const clientServices = {createClient};