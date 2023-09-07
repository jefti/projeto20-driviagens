import httpStatus from "http-status";

export function notFoundError(entity){
    return{type:httpStatus.NOT_FOUND, message:`${entity} não encontrado(a).`};
}