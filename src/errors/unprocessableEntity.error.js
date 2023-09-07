import httpStatus from "http-status";

export function unprocessableEntityError(entity="A entidade informada"){
    return {type:httpStatus.UNPROCESSABLE_ENTITY, message:`${entity} não é válido(a).`};
}