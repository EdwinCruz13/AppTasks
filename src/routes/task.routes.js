import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/task.controllers.js"

//define a new router
const router = Router();


//create http path request
router.get("/getTasks", getTasks);

router.get("/getTask/:id", getTask);

router.post("/createTask", createTask);

router.put("/updateTask/:id", updateTask);

router.delete("/deleteTask/:id", deleteTask);



export default router;