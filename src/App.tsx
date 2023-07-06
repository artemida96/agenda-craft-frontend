import { Route, Routes,  } from 'react-router-dom';
import Login from './features/authentication/login/pages/Login';
const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
};

export default App;
