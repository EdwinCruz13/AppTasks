import { Router } from "express";
import { getTypes, getType, createType, updateType, deleteType  } from "../controllers/task.type.controllers.js";

//import access athorization middleware
import { UserAuth } from "../middleware/auth.validate.middleware.js";

//create a router for Type http request
const router = Router();

router.get("/getTypes", UserAuth, getTypes);
router.get("/getType/:id", UserAuth, getType);
router.post("/createType", UserAuth, createType);
router.put("/updateType/:id", UserAuth, updateType);
router.delete("/deleteType/:id", UserAuth, deleteType);


export default router;