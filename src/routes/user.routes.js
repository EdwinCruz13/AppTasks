import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/user.controllers.js";
import { Login, Logout } from "../controllers/auth.controllers.js";

//import access athorization middleware
import { UserAuth } from "../middleware/auth.validate.middleware.js";

const router = Router();

//define http request
router.post("/login", Login);

router.post("/logout", Logout);

router.get("/getusers", UserAuth, getUsers);

router.get("/getuser/:id", UserAuth, getUser);

router.post("/createuser", UserAuth, createUser);

router.put("/updateuser/:id", UserAuth, updateUser);

router.delete("/deleteuser/:id", UserAuth, deleteUser);


//export the routers
export default router;

