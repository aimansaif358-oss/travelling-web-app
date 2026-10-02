
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

import AdminLogin from "./pages/AdminLogin";
import AdminHome from "./pages/AdminHome";
import Signup from "./pages/Signup";

function App() {
  const { user } = useSelector((state) => state.home);

  return (
    <BrowserRouter>
      <Routes>
        {user?.id ? (
          <>
            <Route path="/AdminHome/*" element={<AdminHome />} />
            <Route
              path="*"
              element={<Navigate to="/AdminHome" replace />}
            />
          </> ) : (
          <>
            <Route path="/" element={<AdminLogin />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="*" element={<Navigate to="/" replace />} />
          </>
        )}
      </Routes>
    </BrowserRouter>
  );
}

export default App;