import { Router } from "express";
import { list } from "../controllers/user.controllers.js";

const router = Router();

//define http request
router.get("/list", list);


//export the routers
export default router;

