import bcryptjs  from "bcryptjs";
import { GenerateToken } from "../config/web.token.js";

import UserModel from "../models/user.models.js";


/**
 * this method verify the access to the apptasks
 * create a token if the user is identified
 * @param {*} req 
 * @param {*} resp 
 */
export const Login = async(req, resp) => {
    const { Email, Password} = req.body;

    console.log(req.authenticated_user)

    try {
        //find the user by email
        const userFound = await UserModel.findOne({Email});

        //if there is not any result
        if(!userFound) return resp.status(401).json({ message: "Incorrect email."})

        //encode the password
        const isMatched = await bcryptjs.compare(Password, userFound.Password);
        //if there is not matches, return wrong message
        if(!isMatched) return resp.status(401).json({message: "Incorrect password."});

        //create a token
        const token = await GenerateToken({Id: userFound._id, isAdmin: userFound.isAdmin});

        //create a cookie
        resp.cookie("token", token);

        //return the user found in mongo db
        return resp.status(200).json({
            id: userFound._id,
            Username: userFound.Username,
            Email: userFound.Username,
            isAdmin: userFound.isAdmin,
            Department: userFound.Department
        });

    } catch (error) {
        resp.status(500).json({message: "error: " + error});
    }

}

/**
 * 
 * @param {*} req 
 * @param {*} resp 
 * @returns 
 */
export const Logout = async(req, resp) => {
    resp.cookie("token", "", { expires: new Date(0)});

    return resp.sendStatus(200);
}