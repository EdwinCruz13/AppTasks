import { createContext, useState, useEffect } from "react";
import {
  getDepartmentsRequest,
  getDepartmentDetailRequest,
} from "../api/department.api";

/**
 * create and export a context
 */
export const DepartmentContext = createContext();

/**
 * create the provider and export it then
 * @param {*} param0
 * @returns
 */
export const DepartmentContextProvider = ({ children }) => {
  const [departments, setDepartments] = useState(null);
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
     GetDepartments();
  }, []);

  /**
   * get the deparments
   * @param {*} Id
   * @returns
   */
  const GetDepartments = async () => {
    try {
      const list = await getDepartmentsRequest();
      if (!list) {
        setDepartments(null);
        setLoading(false);
        return;
      }

      setDepartments(list.data);
      setLoading(false);
    } catch (error) {
      setDepartments(null);
      setLoading(false);
    }
  };

  /**
   * get the deparments according an ID
   * @param {*} Id
   * @returns
   */
  const GetDepartment = async (Id) => {
    try {
      const list = await getDepartmentDetailRequest(Id);
      if (!list) {
        selectedDepartment(null);
        setLoading(false);
        return;
      }
      selectedDepartment(list.data);
      setLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  const setNew = () => {
    setDepartments(null);
  };

  return (
    <DepartmentContext.Provider
      value={{ departments, selectedDepartment, loading, GetDepartment, GetDepartments, setNew }}
    >
      {children}
    </DepartmentContext.Provider>
  );
};
