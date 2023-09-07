import httpStatus from "http-status";

export function conflictError(entity = 'Entidade'){
    return{type:httpStatus.CONFLICT, message:`${entity} já existente.`};
}