import { Router } from "express";

const tripRouter = Router();

tripRouter.get("/",(req,res)=>{
    res.send('ping ...');
});

export default tripRouter;