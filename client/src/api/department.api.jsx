import axios from "./axios.instance"

/**
 * do a request in order to get all the departments
 * @returns 
 */
export const getDepartmentsRequest = async() => {
    try {
        const response =  await axios.get(`departments/getdepartments`);
        return response;
    } catch (error) {
        console.log(error);
    }
}


/**
 * do a request in order to get an especific department
 * @returns 
 */
export const getDepartmentDetailRequest = async(Id) => {
    try {
        const response =  await axios.get(`departments/getdepartment/${Id}`);
        return response;
    } catch (error) {
        console.log(error);
    }
}