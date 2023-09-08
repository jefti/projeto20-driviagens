import httpStatus from "http-status";

export async function errorHandler(error, req, res, next){
    console.log(error);
    if(error.type === httpStatus.CONFLICT) {
        return res.status(httpStatus.CONFLICT).send(error.message);
    }
    if (error.type === httpStatus.NOT_FOUND) {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    if (error.type === httpStatus.UNPROCESSABLE_ENTITY) {
        return res.status(httpStatus.UNPROCESSABLE_ENTITY).send(error.message);
    }
    if (error.type === httpStatus.NOT_FOUND) {
        return res.status(httpStatus.NOT_FOUND).send(error.message);
    }
    if (error.type === httpStatus.BAD_REQUEST) {
        return res.status(httpStatus.BAD_REQUEST).send(error.message);
    }
    return res.status(httpStatus.INTERNAL_SERVER_ERROR).send("Sorry, something went wrong");
}