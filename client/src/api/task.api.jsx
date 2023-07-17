import axios  from "./axios.instance";

/**
 * Create a new task
 * @param {*} task 
 * @returns 
 */
export const CreateTaskRequest = async(task) =>{
    try {
        const response = await axios.post(`tasks/createtask`, task);
        return response;
    } catch (error) {
        return error.response;
    }
}
/**
 * update an especific task
 * @param {*} task 
 * @returns 
 */
export const UpdateTaskRequest = async(task) =>{
    try {
        const response = await axios.put(`tasks/updatetask/${task._id}`, task);
        return response;
    } catch (error) {
        return error.response;
    }
}



/**
 * send a request in order to get the user´s task list
 * according the cookie, it will returns the list
 */
export const TasksRequest = async() => {
    try {
        const response = await axios.get(`tasks/getTasks`);
        return response;
    } catch (error) {
        return error.response;
    }
}

export const TasksDetailRequest = async(Id) => {
    try {
        if(Id){
            const response = await axios.get(`tasks/getTask/${Id}`);
            return response;
        }
        
    } catch (error) {
        console.warn(error)
        return error.response;
    }
}

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

