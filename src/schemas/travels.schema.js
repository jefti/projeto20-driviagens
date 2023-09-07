import joi from "joi";

export const travelSchema = joi.object({
	passengerId: joi.integer().required(),
	flightId: joi.integer().required()    
});