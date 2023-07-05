import React from 'react';
import './App.css';
import { Route, Routes,  } from 'react-router-dom';
import Login from './features/authentication/login/pages/Login';
import "./styles/_style.scss";

const App = () => {
  return (
    <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/login" element={<Login />} />
  </Routes>
  );
};

export default App;
