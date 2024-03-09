import React from 'react';
import { Route, Routes, useNavigate, Navigate } from 'react-router-dom';
import Main from './component/Main';
import Signup from './component/Signup';
import Login from './component/Login';
import HomePage from './component/Homepage';

function App() {
  const user = localStorage.getItem('token');
  const navigate = useNavigate();

  const handleLogin = () => {
    navigate('/login');
  };

  const handleSignup = () => {
    navigate('/signup');
  };

  return (
    <Routes>
      {user ? (
        <>
          <Route path="/" element={<Main />} />
          <Route path="/login" element={<Navigate to="/" />} />
        </>
      ) : (
        <>
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />

        </>
      )}
    </Routes>
  );
}

export default App;
