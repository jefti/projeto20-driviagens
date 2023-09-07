import { Router } from "express";
import tripRouter from "./trip.router.js";
import clientRouter from "./client.router.js";
import { errorHandler } from "../middlewares/error.middleware.js";

const indexRouter = Router();
indexRouter.use(tripRouter);
indexRouter.use(clientRouter);
indexRouter.use(errorHandler)

export default indexRouter;