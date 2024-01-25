import React, { useState, useEffect } from 'react';
import Header from './components/UserManagement/Header';
import Login from './components/UserManagement/Login';
import AuthService from './components/UserManagement/AuthService';

function App() {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const user = AuthService.getCurrentUser();
    if (user) {
      setCurrentUser(user);
    }
  }, []);

  const handleLoginSuccess = () => {
    setCurrentUser(AuthService.getCurrentUser());
  };

  const handleLogout = () => {
    AuthService.logout();
    setCurrentUser(null);
  };

  return (
    <div className="App">
      {currentUser ? (
        <Header user={currentUser} onLogout={handleLogout} />
      ) : (
        <Login onLogin={handleLoginSuccess} />
      )}
    </div>
  );
}

export default App;
