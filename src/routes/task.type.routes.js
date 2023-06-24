import { Router } from "express";
import { getTypes, getType, createType, updateType, deleteType  } from "../controllers/task.type.controllers.js";

//create a router for Type http request
const router = Router();

router.get("/getTypes", getTypes);
router.get("/getType/:id", getType);
router.post("/createType", createType);
router.put("/updateType/:id", updateType);
router.delete("/deleteType/:id", deleteType);


export default router;