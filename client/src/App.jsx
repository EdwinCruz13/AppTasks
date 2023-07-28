import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";

//import pages
import { ProtectedRoute } from "./pages/Protected/ProtectedRoute";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignInUp/SignIn";
import { SignUp } from "./pages/SignInUp/SignUp";
import { Logout } from "./pages/SignInUp/Logout";
import { Dashboard } from "./pages/Dashboard/Dashboard";
import { Tasks } from "./pages/Tasks/Tasks";
import { TaskTypes } from "./pages/TaskTypes/TaskTypes";
import { States } from "./pages/States/States";
import { Users } from "./pages/Users/Users";
import { Profile } from "./pages/Profile/Profile";

//import context provider
import { ModalContextProvider } from "./context/ModalContext";
import { UserContextProvider } from "./context/UserContext";
import { TaskContextProvider } from "./context/TaskContext";

import { TaskTypeContextProvider } from "./context/TaskTypeContext";
import { DepartmentContextProvider } from "./context/DepartmentContext";


function App() {
  return (
    <>
      <ModalContextProvider>
        <UserContextProvider>
          
            <TaskContextProvider>
              <TaskTypeContextProvider>
              <DepartmentContextProvider>  
              <BrowserRouter>
                  <Routes>
                    <Route path="/home" element={<Home />} />
                    <Route exact path="/" element={<SignIn />} />
                    <Route path="/signin" element={<SignIn />} />
                    <Route path="/signup" element={<SignUp />} />
                    <Route path="/logout" element={<Logout />} />

                    <Route element={<ProtectedRoute />}>
                      <Route path="/dashboard" element={<Dashboard />} />
                      <Route path="/tasks" element={<Tasks />} />
                      <Route path="/tasktypes" element={<TaskTypes />} />
                      <Route path="/states" element={<States />} />
                      <Route path="/users" element={<Users />} />
                      <Route path="/profile" element={<Profile />} />
                    </Route>
                  </Routes>
                </BrowserRouter>
              </DepartmentContextProvider>
                
              </TaskTypeContextProvider>
            </TaskContextProvider>
         
        </UserContextProvider>
      </ModalContextProvider>
    </>
  );
}

export default App;
