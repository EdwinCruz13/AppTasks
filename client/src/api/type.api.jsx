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

/**
 * create a new type request to the backend
 * @param {*} type 
 * @returns 
 */
export const CreateTypeRequest = async(type) =>{
    try {
        const response = await axios.post(`types/createtype`, type);
        return response;
    } catch (error) {
        return error.response;
    }
}

/**
 * update the selected type
 * @param {*} type 
 * @returns 
 */
export const UpdateTaskRequest = async(type) =>{
    try {
        const response = await axios.put(`types/updatetype/${type._id}`, type);
        return response;
    } catch (error) {
        return error.response;
    }
}