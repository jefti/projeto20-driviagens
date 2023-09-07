import joi from "joi";

export const flightSchema= joi.object({
    origin: joi.number().integer().min(1).required(),
	destination: joi.number().integer().min(1).required(),
	date: joi.string().regex(/^\d{2}-\d{2}-\d{4}$/).required()
});