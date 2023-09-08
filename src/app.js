import express from "express";
import "express-async-errors";
import cors from "cors";
import indexRouter from "./routers/index.router.js";
import dotenv from "dotenv";

dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
app.use(indexRouter);

const Port = process.env.PORT || 5000;
app.listen(Port, ()=>{console.log(`Server running in port ${Port}`)});