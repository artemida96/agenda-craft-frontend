import { Route, Routes,  } from 'react-router-dom';
import Login from './features/authentication/login/pages/Login';
import Register from 'features/authentication/login/pages/Register';
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<Register/>}/>
  </Routes>
  );
};

export default App;
