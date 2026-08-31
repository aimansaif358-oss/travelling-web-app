
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import Signup from "./pages/Signup";

function App(){
  return(

    <BrowserRouter>
      <Routes>
          <Route path="/" element={<AdminLogin/>} />
          <Route path="/AdminHome/*" element={<AdminHome/>} />
          <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    
  )
}

export default App