import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();

  const goToAuth = () => {
    navigate('/auth'); // Переход на страницу аутентификации
  };

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-dumbbell"></i>
        <span>Sport Time</span>
      </div>

      <div className="navbar-icons">
        <i className="fas fa-user-circle navbar-profile-icon" onClick={goToAuth}></i>
        <i className="fas fa-bars navbar-menu-icon"></i>
      </div>
    </header>
  );
};

export default Navbar;
