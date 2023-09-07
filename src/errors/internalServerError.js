import httpStatus from "http-status";

export function internalServerError(context){
    return {type:httpStatus.INTERNAL_SERVER_ERROR, message:`Ocorreu um erro inesperado no servidor ${context}.`};
}