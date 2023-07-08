import axios  from "./axios.instance";

/**
 * send a request in order to request the user´s task list
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