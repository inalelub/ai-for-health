import React from 'react';
import NavBar from './NavBar';
import ChatBot from './chat';
import './Home.css';

function Home() {
  return (
    <div className="app-layout">
      <NavBar />
      <div className="main-content">
        <ChatBot />
      </div>
    </div>
  );
}

export default Home;
