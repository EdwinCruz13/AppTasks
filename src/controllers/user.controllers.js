import UserModel from "../models/user.models.js";


/**
 * list of users created 
 * returnd the list of user on mongoDB
 * @param {*} req 
 * @param {*} resp 
 */
export const list = async(req, resp) => {
    try {
        //get all users created by mongoDB
        const users = await UserModel.find();

        //return the list
        return resp.status(200).json(users);
    } catch (error) {
        resp.status(400).json("message: " + error);
    }
}