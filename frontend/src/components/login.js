import React from 'react';
import '../styles/login.css'; // Make sure this CSS is saved separately
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {

const navigate = useNavigate();

    const handleSignUp = () => {
    navigate('/signup');
  };
    const handleHome = () => {
    navigate('/Home');
  };

  return (
    <form className="form">
      <h1 className="center-text">Welcome Back</h1>
      <div className="flex-column">
        <label>Email</label>
      </div>
      <div className="inputForm">
        {/* Email Icon */}
        <svg height="20" width="20" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
          <path d="M30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
        </svg>
        <input type="email" className="input" placeholder="Enter your Email" />
      </div>

      <div className="flex-column">
        <label>Password</label>
      </div>
      <div className="inputForm">
        {/* Lock Icon */}
        <svg height="20" viewBox="-64 0 512 512" width="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M336 512H48c-26.453 0-48-21.523-48-48V240c0-26.476 21.547-48 48-48h288c26.453 0 48 21.524 48 48v224c0 26.477-21.547 48-48 48zM48 224c-8.813 0-16 7.168-16 16v224c0 8.832 7.187 16 16 16h288c8.813 0 16-7.168 16-16V240c0-8.832-7.187-16-16-16z" />
          <path d="M304 224c-8.832 0-16-7.168-16-16v-80c0-52.93-43.07-96-96-96S96 75.07 96 128v80c0 8.832-7.168 16-16 16s-16-7.168-16-16v-80C64 57.407 121.407 0 192 0s128 57.407 128 128v80c0 8.832-7.168 16-16 16z" />
        </svg>
        <input type="password" className="input" placeholder="Enter your Password" />
        {/* Eye Icon */}
        <svg viewBox="0 0 576 512" height="20" xmlns="http://www.w3.org/2000/svg">
          <path d="M288 32c-80.8 0-145.5 36.8-192.6 80.6C48.6 156 17.3 208 2.5 243.7c-3.3 7.9-3.3 16.7 0 24.6C17.3 304 48.6 356 95.4 399.4 142.5 443.2 207.2 480 288 480s145.5-36.8 192.6-80.6c46.8-43.5 78.1-95.4 93-131.1 3.3-7.9 3.3-16.7 0-24.6-14.9-35.7-46.2-87.7-93-131.1C433.5 68.8 368.8 32 288 32zm-144 224a144 144 0 1 1 288 0 144 144 0 1 1 -288 0zm144-64c0 35.3-28.7 64-64 64-7.1 0-13.9-1.2-20.3-3.3-5.5-1.8-11.9 1.6-11.7 7.4.3 6.9 1.3 13.8 3.2 20.7 13.7 51.2 66.4 81.6 117.6 67.9s81.6-66.4 67.9-117.6c-11.1-41.5-47.8-69.4-88.6-71.1-5.8-.2-9.2 6.1-7.4 11.7 2.1 6.4 3.3 13.2 3.3 20.3z" />
        </svg>
      </div>

      <div className="flex-row">
        <div>
          <input type="checkbox" id="rememberMe" />
          <label htmlFor="rememberMe">Remember me</label>
        </div>
        <span className="span">Forgot password?</span>
      </div>

      <button type="submit" className="button-submit" onClick={handleHome}>Sign In</button>

      <p className="p">Don't have an account? <span className="span" onClick={handleSignUp}>Sign Up</span></p>
      
    </form>
  );
};

export default LoginForm;
