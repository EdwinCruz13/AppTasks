import { Router } from "express";
import { getDepartments, getDepartment, createDepartment, updateDepartment, deleteDepartment  } from "../controllers/department.controllers.js";

//create a router for department http request
const router = Router();

router.get("/getDepartments", getDepartments);
router.get("/getDepartment/:id", getDepartment);
router.post("/createDepartment", createDepartment);
router.put("/updateDepartment/:id", updateDepartment);
router.delete("/deleteDepartment/:id", deleteDepartment);


export default router;