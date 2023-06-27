import { Router } from "express";
import { getStates, getState, createState, updateState, deleteState  } from "../controllers/state.controllers.js";

//import access athorization middleware
import { UserAuth } from "../middleware/auth.validate.middleware.js";

//create a router for State http request
const router = Router();

router.get("/getStates", UserAuth, getStates);
router.get("/getState/:id", UserAuth, getState);
router.post("/createState", UserAuth, createState);
router.put("/updateState/:id", UserAuth, updateState);
router.delete("/deleteState/:id", UserAuth, deleteState);


export default router;