import React, { useState } from 'react';
import './Login.css';
import logo from '../img/logo.png'; // Ganti dengan path dan nama file logo yang sesuai
import { Link } from 'react-router-dom';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan autentikasi atau tindakan login yang diperlukan
  };

  return (
    <div className="login-container">
      <div className="logo-container">
        <img src={logo} alt="Logo" />
        <div className="toko-name-up">ORCA</div>
        <div className="toko-name-down">SHOP</div>
      </div>
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label>Email</label>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={handleEmailChange}
          />
        </div>
        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
          />
        </div>
        <button type="submit">Login</button>
        <div className="forgot-password">
          <a href="#">Forgot Password?</a>
        </div>
        <div className="signup-link">
          Don't have an account? <Link to="/register">Sign Up</Link>
        </div>
      </form>
    </div>
  );
};

export default Login;
