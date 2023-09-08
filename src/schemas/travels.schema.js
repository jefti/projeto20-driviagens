import joi from "joi";

export const travelSchema = joi.object({
	passengerId: joi.number().integer().positive().required(),
	flightId: joi.number().integer().positive().required()    
});