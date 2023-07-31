import { React, useState, useEffect, createContext } from "react";
import { StatesRequest, StateDetailRequest, CreateStateRequest, UpdateStateRequest } from "../api/state.api";

//export a state context
export const StateContext = createContext();

//export a context provider
export const StateContextProvider = ({ children }) => {
  const [states, setStates] = useState(null);
  const [selectedState, setSelectedState] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loaddata() {
      await GetStates();
    }

    loaddata();
  }, []);

  const setNew = async () => {
    await setSelectedState(null);
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
   * get a especific type
   * @param {*} Id 
   * @returns 
   */
  const GetState = async (Id) => {
    try {
      const element = await StateDetailRequest(Id);
      if (!element) {
        setSelectedState(null);
        setLoading(false);
        return;
      }

      setSelectedState(element.data);
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
   const SaveState = async(state) => {
    try {
      //do a request using a new AxiosRequest object
      const response = await CreateStateRequest(state);

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
   const UpdateState = async(state) => {
    console.log(state)
    try {
      //do a request using a new AxiosRequest object
      const response = await UpdateStateRequest(state);

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
    <StateContext.Provider value={{ states, selectedState, GetStates, GetState, SaveState, UpdateState, setNew }}>
      {children}
    </StateContext.Provider>
  );
};
