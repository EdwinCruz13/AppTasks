import { Router } from "express";
import { getStates, getState, createState, updateState, deleteState  } from "../controllers/state.controllers.js";

//import access athorization middleware
import { UserAuth, AdminAuth } from "../middleware/auth.validate.middleware.js";

//create a router for State http request
const router = Router();

router.get("/getStates", UserAuth, getStates);
router.get("/getState/:id", UserAuth, getState);
router.post("/createState", AdminAuth, createState);
router.put("/updateState/:id", AdminAuth, updateState);
router.delete("/deleteState/:id", AdminAuth, deleteState);


export default router;