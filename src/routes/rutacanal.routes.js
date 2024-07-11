import { Router } from "express";

const rutacanal = Router();


rutacanal.get("/", (req,res)=>{
    res.json({
        "application": "YouTube"
    })
});

rutacanal.get("/canal", (req,res)=>{
    res.json({
        "msg": "Hola Mundo",
        "user": "Paulina",
        "application": "YouTube",
        "type": "Backend"
    })
});

export default rutacanal;