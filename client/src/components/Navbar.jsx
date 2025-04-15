import React from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  return (
    <header className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-dumbbell" />
        <span>Sport Time</span>
      </div>

      <div>
        <i className="fas fa-bars navbar-menu-icon" />
      </div>
    </header>
  );
};

export default Navbar;
