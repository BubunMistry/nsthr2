import React, { useState } from 'react';
import { useTheme } from './theme-context';
import Link from 'next/link';

const LoginForm = ({ onNavigate }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const { primaryColor, secondaryColor, accentColor } = useTheme();

  const handleSubmit = (e) => {
    e.preventDefault();
    // Login logic here
    console.log('Login submitted', { email, password });
  };

  return (
    <div className="auth-form" style={{ backgroundColor: secondaryColor }}>
      <h2 style={{ color: primaryColor }}>Job Seeker Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="email" style={{ color: primaryColor }}>Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ borderColor: accentColor }}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password" style={{ color: primaryColor }}>Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ borderColor: accentColor }}
          />
        </div>
        <button 
          type="submit" 
          style={{ 
            backgroundColor: accentColor,
            color: '#fff'
          }}
        >
          Login
        </button>
      </form>
      <p style={{ color: primaryColor }}>
        Don't have an account?{' '}
        <Link href="/register" passHref>
          <a style={{ color: accentColor }}>Register</a>
        </Link>
      </p>
    </div>
  );
};

export default LoginForm;