import React from 'react';
import AuthService from './AuthService';
import './Header.css';

const Header = ({ user, onLogout }) => {
  return (
    <div className='header-container' >
      <span className='header-greeting'>Hello, {user}</span>
      <button className='header-logout-button' onClick={onLogout}>Logout</button>
    </div>
  );
};

export default Header;
