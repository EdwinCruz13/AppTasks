import axios  from "./axios.instance";

/**
 * send a request in order to get the task types list
 * according the cookie, it will returns the list
 */
export const TaskTypesRequest = async() => {
    try {
        const response = await axios.get(`types/getTypes`);
        return response;
    } catch (error) {
        return error.response;
    }
}


/**
 * send a request in order to get a task type
 * according the cookie, it will returns the object
 */
export const TaskTypeDetailRequest = async(Id) => {
    try {
        const response = await axios.get(`types/getType/${Id}`);
        return response;
    } catch (error) {
        return error.response;
    }
}