import { Router } from "express";
import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment  } from "../controllers/department.controllers.js";

//import access athorization middleware
import { UserAuth } from "../middleware/auth.validate.middleware.js";

//create a router for department http request
const router = Router();

router.get("/getDepartments", UserAuth, getDepartments);
router.get("/getDepartment/:id", UserAuth, getDepartment);
router.post("/createDepartment", UserAuth, createDepartment);
router.put("/updateDepartment/:id", UserAuth, updateDepartment);
router.delete("/deleteDepartment/:id", UserAuth, deleteDepartment);


export default router;