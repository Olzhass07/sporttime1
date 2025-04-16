import React from 'react';
import "../styles/Auth.css"; // если хочешь стили отдельно

const Login = () => {
  return (
    <div className="auth-container">
      <h2>Кіру</h2>
      <form>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Құпиясөз" required />
        <button type="submit">Кіру</button>
      </form>
    </div>
  );
};

export default Login;
