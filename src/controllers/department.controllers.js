import DepartmentModel from "../models/department.models.js";

/**
 * get departments saved on mongoose databaase
 * return a list of objects
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getDepartments = async(req, resp) => {
    try {
        const departments = await DepartmentModel.find();

        return resp.status(200).json(departments);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * get a department saved on mongoose databaase
 * return an objects
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getDepartment = async(req, resp) => {
    try {
        const department = await DepartmentModel.findById(req.params.id);

        return resp.status(200).json(department);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * create a new department to mongoose database
 * return the new department
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const createDepartment = async(req, resp) => {
    const { nDepartment } = req.body;
    try {
        const newDepartment = await DepartmentModel({ nDepartment });
        await newDepartment.save();

        return resp.status(200).json(newDepartment);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * update an specific department from mongoose database
 * return the updated department as response
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const updateDepartment = async(req, resp) => {
    try {
        const updatedDepartment = await DepartmentModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!updatedDepartment) return resp.status(400).json({error: "department not found"})

        return resp.status(200).json(updatedDepartment);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * delete an specific department from mongoose database
 * return the deleted department as response
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const deleteDepartment = async(req, resp) => {
    try {
        const deletedDepartment = await DepartmentModel.findByIdAndDelete(req.params.id, req.body, { new: true});
        if(!deletedDepartment) return resp.status(400).json({error: "department not found"})

        return resp.status(200).json(deletedDepartment);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}