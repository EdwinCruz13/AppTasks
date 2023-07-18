import { createContext, useState, useEffect } from "react";
import {
  CreateTaskRequest,
  UpdateTaskRequest,
  TasksRequest,
  TasksDetailRequest,
  StatesRequest
} from "../api/task.api";

/**
 * Create a context for task
 */
export const TaskContext = createContext();

/**
 * export the context as provider
 * @param {*} param0
 */
export const TaskContextProvider = ({ children }) => {
  const [tasks, setTasks] = useState(null);
  const [selectedTask, setSelectedTask] = useState(null);

  const [states, setStates] = useState(null);

  const [errorMessage, setErrorMessage] = useState({
    responseError: "",
    titleError: "",
    descriptionError: "",
    noteError: ""
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loaddata() {
      await GetTasks();
      await GetStates();
    }

    loaddata();
  }, []);

  /**
   * get the user's task list
   */
  const GetTasks = async () => {
    try {
      const list = await TasksRequest();
      if (!list) {
        setTask(null);
        setLoading(false);
        return;
      }

      setTasks(list.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  /**
   * get the task detail
   */
  const GetTask = async (Id) => {
    try {
      //console.log(Id)
      const item = await TasksDetailRequest(Id);
      if (!item) {
        setLoading(false);
        setSelectedTask(null);
        return;
      }

      setLoading(false);
      setSelectedTask(item.data);
    } catch (error) {
      console.log(error);
    }
  };

  const setNew = async () => {
    await setSelectedTask(null);
  };

  /**
   * get the states list
   */
  const GetStates = async () => {
    try {
      const list = await StatesRequest();
      if (!list) {
        setStates(null);
        setLoading(false);
        return;
      }

      setStates(list.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };


  /**
   * create a new task
   * @param {*} task
   */
  const SaveTask = async (task) => {
    try {
      //do a request using a new AxiosRequest object
      const response = await CreateTaskRequest(task);

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
  };


  /**
   * create a new task
   * @param {*} task
   */
  const UpdateTask = async (task) => {
    try {
      //do a request using a new AxiosRequest object
      const response = await UpdateTaskRequest(task);

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
  };

  return (
    <TaskContext.Provider
      value={{
        tasks,
        selectedTask,
        states,
        loading,
        GetTasks,
        GetTask,
        SaveTask,
        UpdateTask,
        setNew,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
};
