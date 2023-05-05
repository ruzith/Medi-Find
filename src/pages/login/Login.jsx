import React, { useState } from 'react';
import './login.scss';
import Logo from '../../components/logo/logo.png';
import BackgroundImage from '../../components/background/login_background.png';
import {Link} from "react-router-dom";

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleShowPasswordChange = (event) => {
    setShowPassword(event.target.checked);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  return (
    <div className="login-container" style={{backgroundImage: `url(${BackgroundImage})`}}>
      <img src={Logo} alt="My Logo" className="logo" />
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Enter User Name</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            autoComplete="username"
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <div className="password-input-group">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              value={password}
              onChange={handlePasswordChange}
              autoComplete="current-password"
              required
            />
            <div className="password-toggle">
              <input
                type="checkbox"
                id="showPassword"
                checked={showPassword}
                onChange={handleShowPasswordChange}
              />
              <label htmlFor="showPassword">{showPassword ? "Hide" : "Show"}</label>
            </div>
          </div>
        </div>
        <button type="submit">Login</button>
      </form>

      <Link to= "/signup" style={{textDecoration: "none" }}>
      <div className="signup-link">
        Don't have an account? <a href="#">Sign up</a>
      </div>
      </Link>
      
    </div>
  );
};

export default Login;
