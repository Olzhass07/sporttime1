import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';  // импортируем хук useAuth
import '../styles/Authentication.css';

const Authentication = () => {
  const navigate = useNavigate();
  const { login } = useAuth();  // доступ к методу login из контекста авторизации

  // Состояния для email, password и ошибки
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const goToRegister = () => {
    navigate('/register'); // Переход на страницу регистрации
  };

  const goToHome = () => {
    navigate('/'); // Переход на главную страницу
  };

  // Обработчик отправки формы
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Отправляем POST-запрос для авторизации
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });

      // Если авторизация успешна, сохраняем токен и обновляем состояние
      if (response.status === 200) {
        login(response.data.token);  // вызываем login из контекста с полученным токеном
        navigate('/');  // Переход на главную страницу (или на страницу, где меню и профиль активируются)
      }
    } catch (err) {
      // Если ошибка (например, неверные данные), показываем сообщение
      setError('Неверный email или пароль');
    }
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
          <a
            href="#"
            className="auth-link"
            onClick={(e) => {
              e.preventDefault();
              goToRegister();
            }}
          >
            Жаңа аккаунт жасаңыз
          </a>
        </p>
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="email" className="auth-label">
            Электрондық пошта
          </label>
          <input
            type="email"
            id="email"
            className="auth-input"
            placeholder="Электрондық пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="auth-label">
            Құпиясөз
          </label>
          <input
            type="password"
            id="password"
            className="auth-input"
            placeholder="Құпиясөз"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <a href="#" className="auth-forgot">
            Құпиясөзді ұмыттыңыз ба?
          </a>
          <button type="submit" className="auth-button">
            Кіру
          </button>
        </form>
        {/* Если ошибка, показываем сообщение */}
        {error && <p className="auth-error">{error}</p>}
      </div>
    </div>
  );
};

export default Authentication;
