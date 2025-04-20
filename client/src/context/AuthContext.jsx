import React, { createContext, useContext, useState } from 'react';

// Создание контекста
const AuthContext = createContext();

// Создание провайдера для контекста
export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // Состояние для хранения информации о пользователе

  // Функция для входа
  const login = (userData) => {
    setUser(userData); // Сохраняем информацию о пользователе
    localStorage.setItem('user', JSON.stringify(userData)); // Сохраняем данные в localStorage или sessionStorage
  };

  // Функция для выхода
  const logout = () => {
    setUser(null); // Очищаем информацию о пользователе
    localStorage.removeItem('user'); // Удаляем данные из хранилища
    // Можно также удалить токен, если он хранится в localStorage или cookies
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};

// Хук для использования контекста
export const useAuth = () => useContext(AuthContext);
