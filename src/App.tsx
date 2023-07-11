import { Route, Routes,  } from 'react-router-dom';
import Login from './features/authentication/login/pages/Login';
import Register from 'features/authentication/register/pages/Register';
import ForgotPassword from 'features/authentication/forgotPassword/pages/ForgotPassword';
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>}/>
    <Route path="/forgot-password" element={<ForgotPassword/>}/>
  </Routes>
  );
};

export default App;
