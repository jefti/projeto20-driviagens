import dayjs from "dayjs";
import { checkDestinyDB, createCityDB, createFlightDB, checkCityDB } from "../repositories/trip.repository.js";
import { conflictError } from "../errors/conflict.error.js";
import { internalServerError } from "../errors/internalServerError.js";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { unprocessableEntityError } from "../errors/unprocessableEntity.error.js";
import { notFoundError } from "../errors/notFound.error.js";

dayjs.extend(customParseFormat);

async function createCity(name){
    const checkDuplicate = await checkCityDB(name);
    if(checkDuplicate.length > 0) throw conflictError("Cidade");

    const createdObject = await createCityDB(name);
    console.log(createdObject.id);
    if(!createdObject.id) throw internalServerError("no momento de cadastrar o passageiro no banco");
    
    return `Cidade ${name} criada com sucesso! id: ${createdObject.id}.`;
}

function ValidateDate(date){
    const day = date.slice(0,2);
    const month = date.slice(3,5);
    const year = date.slice(6,10);
    const formattedDate = `${year}-${month}-${day}`;
    const validate = dayjs(formattedDate, 'YYYY-MM-DD', true).isValid();
    if(!validate) throw unprocessableEntityError("A data informada");
    if (dayjs().isAfter(formattedDate)) throw unprocessableEntityError("A data informada"); ;
    return formattedDate;
}

async function validateDestiny(origin, destination){
    if(origin === destination) throw unprocessableEntityError("A origem/destino informado");
    
    const originInformation = await checkDestinyDB(origin);
    if(originInformation.length === 0) throw notFoundError("Cidade de origem");
    
    const destinyInformation = await checkDestinyDB(destination);
    if(destinyInformation.length === 0) throw notFoundError("Cidade de Destino");
}
async function createFlight(origin, destination,date){
    const id = await createFlightDB(origin, destination,date);
    if(!id) throw internalServerError("no momento de cadastrar o voo no banco");
    return `Voo ${id} criada com sucesso.`;
}

export const tripServices = {createCity,ValidateDate,validateDestiny, createFlight};