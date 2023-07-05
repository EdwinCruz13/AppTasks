import { BrowserRouter, Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//import pages
import { ProtectedRoute } from "./pages/Protected/ProtectedRoute";
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignInUp/SignIn";
import { SignUp } from "./pages/SignInUp/SignUp";
import { Logout } from "./pages/SignInUp/Logout";
import { Tasks } from "./pages/Tasks/Tasks";

//import context provider
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <BrowserRouter>
          <Routes>
            <Route exact path="/" element={<SignIn />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/logout" element={<Logout />} />

            <Route element={ <ProtectedRoute />}>
              <Route path="/home" element={<Home />} />
              <Route path="/tasks" element={<Tasks />} />
            </Route>
          </Routes>
        </BrowserRouter>
        
      </UserContextProvider>

      
    </>
  )
}

export default App
