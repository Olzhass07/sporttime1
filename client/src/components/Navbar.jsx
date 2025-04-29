import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../hooks/useAuth'; // импортируем хук
import { toast } from 'react-hot-toast'; // Импортируем toast для уведомлений
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

  const handleLogoClick = () => {
    navigate('/'); // перенаправление на главную страницу
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
    toast.success('Сіз аккаунттан шықтыңыз!'); // Показываем уведомление
    navigate('/auth'); // перенаправляем на страницу входа
  };

  return (
    <>
      <header className="navbar">
        <div className="navbar-content">
          <div className="navbar-logo" onClick={handleLogoClick}>
            <img src="../public/icon1.png" alt="Sport Time Logo" className="navbar-logo-img" />
            <span>Sport Time</span>
          </div>
          <div className="navbar-icons-container">
            <img src="../public/user-icon.svg" alt="Профиль" className="navbar-icon" onClick={handleProfileClick} />
            {isAuthenticated && (
              <img src="/menu-icon.svg" alt="Меню" className="navbar-icon" onClick={toggleMenu} />
            )}
          </div>
        </div>
      </header>

      {isAuthenticated && (
        <div className={`overlay ${isMenuOpen ? 'visible' : ''}`} onClick={closeMenu}>
          <div className={`sidebar-menu ${isMenuOpen ? 'open' : ''}`} onClick={(e) => e.stopPropagation()}>
            <ul>
              <li onClick={() => navigate('/generator')}>
                <i className="fas fa-cogs"></i>
                <span>Жаттығу генераторы</span>
              </li>
              <li onClick={() => navigate('/custom-workouts')}>
                <i className="fas fa-dumbbell"></i>
                <span>Жеке жаттығулар</span>
              </li>
              <li onClick={() => navigate('/workout')}>
                <i className="fas fa-layer-group"></i>
                <span>Жаттығу программалары</span>
              </li>
              <li onClick={() => navigate('/calorie-calculator')}>
                <i className="fas fa-calculator"></i>
                <span>Калория калькуляторы</span>
              </li>
              <li>
                <button className="logout-button" onClick={handleLogout}>
                  <i className="fas fa-sign-out-alt"></i>
                  <span>Выйти</span>
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