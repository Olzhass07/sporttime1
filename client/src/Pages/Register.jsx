import React from 'react';
import "../styles/Auth.css";

const Register = () => {
  return (
    <div className="auth-container">
      <h2>Тіркелу</h2>
      <form>
        <input type="text" placeholder="Атыңыз" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Құпиясөз" required />
        <button type="submit">Тіркелу</button>
      </form>
    </div>
  );
};

export default Register;
