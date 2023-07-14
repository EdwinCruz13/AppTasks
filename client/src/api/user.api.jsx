import axios  from "./axios.instance";


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