import React, { useState, useEffect } from 'react';
import '../styles/Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = (e) => {
    // Закрываем меню, если клик был вне меню
    if (!e.target.closest('.profile-menu') && !e.target.closest('.navbar-profile-icon')) {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('click', closeMenu);
    return () => {
      // Удаляем обработчик при размонтировании компонента
      document.removeEventListener('click', closeMenu);
    };
  }, []);

  return (
    <header className="navbar">
      <div className="navbar-logo">
        <i className="fas fa-dumbbell"></i>
        <span>Sport Time</span>
      </div>

      <div className="navbar-icons">
        <i className="fas fa-user-circle navbar-profile-icon" onClick={toggleMenu}></i>
        <i className="fas fa-bars navbar-menu-icon"></i>
      </div>

      {/* Выезжающее меню */}
      <div className={`profile-menu ${isMenuOpen ? 'open' : ''}`}>
        <button className="menu-item">Регистрация</button>
        <button className="menu-item">Войти</button>
      </div>
    </header>
  );
};

export default Navbar;
