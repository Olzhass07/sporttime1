import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // импортируем хук
import '../styles/Navbar.css';

const Navbar = () => {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { isAuthenticated, logout } = useAuth(); // получаем статус авторизации и функцию logout

  const handleProfileClick = () => {
    if (isAuthenticated) {
      navigate('/profile'); // если вошёл — в профиль
    } else {
      navigate('/auth'); // иначе на вход/регу
    }
  };

  const toggleMenu = () => {
    if (isAuthenticated) {
      setIsMenuOpen(!isMenuOpen);
    }
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleLogout = () => {
    logout(); // вызываем функцию выхода
    navigate('/auth'); // перенаправляем на страницу входа
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-logo">
          <i className="fas fa-dumbbell"></i>
          <span>Sport Time</span>
        </div>

        <div className="navbar-icons">
          <i className="fas fa-user-circle navbar-profile-icon" onClick={handleProfileClick}></i>
          {isAuthenticated && (
            <i className="fas fa-bars navbar-menu-icon" onClick={toggleMenu}></i>
          )}
        </div>
      </header>

      {isAuthenticated && (
        <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}>
          <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <ul>
              <li><i className="fas fa-cogs"></i><span>Жаттығу генераторы</span></li>
              <li><i className="fas fa-dumbbell"></i><span>Жеке жаттығулар</span></li>
              <li><i className="fas fa-layer-group"></i><span>Жаттығу комбинациялары</span></li>
              <li onClick={() => navigate('/calorie-calculator')}>
  <i className="fas fa-calculator"></i>
  <span>Калория калькуляторы</span>
</li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i> Выйти
                </button>
              </li>
            </ul>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
