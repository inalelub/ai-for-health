import React from 'react';
import NavBar from './NavBar';
import ChatBot from './chat';
import LandingPage from './AuthForm';
import LoginForm from './login';
import SignUp from './sigup';
import Home from './Home';
import './App.css';
import { Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginForm  />} />
      <Route path="/signup" element={<SignUp  />} />
      <Route path="/chat" element={<ChatBot />} />
      <Route path="/Home" element={<Home />} />

    </Routes>
  );
}

export default App;

