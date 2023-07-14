import { Router } from "express";
import { getTasks, getTask, createTask, updateTask, deleteTask } from "../controllers/task.controllers.js";

//import access athorization middleware
import { UserAuth, AdminAuth } from "../middleware/auth.validate.middleware.js";

//define a new router
const router = Router();


//create http path request
router.get("/getTasks", UserAuth, getTasks);

router.get("/getTask/:id", getTask);

router.post("/createTask", AdminAuth, createTask);

router.put("/updateTask/:id", UserAuth, updateTask);

router.delete("/deleteTask/:id", AdminAuth, deleteTask);



export default router;