import TaskModel from "../models/task.models.js";
import UserModel from "../models/user.models.js";

/**
 * get all tasks saved on mongo database
 * return a list of object
 * @param {*} req 
 * @param {*} resp 
 * @returns tasks
 */
export const getTasks = async(req, resp) =>{
    try {
        //get the list from mongoose database
        const tasks = await TaskModel.find().populate("User");

        return resp.status(200).json(tasks);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * get an especific task from mongo database
 * return a object
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const getTask = async(req, resp) =>{
    try {
        //get the list from mongoose database
        const task = await TaskModel.findById( req.params.id ).populate("User");

        return resp.status(200).json(task);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * create a new task
 * @param {*} req 
 * @param {*} resp 
 */
export const createTask = async(req, resp) => {
    //get the main properties
    const { Title, Description, DateAt, User } = req.body;

    //find the user
    const userFound = await UserModel.findById( User.Id );
    

    try {
        //create a new task
        const newTask = await TaskModel({
            Title, Description, DateAt, User: userFound
        });
        await newTask.save();

        //return a task
        return resp.status(200).json(newTask);

    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * update an especific task from mongoose database
 * return the updated task
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const updateTask = async(req, resp) =>{
    try {
        //get the list from mongoose database
        const updatedTask = await TaskModel.findByIdAndUpdate( req.params.id, req.body, {new: true} );

        if(!updatedTask) return resp.status(404).json({message: "Task not found"});

        return resp.status(200).json(updatedTask);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * delete an especific task from mongoose database
 * return the deleted task
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const deleteTask = async(req, resp) =>{
    try {
        //get the list from mongoose database
        const deletedTask = await TaskModel.findByIdAndDelete( req.params.id);

        if(!deletedTask) return resp.status(404).json({message: "Task not found"});

        return resp.status(200).json(deletedTask);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}