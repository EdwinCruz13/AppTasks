import { Router } from "express";
import path from "path";

import {
  getUsers,
  getUser,
  createUser,
  updateUser,
  deleteUser,
} from "../controllers/user.controllers.js";
import { Login, Logout, VerifyToken } from "../controllers/auth.controllers.js";

//import access athorization middleware
import { UserAuth, AdminAuth } from "../middleware/auth.validate.middleware.js";

const router = Router();

/////////////////////////////////////////////////////
/**craete a files storage  */
import multer from "multer";
var storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads");
  },
  filename: (req, file, cb) => {
    console.log(file)
    cb(null, Date.Now() + "-" + path.extname(file.originalname));
  },
});
var upload = multer({ storage: storage });
//////////////////////////////////////////////////////

//define http request
router.post("/login", Login);

router.post("/logout", Logout);

router.get("/verifytoken", VerifyToken);

router.get("/getusers", UserAuth, getUsers);

router.get("/getuser/:id", UserAuth, getUser);

router.post("/createuser", upload.single("ImgProfile"), createUser);

router.put("/updateuser/:id", AdminAuth, updateUser);

router.delete("/deleteuser/:id", AdminAuth, deleteUser);

//export the routers
export default router;
