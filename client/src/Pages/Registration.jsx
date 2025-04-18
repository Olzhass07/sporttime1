import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import '../styles/Registration.css'; // Подключаем стили

const Registration = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState('');

  const goToLogin = () => {
    navigate('/auth'); // Переход на страницу аутентификации
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Проверка критериев
    if (username.length < 3) {
      setError('Имя пользователя должно быть не менее 3 символов.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Введите корректный email.');
      return;
    }
    if (password.length < 6) {
      setError('Пароль должен быть не менее 6 символов.');
      return;
    }
    if (password !== passwordCheck) {
      setError('Пароли не совпадают.');
      return;
    }

    try {
      // Отправка данных на сервер
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Ошибка регистрации');
        return;
      }

      const data = await response.json();
      console.log('Регистрация успешна:', data);
      navigate('/auth'); // Перенаправляем на страницу логина
    } catch (err) {
      console.error('Ошибка регистрации:', err);
      setError('Ошибка регистрации. Попробуйте снова.');
    }
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
        <form className="auth-form" onSubmit={handleSubmit}>
          <label htmlFor="username" className="auth-label">Имя пользователя:</label>
          <input
            type="text"
            id="username"
            className="auth-input"
            placeholder="Введите имя"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <label htmlFor="email" className="auth-label">Электронная почта:</label>
          <input
            type="email"
            id="email"
            className="auth-input"
            placeholder="Введите email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <label htmlFor="password" className="auth-label">Пароль:</label>
          <div className="password-container">
            <input
              type={showPassword ? 'text' : 'password'}
              id="password"
              className="auth-input"
              placeholder="Введите пароль"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <button
              type="button"
              className="toggle-password"
              onClick={() => setShowPassword(!showPassword)}
            >
              {showPassword ? 'Скрыть' : 'Показать'}
            </button>
          </div>
          <label htmlFor="passwordCheck" className="auth-label">Подтвердите пароль:</label>
          <input
            type="password"
            id="passwordCheck"
            className="auth-input"
            placeholder="Подтвердите пароль"
            value={passwordCheck}
            onChange={(e) => setPasswordCheck(e.target.value)}
          />
          {error && <p className="auth-error">{error}</p>}
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