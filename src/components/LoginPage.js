import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import './LoginPage.css'; // Ensure you have corresponding CSS for styling

function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      setError('Please fill in all fields.');
      return;
    }

    // Example validation, replace with real authentication logic
    const storedUser = JSON.parse(localStorage.getItem('user')); 
    if (storedUser && storedUser.email === email && storedUser.password === password) {
      navigate('/department'); // Change to the desired route after successful login
    } else {
      setError('Invalid credentials.');
    }
  };

  return (
    <div className="login-container">
      <div className="login-box">
        <h2 className="login-heading">PulseNet LOGIN</h2>
        {error && <p className="error-message">{error}</p>}
        <form onSubmit={handleSubmit} className="login-form">
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="login-input"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="login-input"
          />
          <button type="submit" className="login-button">Login</button>
          <p className="login-footer">
            <Link to="/signup" className="login-link">Sign Up</Link> | 
            <Link to="/forgot-password" className="login-link">Forgot Password?</Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
