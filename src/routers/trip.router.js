import { Router } from "express";
import { validateSchema } from "../middlewares/schemaValidate.middleware.js";
import { citySchema } from "../schemas/cities.schema.js";
import { tripsController } from "../controllers/trip.controller.js";

const tripRouter = Router();

tripRouter.get("/",(req,res)=>{
    res.send('ping ...');
});
tripRouter.post("/cities",validateSchema(citySchema),tripsController.registerCity)

export default tripRouter;