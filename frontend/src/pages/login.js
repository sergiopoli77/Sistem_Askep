import React, { useState } from 'react';
import '../assets/Login.css';

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [role, setRole] = useState('perawat');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Dummy login logic, replace with real authentication
    if (username && password) {
      onLogin({ username, role });
    } else {
      setError('Username dan password wajib diisi!');
    }
  };

  return (
    <div className="login-container">
      <div className="login-card">
        <div className="login-header">
          <div className="medical-icon">
            <svg width="50" height="50" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 2L13.09 8.26L20 9L13.09 9.74L12 16L10.91 9.74L4 9L10.91 8.26L12 2Z" fill="#00B4D8"/>
              <circle cx="12" cy="12" r="10" stroke="#0077B6" strokeWidth="2" fill="none"/>
              <path d="M12 8V16M8 12H16" stroke="white" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </div>
          <h1>Sistem Asuhan Keperawatan DevOps</h1>
          <p>Platform Digital untuk Profesional Kesehatan</p>
        </div>
        
        <form className="login-form" onSubmit={handleSubmit}>
          <h2>Masuk ke Akun Anda</h2>
          {error && <div className="error">{error}</div>}
          
          <div className="input-group">
            <label htmlFor="role">Peran</label>
            <select id="role" value={role} onChange={(e) => setRole(e.target.value)}>
              <option value="perawat">👩‍⚕️ Perawat</option>
              <option value="kepala">👨‍💼 Kepala Rumah Sakit</option>
            </select>
          </div>
          
          <div className="input-group">
            <label htmlFor="username">Username</label>
            <input
              id="username"
              type="text"
              placeholder="Masukkan username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <input
              id="password"
              type="password"
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          
          <button type="submit" className="login-btn">
            <span>Masuk</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </form>
        
        <div className="login-footer">
          <p>© 2025 Sistem Askep Digital</p>
        </div>
      </div>
    </div>
  );
};

export default Login;
