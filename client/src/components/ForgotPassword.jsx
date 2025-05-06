import React, { useState } from 'react';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useNavigate, useSearchParams } from 'react-router-dom';
import styles from '../styles/ForgotPassword.module.css'; // Подключение стилей

const ForgotPassword = () => {
  const [email, setEmail] = useState('');
  const [token, setToken] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [error, setError] = useState('');

  const handleForgotPassword = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/auth/forgot-password', { email });
      toast.success('Парольды қалпына келтіру хат жіберілді');
    } catch (err) {
      toast.error('Хат жіберуде қате');
    }
  };

  const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      await axios.post('http://localhost:5000/auth/reset-password', { token, newPassword });
      toast.success('Пароль сәтті қалпына келтірілді');
    } catch (err) {
      toast.error('Парольді қалпына келтіруде қате');
    }
  };

  return (
    <div className={styles.container}>
      <form onSubmit={handleForgotPassword} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Электрондық пошта"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className={styles.input}
          />
        </div>
        <button type="submit" className={styles.button}>Код жіберу</button>
      </form>

      <form onSubmit={handleResetPassword} className={styles.form}>
        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Код"
            value={token}
            onChange={(e) => setToken(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Жаңа пароль"
            value={newPassword}
            onChange={(e) => setNewPassword(e.target.value)}
            required
            className={styles.input}
          />
        </div>

        <button type="submit" className={styles.button}>Парольді қалпына келтіру</button>
      </form>

      {error && <p className={styles.error}>{error}</p>}
    </div>
  );
};

export default ForgotPassword;