import axios  from "./axios.instance";
/**
 * create a new user throught a post request
 * @param {*} user 
 * @returns 
 */
export const CreateUserRequest = async(user) =>{
    
    try {
        const response = await axios.post(`users/createuser`, user );
        return response;
    } catch (error) {
        console.log(error)
        return error.response;
    }
}

export const UpdateUserRequest = async(user) =>{
    
    try {
        const response = await axios.put(`users/updateuser/${user._id}`, user );
        return response;
    } catch (error) {
        console.log(error)
        return error.response;
    }
}


/**
 * send a request in order to get the user´s task list
 * according the cookie, it will returns the list
 */
export const UsersRequest = async() => {
    try {
        const response = await axios.get(`users/getusers`);
        return response;
    } catch (error) {
        return error.response;
    }
}

/**
 * sent a request in orden to get an especific user
 * @param {*} Id 
 * @returns 
 */
export const UserDetailRequest = async(Id) => {
    try {
        const response = await axios.get(`users/getuser/${Id}`);
        return response;
    } catch (error) {
        return error.response;
    }
}