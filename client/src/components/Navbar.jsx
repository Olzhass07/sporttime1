import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-dumbbell"></i>
        <span>Sport Time</span>
      </div>

      <div className="navbar-icons">
        <i className="fas fa-user-circle navbar-profile-icon"></i>
        <i className="fas fa-bars navbar-menu-icon"></i>
      </div>
    </header>
  );
};

export default Navbar;
