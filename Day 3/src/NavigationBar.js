// NavigationBar.js

import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import './NavigationBar.css';

const NavigationBar = () => {
  const isLoggedIn = true; // Placeholder for login status
  const username = 'John Doe'; // Placeholder for username

  return (
    <nav className="navbar">
      <div className="logo">Your Grocery Shop</div>
      <div className="nav-items">
        {isLoggedIn ? (
          <>
            <span className="username">{username}</span>
            <span className="logout">Logout</span>
          </>
        ) : (
          <span className="login">Login</span>
        )}
        <span className="cart">
          <FaShoppingCart />
        </span>
      </div>
    </nav>
  );
};

export default NavigationBar;
