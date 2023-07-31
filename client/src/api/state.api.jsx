import axios  from "./axios.instance";


/**
 * send a request in order to get the state list
 * according the cookie, it will returns the list
 */
export const StatesRequest = async() => {
    try {
        const response = await axios.get(`states/getStates`);
        return response;
    } catch (error) {
        return error.response;
    }
}


/**
 * send a request in order to get a task type
 * according the cookie, it will returns the object
 */
export const StateDetailRequest = async(Id) => {
    try {
        const response = await axios.get(`states/getState/${Id}`);
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
export const CreateStateRequest = async(state) =>{
    try {
        const response = await axios.post(`states/createstate`, state);
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
export const UpdateStateRequest = async(state) =>{
    try {
        const response = await axios.put(`states/updatestate/${state._id}`, state);
        return response;
    } catch (error) {
        return error.response;
    }
}
