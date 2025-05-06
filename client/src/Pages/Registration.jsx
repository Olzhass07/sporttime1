import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import styles from '../styles/Registration.module.css';
import { toast } from 'react-hot-toast';
import EmailConfirm from '../components/EmailConfirm';

const Registration = () => {
  const navigate = useNavigate();

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [passwordCheck, setPasswordCheck] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [showPasswordCheck, setShowPasswordCheck] = useState(false);
  const [error, setError] = useState('');
  const [emailSent, setEmailSent] = useState(false); // Флаг для отслеживания отправки кода
  const [emailVerified, setEmailVerified] = useState(false);
  const [showEmailConfirm, setShowEmailConfirm] = useState(false);

  const goToLogin = () => {
    navigate('/auth');
  };

  const goToHome = () => {
    navigate('/');
  };

  // Функция для отправки кода подтверждения на почту
  const sendVerificationEmail = async () => {
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Дұрыс электрондық поштаны енгізіңіз.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/send-verification-email', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error('Қате жіберуде');
      }

      setEmailSent(true); // Устанавливаем флаг отправки
      setShowEmailConfirm(true); // Показываем форму для ввода кода
      toast.success('Растау коды поштаңызға жіберілді');
    } catch (err) {
      console.error('Қате:', err);
      setError('Хат жіберу кезінде қате шықты. Қайталап көріңіз.');
    }
  };

  // Функция для обработки отправки формы регистрации
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!emailVerified) {
      setError('Алдымен электрондық поштаңызды растаңыз.');
      return;
    }

    if (username.length < 3) {
      setError('Пайдаланушы аты кем дегенде 3 таңбадан тұруы керек.');
      return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
      setError('Дұрыс электрондық поштаны енгізіңіз.');
      return;
    }
    if (password.length < 6) {
      setError('Құпиясөз кем дегенде 6 таңбадан тұруы керек.');
      return;
    }
    if (password !== passwordCheck) {
      setError('Құпиясөздер сәйкес келмейді.');
      return;
    }

    try {
      const response = await fetch('http://localhost:5000/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        const data = await response.json();
        setError(data.message || 'Тіркелу қатесі');
        return;
      }

      const data = await response.json();
      localStorage.setItem('token', data.token);
      localStorage.setItem('nickname', username);

      toast.success('Сіз сәтті тіркелдіңіз!');
      navigate('/auth');
    } catch (err) {
      console.error('Тіркелу қатесі:', err);
      setError('Тіркелу кезінде қате пайда болды. Қайталап көріңіз.');
    }
  };

  return (
    <div className={styles.authContainer}>
      <div className={styles.authBox}>
        <div className={styles.backArrow} onClick={goToHome}>
          <i className="fas fa-arrow-left"></i>
        </div>

        <div className={styles.authImage}>
          <img src="../icon.jpg" alt="Логотип" className={styles.authPhoto} />
        </div>
        <h1 className={styles.authTitle}>Жаңа аккаунт жасаңыз</h1>

        <form className={styles.authForm} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="username" className={styles.authLabel}>Пайдаланушы аты</label>
            <input
              type="text"
              id="username"
              className={styles.authInput}
              placeholder="Атыңыз"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email" className={styles.authLabel}>Электрондық пошта</label>
            <input
              type="email"
              id="email"
              className={styles.authInput}
              placeholder="Электрондық пошта"
              value={email}
              onChange={(e) => {
                setEmail(e.target.value);
                setEmailSent(false); // Сбрасываем флаг отправки
                setEmailVerified(false); // Сбрасываем флаг подтверждения
              }}
            />
          </div>

          <div className={styles.inputGroup}>
            <button
              type="button"
              className={styles.verifyEmailButton}
              onClick={sendVerificationEmail}
              disabled={emailSent} // Кнопка не активна, если код уже отправлен
            >
              Электрондық поштаны растау
            </button>
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="password" className={styles.authLabel}>Құпиясөз</label>
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

          <div className={styles.inputGroup}>
            <label htmlFor="passwordCheck" className={styles.authLabel}>Құпиясөзді растаңыз</label>
            <div className={styles.passwordContainer}>
              <input
                type={showPasswordCheck ? 'text' : 'password'}
                id="passwordCheck"
                className={styles.authInput}
                placeholder="Құпиясөзді қайталау"
                value={passwordCheck}
                onChange={(e) => setPasswordCheck(e.target.value)}
              />
              <span
                className={styles.eyeIcon}
                onClick={() => setShowPasswordCheck(!showPasswordCheck)}
              >
                {showPasswordCheck ? <FaEyeSlash /> : <FaEye />}
              </span>
            </div>
          </div>

          {error && <p className={styles.authError}>{error}</p>}

          {emailVerified && (
            <p className={styles.authSuccess}>Электрондық пошта расталды ✅</p>
          )}

          <button type="submit" className={styles.authButton}>
            Тіркелу
          </button>
        </form>

        <p className={styles.authSubtitle}>
          Аккаунтыңыз бар ма?{' '}
          <a
            href="#"
            className={styles.authLink}
            onClick={(e) => {
              e.preventDefault();
              goToLogin();
            }}
          >
            Кіру
          </a>
        </p>
      </div>

      {showEmailConfirm && (
        <EmailConfirm
          email={email}
          onVerified={(verified) => {
            setEmailVerified(verified); // Обновляем статус подтверждения email
            setShowEmailConfirm(false); // Закрываем окно подтверждения
          }}
        />
      )}
    </div>
  );
};

export default Registration;