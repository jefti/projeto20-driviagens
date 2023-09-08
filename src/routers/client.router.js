import { Router } from "express";
import { clientController } from "../controllers/client.controller.js";
import { validateSchema } from "../middlewares/schemaValidate.middleware.js";
import { passengerSchema } from "../schemas/passenger.schema.js";
import { travelSchema } from "../schemas/travels.schema.js";

const clientRouter = Router();

clientRouter.post("/passengers",validateSchema(passengerSchema),clientController.registerPassenger);
clientRouter.post("/travels",validateSchema(travelSchema),clientController.registerTravel);
clientRouter.get("/passengers/travels",clientController.getPassengersTravels)

export default clientRouter;