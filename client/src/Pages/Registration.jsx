import React from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css'; // Подключаем стили

const Registration = () => {
  const navigate = useNavigate();

  const goToLogin = () => {
    navigate('/auth'); // Переход на страницу аутентификации
  };

  return (
    <div className="auth-container" align="center">
      <div className="auth-box">
      <div className="auth-image">
          <img
            src="../icon.jpg" // Укажите путь к вашему изображению
            alt="Ваше изображение"
            className="auth-photo"
          />
        </div>
        <h1 className="auth-title">Жаңа аккаунт құрыңыз</h1>
        <form className="auth-form">
          <label htmlFor="username" className="auth-label">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            className="auth-input"
            placeholder="Введите имя"
          />
          <label htmlFor="email" className="auth-label">Электронная почта:</label>
          <input
            type="email"
            id="email"
            className="auth-input"
            placeholder="Введите email"
          />
          <label htmlFor="password" className="auth-label">Пароль:</label>
          <input
            type="password"
            id="password"
            className="auth-input"
            placeholder="Введите пароль"
          />
          <label htmlFor="passwordCheck" className="auth-label">Подтвердите пароль:</label>
          <input
            type="password"
            id="passwordCheck"
            className="auth-input"
            placeholder="Подтвердите пароль"
          />
          <button type="submit" className="auth-button">Зарегистрироваться</button>
        </form>
        <p className="auth-subtitle">
          Уже есть аккаунт?{' '}
          <a
            href="#"
            className="auth-link"
            onClick={(e) => {
              e.preventDefault(); // Отменяем стандартное поведение ссылки
              goToLogin(); // Переход на страницу аутентификации
            }}
          >
            Войти
          </a>
        </p>
      </div>
    </div>
  );
};

export default Registration;