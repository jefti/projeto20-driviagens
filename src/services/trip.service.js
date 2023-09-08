import dayjs from "dayjs";
import { checkDestinyDB, createCityDB, createFlightDB, checkCityDB, selectFlightsDB } from "../repositories/trip.repository.js";
import { conflictError } from "../errors/conflict.error.js";
import { internalServerError } from "../errors/internalServerError.js";
import customParseFormat from 'dayjs/plugin/customParseFormat.js';
import { unprocessableEntityError } from "../errors/unprocessableEntity.error.js";
import { notFoundError } from "../errors/notFound.error.js";
import { badRequestError } from "../errors/badRequest.error.js";

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

async function selectFlights(origin,destination,biggerDate,smallerDate, page){
    if((biggerDate && !smallerDate)||(!biggerDate && smallerDate)) throw unprocessableEntityError("Informar apenas um filtro de data");
    let filtros = {};
    if(biggerDate && smallerDate ) filtros = validateFilters(biggerDate,smallerDate);
    const select = await selectFlightsDB(origin,destination,filtros,page);
    const flights = select.map((e)=>{return formatResponse(e)});
    return flights;
}

function validateFilters(biggerDate,smallerDate){

    const Bday = biggerDate.slice(0,2);
    const Bmonth = biggerDate.slice(3,5);
    const Byear = biggerDate.slice(6,10);
    const formattedBigDate = `${Byear}-${Bmonth}-${Bday}`;
    const BDvalidate = dayjs(formattedBigDate, 'YYYY-MM-DD', true).isValid();
    if(!BDvalidate) throw unprocessableEntityError("A BiggerDate informada");

    const Sday = smallerDate.slice(0,2);
    const Smonth = smallerDate.slice(3,5);
    const Syear = smallerDate.slice(6,10);
    const formattedSmallDate = `${Syear}-${Smonth}-${Sday}`;
    const SDvalidate = dayjs(formattedSmallDate, 'YYYY-MM-DD', true).isValid();
    if(!SDvalidate) throw unprocessableEntityError("A SmallDate informada");

    if(dayjs(formattedSmallDate).isAfter(dayjs(formattedBigDate))) throw badRequestError("Small-date posteior ao Big-date");
    return {inicio: formattedSmallDate, fim: formattedBigDate};
}

function formatResponse(obj){
    const dataObj = new Date(obj.date);
    const ano = dataObj.getFullYear();
    const mes = (dataObj.getMonth() + 1).toString().padStart(2, '0');;
    const dia = dataObj.getDate().toString().padStart(2, '0');;

    return ({...obj,date:`${dia}-${mes}-${ano}`});
}
export const tripServices = {createCity,ValidateDate,validateDestiny, createFlight,selectFlights};