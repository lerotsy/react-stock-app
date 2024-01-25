import React from 'react';
import AuthService from './AuthService';
import './Header.css';

const Header = ({ user, onLogout }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px', backgroundColor: '#eee' }}>
      <span>Hello, {user}</span>
      <button onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
