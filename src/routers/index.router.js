import { Router } from "express";
import tripRouter from "./trip.router.js";

const indexRouter = Router();
indexRouter.use(tripRouter);

export default indexRouter;