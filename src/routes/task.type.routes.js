import { Router } from "express";
import { getTypes, getType, createType, updateType, deleteType  } from "../controllers/task.type.controllers.js";

//import access athorization middleware
import { UserAuth, AdminAuth } from "../middleware/auth.validate.middleware.js";

//create a router for Type http request
const router = Router();

router.get("/getTypes", UserAuth, getTypes);
router.get("/getType/:id", UserAuth, getType);
router.post("/createType", AdminAuth, createType);
router.put("/updateType/:id", AdminAuth, updateType);
router.delete("/deleteType/:id", AdminAuth, deleteType);


export default router;