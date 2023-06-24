import UserModel from "../models/user.models.js";
import DeparmentModel from "../models/department.models.js";


/**
 * list of users created 
 * returnd the list of user on mongoDB
 * @param {*} req 
 * @param {*} resp 
 */
export const getUsers = async(req, resp) => {
    try {
        //get all users created by mongoDB
        const users = await UserModel.find().populate("Department");

        //return the list
        return resp.status(200).json(users);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * get an user´s information
 * by id
 * @param {*} req 
 * @param {*} resp 
 */
export const getUser = async(req, resp) => {
    
    try {
        const user = await UserModel.findById(req.params.id).populate("Department");;

        //return an user
        return resp.status(200).json(user);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}


/**
 * create a new user by post request
 * after recieve params, it will save to database
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const createUser = async(req, resp) => {
    const { Email, Username, Password, Department, isAdmin } = req.body;
    try {

        //find the department
        const deparmentFound = await DeparmentModel.findById( Department.Id )


        const newUser = await UserModel({
            Email, Username, Password, isAdmin, Department: deparmentFound
        });
        await newUser.save();

        //return an user
        return resp.status(200).json(newUser);
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * update a user by put request
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const updateUser = async(req, resp) => {
    const { Email, Username, Password, isAdmin, Department } = req.body;

    try {

        //find the department
        const deparmentFound = await DeparmentModel.findById( Department.Id )

        //find by id and update
        const updateUser = await UserModel.findByIdAndUpdate(req.params.id, { Email, Username, Password, isAdmin, Department: deparmentFound  } ,  {new: true});

        //if the user does not exists send a error message as bad request
        if(!updateUser) return resp.status(404).json({message: "User not found"});

        //return the data updated
        return resp.status(200).json(updateUser);
        
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}

/**
 * delete a user by a delete request 
 * 
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const deleteUser = async(req, resp) => {
    try {
        const deletedUser = await UserModel.findByIdAndDelete(req.params.id);

        //if the user does not exists send a error message as bad request
        if(!deletedUser) return resp.status(404).json({message: "User not found"});

        //return the data updated
        return resp.status(200).json(deletedUser);
        
    } catch (error) {
        resp.status(400).json({message: "error: " + error});
    }
}