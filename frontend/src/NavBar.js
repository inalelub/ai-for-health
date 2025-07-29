import React from 'react';
import './NavBar.css';
import { useNavigate } from 'react-router-dom';
import logo from './logo.png';

const NavBar = () => {

  const navigate = useNavigate();

   const hadleSettings = () => {
    navigate('/settings');
  };
  return (
    <nav className="navbar">
      
    <div className="navbar-left">
  <img src={logo} alt="Symptom Bot Logo" className="logo-img" />
</div>
      <div className="navbar-right">
        <button className="nav-button" title="Notifications">
          <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
            <path d="M15 19.25C15 20.05 14.68 20.81 14.12 21.37C13.56 21.93 12.8 22.25 12 22.25C11.2 22.25 10.44 21.93 9.88 21.37C9.32 20.81 9 20.05 9 19.25" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M5.58 18.25C5.09 18.15 4.66 17.86 4.37 17.45C4.08 17.05 3.95 16.55 4.01 16.05L5.01 7.94C5.27 6.27 6.11 4.75 7.4 3.66C8.69 2.57 10.32 1.98 12.01 2C13.7 1.98 15.33 2.57 16.62 3.66C17.91 4.75 18.76 6.27 19.01 7.94L20.01 16.05C20.07 16.55 19.95 17.05 19.66 17.45C19.37 17.86 18.94 18.14 18.45 18.25C14.22 19.24 9.81 19.24 5.58 18.25Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>

        <button className="nav-button" title="Settings" onClick={hadleSettings}>
          <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
            <path fillRule="evenodd" clipRule="evenodd" d="M3.6 6.2C3.36 4.82 4.68 3.65 6.07 4.02L7.13 4.3C7.96 4.53 8.85 4.19 9.32 3.47L10.33 1.9C11.11 0.7 12.89 0.7 13.67 1.9L14.68 3.47C15.15 4.19 16.03 4.53 16.87 4.3L17.93 4.02C19.32 3.65 20.64 4.82 20.4 6.22L20.14 7.76C20.01 8.55 20.38 9.34 21.07 9.76L22.04 10.33C23.32 11.08 23.32 12.91 22.04 13.67L21.07 14.24C20.38 14.66 20.01 15.45 20.14 16.24L20.4 17.78C20.64 19.18 19.32 20.35 17.93 19.98L16.87 19.7C16.03 19.47 15.15 19.81 14.68 20.53L13.67 22.1C12.89 23.3 11.11 23.3 10.33 22.1L9.32 20.53C8.85 19.81 7.96 19.47 7.13 19.7L6.07 19.98C4.68 20.35 3.36 19.18 3.6 17.78L3.86 16.24C3.99 15.45 3.62 14.66 2.93 14.24L1.96 13.67C0.68 12.91 0.68 11.08 1.96 10.33L2.93 9.76C3.62 9.34 3.99 8.55 3.86 7.76L3.6 6.2ZM12 16.39C14.46 16.39 16.45 14.42 16.45 12C16.45 9.58 14.46 7.61 12 7.61C9.54 7.61 7.54 9.58 7.54 12C7.54 14.42 9.54 16.39 12 16.39Z" fill="currentColor" />
          </svg>
        </button>

        <button className="nav-button" title="Profile" >
          <svg viewBox="0 0 24 24" fill="none" className="nav-icon">
            <path d="M16 7C16 9.21 14.21 11 12 11C9.79 11 8 9.21 8 7C8 4.79 9.79 3 12 3C14.21 3 16 4.79 16 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 14C8.13 14 5 17.13 5 21H19C19 17.13 15.87 14 12 14Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </nav>
  );
};

export default NavBar;



