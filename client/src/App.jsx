import { Routes, Route } from "react-router-dom";

import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//import pages
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignInUp/SignIn";

//import context provider
import { UserContextProvider } from "./context/UserContext";

function App() {
  return (
    <>
      <UserContextProvider>
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/home" element={<Home />} />
          <Route path="/signin" element={<SignIn />} />
        </Routes>
      </UserContextProvider>

      
    </>
  )
}

export default App
