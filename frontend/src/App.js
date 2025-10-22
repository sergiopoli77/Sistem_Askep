import React, { useState } from 'react';
import './App.css';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Signup from './pages/signup';

function App() {
  const [user, setUser] = useState(null);

  const handleLogout = () => {
    setUser(null);
  };

  // jika user belum login, tampilkan login
  if (!user) {
    // Simple pathname-based routing: /signup shows signup page, otherwise show login
    if (typeof window !== 'undefined' && window.location.pathname === '/signup') {
      return <Signup onRegistered={() => { window.location.href = '/'; }} />;
    }

    return <Login onLogin={setUser} />;
  }

  // jika sudah login tampilkan dashboard
  return (
    <div className="App">
      <Dashboard user={user} onLogout={handleLogout} />
    </div>
  );
}

export default App;
