import { Router } from "express";
import { clientController } from "../controllers/client.controller.js";
import { validateSchema } from "../middlewares/schemaValidate.middleware.js";
import { passengerSchema } from "../schemas/passenger.schema.js";

const clientRouter = Router();

clientRouter.post("/passengers",validateSchema(passengerSchema),clientController.registerPassenger);

export default clientRouter;