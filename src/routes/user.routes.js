import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/user.controllers.js";

const router = Router();

//define http request
router.get("/getusers", getUsers);

router.get("/getuser/:id", getUser);

router.post("/createuser", createUser);

router.put("/updateuser/:id", updateUser);

router.delete("/deleteuser/:id", deleteUser);


//export the routers
export default router;

