import ForgotPassword from "pages/forgotPassword/ForgotPassword";
import Login from "pages/login/Login";
import { SidenavBar } from "pages/navigation/sidenavBar";
import NotFound from "pages/notFound/NotFound";
import Register from "pages/register/Register";
import { useEffect } from "react";
import { Navigate, Route, Routes, useNavigate } from "react-router-dom";
const App = () => {
  let token = localStorage.getItem("authToken");

  const navigate = useNavigate();
  useEffect(() => {
    token = localStorage.getItem("authToken");
    if (!token) {
      navigate("/login");
    }
  }, [token]);
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      <Route
        path="/dashboard"
        element={token ? <SidenavBar /> : <Navigate to="/login" />}
      />
      <Route path="/*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
