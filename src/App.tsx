import { Route, Routes } from "react-router-dom";
import Login from "./authentication/features/login/pages/Login";
import ForgotPassword from "authentication/features/forgotPassword/pages/ForgotPassword";
import Register from "authentication/features/register/pages/Register";
import { SidenavBar } from "navigation";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />
      {/* just for test only. dashbord should be after login visible */}
      <Route path="/dashboard" element={<SidenavBar />} />
    </Routes>
  );
};

export default App;
