import axios from "./axios.instance";

/**
 * 
 * @param {*} user 
 * @returns 
 */
export const LoginRequest = async(user) => {
    try {
        const response = await axios.post(`users/login`, user);
        return response;
    } catch (error) {
        return error.response;
    }
}

export const LogoutRequest = async(token) => {
    try {
        const response = await axios.post(`users/logout`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export const VerifyTokenRequest = async(token) => {
    try {
        const response = await axios.get(`users/verifytoken`, token);
        return response;
    } catch (error) {
        return error.response;
    }
}



/**
 * create a class that makes an request by axios library
 */
// export class AxiosRequest
// {   
//     Instance; 
//     Endpoint; 
//     Method;
//     Url = "http://localhost:4000/api/"
//     axiosConfig = { headers: { "Content-Type": "application/json"} };


//     /**
//      * create a instance of class according the value of endpoint
//      * @param {*} _endpoint 
//      */
//     constructor(_endpoint, _method)
//     {
        
//         this.Endpoint = _endpoint;
//         this.Method = _method;

//         this.Url = this.Url + _endpoint
//         this.CreateInstance();
//     }

//     /**
//      * private method that create the axios request
//      */
//     CreateInstance()
//     {
        
//          this.Instance = axios.create({
//             baseURL: this.Url,
//             withCredentials: true,
//             //headers: this.axiosConfig
//         });
//     }

//     /**
//      * send a request using the verb post
//      * @param {*} _body 
//      * @returns 
//      */
//     async PostRequest(_body)
//     {
//         try {
//             const response = await this.Instance.post(`${this.Method}`, _body);
//             return response;
//         } catch (error) {
//             return error.response;
//         }
//     }

//     async GetRequest(_body)
//     {
//         try {
//             const response = await this.Instance.get(`${this.Method}`, _body);
//             return response;
//         } catch (error) {
//             return error.response;
//         }
//     }
// }