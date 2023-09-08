import httpStatus from "http-status";

export function badRequestError(context){
    return {type: httpStatus.BAD_REQUEST,message:`${context} não é uma requisição válida.` }
}