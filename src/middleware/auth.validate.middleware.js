import jwt from "jsonwebtoken";
import UserModel from "../models/user.models.js";

/**
 * Validate a request by a token given
 * return if false is the user has not authorization
 * for being here
 * @param {*} req 
 * @param {*} resp 
 * @param {*} next 
 */
export const UserAuth = (req, resp, next) => {
    //catch the token from the cookies
    const {token} = req.cookies;

    //validate the cookie
    if(!token) return resp.status(401).json({message: "Unathorized request"});

    //use webtoken in order to verify the cookie
    jwt.verify(token, process.env.WEBTOKEN_SECRET, (err, user) => {
        if(err) return resp.status(403).json({message: "Invalid user"});

        //create an user authenticated
        req.authenticated_user = user;
    });

    next();
}

/**
 * verify if the user is an admin
 * return if the user does have the privilege
 * @param {*} req 
 * @param {*} resp 
 * @param {*} next 
 * @returns 
 */
export const AdminAuth = async(req, resp, next) => {
    //catch the token from the cookies
    const {token} = req.cookies;

    //validate the cookie
    if(!token) return resp.status(401).json({message: "Unathorized request"});

    //use webtoken in order to verify the cookie
    jwt.verify(token, process.env.WEBTOKEN_SECRET, (err, user) => {
        if(err) return resp.status(403).json({message: "Invalid user"});

        //create an user authenticated
        req.authenticated_user = user;
    });

    //verify if the user has the admin authentication
    const user = await UserModel.findById({_id: req.authenticated_user.Id});
    if(!user.isAdmin) return resp.status(403).json({message: "Your do not have privilege."});

    next();
}