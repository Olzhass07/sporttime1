import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Authentication.css';

const Authentication = () => {
  const navigate = useNavigate();

  const goToRegister = () => {
    navigate('/register'); // Переход на страницу регистрации
  };

  const goToHome = () => {
    navigate('/'); // Переход на главную страницу
  };

  return (
    <div className="auth-container" align="center">
      <div className="auth-box">
        {/* Стрелка для возврата */}
        <div className="back-arrow" onClick={goToHome}>
          <i className="fas fa-arrow-left"></i> {/* Иконка стрелки */}
        </div>

        <img
          src="../icon.jpg"
          alt="SportTime logo"
          className="auth-logo"
        />
        <h1 className="auth-title">Кіру</h1>
        <p className="auth-subtitle">
          Немесе{' '}
          <a href="#" className="auth-link" onClick={(e) => {
            e.preventDefault();
            goToRegister();
          }}>
            Жаңа аккаунт жасаңыз
          </a>
        </p>
        <form className="auth-form">
          <label htmlFor="email" className="auth-label">
            Электрондық пошта
          </label>
          <input
            type="email"
            id="email"
            className="auth-input"
            placeholder="Электрондық пошта"
          />
          <label htmlFor="password" className="auth-label">
            Құпиясөз
          </label>
          <input
            type="password"
            id="password"
            className="auth-input"
            placeholder="Құпиясөз"
          />
          <a href="#" className="auth-forgot">
            Құпиясөзді ұмыттыңыз ба?
          </a>
          <button type="submit" className="auth-button">
            Кіру
          </button>
        </form>
      </div>
    </div>
  );
};

export default Authentication;