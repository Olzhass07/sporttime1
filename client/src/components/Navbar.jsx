import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const goToAuth = () => {
    navigate('/auth'); // Переход на страницу аутентификации
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <i className="fas fa-dumbbell"></i>
          <span>Sport Time</span>
        </div>

        <div className="navbar-icons">
          <i className="fas fa-user-circle navbar-profile-icon" onClick={goToAuth}></i>
          <i className="fas fa-bars navbar-menu-icon" onClick={toggleMenu}></i>
        </div>
      </header>

      <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}>
        <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
          <ul>
           <li>
  <i className="fas fa-cogs"></i>
  <span>Жаттығу генераторы</span>
</li>
<li>
  <i className="fas fa-dumbbell"></i>
  <span>Жеке жаттығулар</span>
</li>
<li>
  <i className="fas fa-layer-group"></i>
  <span>Жаттығу комбинациялары</span>
</li>
<li>
  <i className="fas fa-calculator"></i>
  <span>Калория калькуляторы</span>
</li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default Navbar;