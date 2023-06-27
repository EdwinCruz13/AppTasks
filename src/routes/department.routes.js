import { Router } from "express";
import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment  } from "../controllers/department.controllers.js";

//import access athorization middleware
import { UserAuth, AdminAuth } from "../middleware/auth.validate.middleware.js";

//create a router for department http request
const router = Router();

router.get("/getDepartments", UserAuth, getDepartments);
router.get("/getDepartment/:id", UserAuth, getDepartment);
router.post("/createDepartment", AdminAuth, createDepartment);
router.put("/updateDepartment/:id", AdminAuth, updateDepartment);
router.delete("/deleteDepartment/:id", AdminAuth, deleteDepartment);


export default router;