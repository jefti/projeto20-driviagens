import joi from "joi";

export const flightSchema= joi.object({
    origin: joi.integer().required(),
	destination: joi.integer().required(),
	date: joi.date().required() //Mudar depois
});