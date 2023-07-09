import { createContext, useState, useEffect } from "react";
import { TasksRequest } from "../api/task.api";

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
    const [task, setTask] = useState(null);
    const [loading, setLoading] = useState(true);

    /**
     * get the user's task list 
     */
    const GetTasks = async() => {
        try {
            const list = await TasksRequest();
            if(!list){
                setTask(null);
                setLoading(false);
                return
            }

            setTasks(list.data);
            setLoading(false);

        } catch (error) {
            console.log(error);
        }
    }

    return(
        <TaskContext.Provider
            value = {{ tasks, task, loading,  GetTasks } }
        >
            { children }
        </TaskContext.Provider>
    );
}

