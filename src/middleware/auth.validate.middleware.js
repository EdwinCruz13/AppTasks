import jwt from "jsonwebtoken";

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