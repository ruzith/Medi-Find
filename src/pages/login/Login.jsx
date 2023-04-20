import React, { useState } from 'react';
import './login.scss';
import Logo from '../../components/logo/logo.png';

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showForgotPassword, setShowForgotPassword] = useState(false);
  const [email, setEmail] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleLoginSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
  };

  const handleForgotPasswordSubmit = (event) => {
    event.preventDefault();
    // Add your forgot password logic here
    // You can use the `email` state to get the user's email
    setShowForgotPassword(false);
  };

  const toggleForgotPassword = () => {
    setShowForgotPassword(!showForgotPassword);
  };

  return (
    <div className="login-container">
      <img src={Logo} alt="My Logo" className="logo" />
      <h1>Login</h1>
      {!showForgotPassword && (
        <form onSubmit={handleLoginSubmit}>
          <div className="form-group">
            <label htmlFor="username">Username:</label>
            <div className="username-input-group">
              <input
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            </div>
          </div>
          <div className="form-group">
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={handlePasswordChange}
            />
          </div>
          <div className="forgot-password">
            <button type="button" onClick={toggleForgotPassword}>
              Forgot Password?
            </button>
          </div>
          <button type="submit">Login</button>
        </form>
      )}
      {showForgotPassword && (
        <form onSubmit={handleForgotPasswordSubmit}>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              value={email}
              onChange={handleEmailChange}
            />
          </div>
          <div className="forgot-password">
            <button type="button" onClick={toggleForgotPassword}>
              Cancel
            </button>
            <button type="submit">Submit</button>
          </div>
        </form>
      )}
    </div>
  );
};

export default Login;
