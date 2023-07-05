import { Router } from "express";
import { getUsers, getUser, createUser, updateUser, deleteUser } from "../controllers/user.controllers.js";
import { Login, Logout, VerifyToken } from "../controllers/auth.controllers.js";

//import access athorization middleware
import { UserAuth, AdminAuth } from "../middleware/auth.validate.middleware.js";

const router = Router();

//define http request
router.post("/login", Login);

router.post("/logout", Logout);

router.get("/verifytoken", VerifyToken)

router.get("/getusers", UserAuth, getUsers);

router.get("/getuser/:id", UserAuth, getUser);

router.post("/createuser", AdminAuth, createUser);

router.put("/updateuser/:id", AdminAuth, updateUser);

router.delete("/deleteuser/:id", AdminAuth, deleteUser);


//export the routers
export default router;

