import TaskTypeModel from "../models/task.type.models.js";

/**
 * get Types saved on mongoose databaase
 * return a list of objects
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getTypes = async(req, resp) => {
    try {
        const Types = await TaskTypeModel.find();

        return resp.status(200).json(Types);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * get a Type saved on mongoose databaase
 * return an objects
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getType = async(req, resp) => {
    try {
        const Type = await TaskTypeModel.findById(req.params.id);

        return resp.status(200).json(Type);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * create a new Type to mongoose database
 * return the new Type
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const createType = async(req, resp) => {
    const { nType } = req.body;
    try {
        const newType = await TaskTypeModel({ nType });
        await newType.save();

        return resp.status(200).json(newType);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * update an specific Type from mongoose database
 * return the updated Type as response
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const updateType = async(req, resp) => {
    try {
        const updatedType = await TaskTypeModel.findByIdAndUpdate(req.params.id, req.body, { new: true});
        if(!updatedType) return resp.status(400).json({error: "Type not found"})

        return resp.status(200).json(updatedType);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}

/**
 * delete an specific Type from mongoose database
 * return the deleted Type as response
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const deleteType = async(req, resp) => {
    try {
        const deletedType = await TaskTypeModel.findByIdAndDelete(req.params.id, req.body, { new: true});
        if(!deletedType) return resp.status(400).json({error: "Type not found"})

        return resp.status(200).json(deletedType);;
    } catch (error) {
        return resp.status(400).json({error: "error: " + error});
    }
}