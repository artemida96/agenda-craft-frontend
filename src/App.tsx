import ForgotPassword from "pages/forgotPassword/ForgotPassword";
import Login from "pages/login/Login";
import { SidenavBar } from "pages/navigation/sidenavBar";
import Register from "pages/register/Register";
import { Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Routes>
      <Route>
        <Route path="/" element={<Login />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        {/* just for test only. dashboard should be after login visible */}
        <Route path="/dashboard" element={<SidenavBar />} />
      </Route>
    </Routes>
  );
};

export default App;
