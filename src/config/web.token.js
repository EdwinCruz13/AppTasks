import jwt from "jsonwebtoken";

/**
 * Generate a token by jsonwebtoken module
 * return a cookie with a string token
 * @param {*} payload 
 */
export function GenerateToken(payload)
{
    //return the new promise, if it ok, return the token
    return new Promise((resolve, reject) => {
        jwt.sign(
            payload, 
            process.env.WEBTOKEN_SECRET, 
            { expiresIn: "1h"}, 
            (err, token) => {
                if(err) 
                    reject(err)

                resolve(token);
            }
        );
    });
}