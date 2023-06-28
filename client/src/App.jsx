import { Routes, Route } from "react-router-dom";


import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'

//import pages
import { Home } from "./pages/Home/Home";
import { SignIn } from "./pages/SignInUp/signin";

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </>
  )
}

export default App
