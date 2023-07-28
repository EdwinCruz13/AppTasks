import { createContext, useState, useEffect } from "react";
import { TaskTypesRequest, TaskTypeDetailRequest, CreateTypeRequest, UpdateTaskRequest } from "../api/type.api";

/**
 * Create a context for types
 */
export const TaskTypeContext = createContext();

/**
 * export tje provider context
 * @param {*} param0
 * @returns
 */
export const TaskTypeContextProvider = ({ children }) => {
  const [types, setTypes] = useState(null);
  const [selectedType, setSelectedType] = useState(null);
  const [loading, setLoading] = useState(true);

  /**
   * load the first datas
   */
  useEffect(() => {
    async function loaddata() {
      await GetTypes();
    }

    loaddata();
  }, []);

  const setNew = async () => {
    await setSelectedType(null);
  };

  /**
   * get the task types list
   */
  const GetTypes = async () => {
    try {
      const list = await TaskTypesRequest();
      if (!list) {
        setTypes(null);
        setLoading(false);
        return;
      }

      setTypes(list.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  /**
   * get a especific type
   * @param {*} Id 
   * @returns 
   */
  const GetType = async (Id) => {
    try {
      const element = await TaskTypeDetailRequest(Id);
      if (!element) {
        setSelectedType(null);
        setLoading(false);
        return;
      }

      setSelectedType(element.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * save a new type
   * @param {*} type 
   * @returns 
   */
  const SaveType = async(type) => {
    try {
      //do a request using a new AxiosRequest object
      const response = await CreateTypeRequest(type);

      //check the response from api rest
      if (!response.data.error) {
        //refresh the page
        return "OK";
      } else {
        return response.data.error;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

 /**
  * update a new type request
  * @param {*} type 
  * @returns 
  */
  const UpdateType = async(type) => {
    console.log(type)
    try {
      //do a request using a new AxiosRequest object
      const response = await UpdateTaskRequest(type);

      //check the response from api rest
      if (!response.data.error) {
        //refresh the page
        return "OK";
      } else {
        return response.data.error;
      }
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  }

  return (
    <TaskTypeContext.Provider
      value={{ types, selectedType, loading, GetTypes, GetType, SaveType, UpdateType, setNew }}
    >
      {children}
    </TaskTypeContext.Provider>
  );
};
