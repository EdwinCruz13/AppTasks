import { Router } from "express";
import { getStates, getState, createState, updateState, deleteState  } from "../controllers/state.controllers.js";

//create a router for State http request
const router = Router();

router.get("/getStates", getStates);
router.get("/getState/:id", getState);
router.post("/createState", createState);
router.put("/updateState/:id", updateState);
router.delete("/deleteState/:id", deleteState);


export default router;