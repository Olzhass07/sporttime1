import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { useAuth } from '../context/AuthContext.jsx';
import styles from '../styles/Authentication.module.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Authentication = () => {
  const navigate = useNavigate();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false); // <-- ДОБАВИЛИ
  const [error, setError] = useState('');

  const goToRegister = () => {
    navigate('/register');
  };

  const goToHome = () => {
    navigate('/');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('http://localhost:5000/auth/login', { email, password });

      if (response.status === 200) {
        login(response.data.token);
        navigate('/');
      }
    } catch (err) {
      setError('Неверный email или пароль');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <div className={styles.backArrow} onClick={goToHome}>
          <i className="fas fa-arrow-left"></i>
        </div>

        <img src="../icon.jpg" alt="SportTime logo" className={styles.authLogo} />
        <h1 className={styles.authTitle}>Кіру</h1>
        <p className={styles.authSubtitle}>
          Немесе{' '}
          <a href="#" className={styles.authLink} onClick={(e) => { e.preventDefault(); goToRegister(); }}>
            Жаңа аккаунт жасаңыз
          </a>
        </p>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.authLabel}>
              Электрондық пошта
            </label>
            <input
              type="email"
              id="email"
              className={styles.authInput}
              placeholder="Электрондық пошта"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
  <label htmlFor="password" className={styles.authLabel}>
    Құпиясөз
  </label>
  <div className={styles.passwordContainer}>
    <input
      type={showPassword ? 'text' : 'password'}
      id="password"
      className={styles.authInput}
      placeholder="Құпиясөз"
      value={password}
      onChange={(e) => setPassword(e.target.value)}
    />
    <span
      className={styles.eyeIcon}
      onClick={() => setShowPassword(!showPassword)}
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </span>
  </div>
</div>

          <a href="#" className={styles.authForgot}>
            Құпиясөзді ұмыттыңыз ба?
          </a>
          <button type="submit" className={styles.authButton}>
            Кіру
          </button>
        </form>

        {error && <p className={styles.authError}>{error}</p>}
      </div>
    </div>
  );
};

export default Authentication;