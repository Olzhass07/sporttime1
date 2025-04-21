import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication';
import Registration from '../Pages/Registration'; // Импорт страницы регистрации
import CalorieCalculator from '../Pages/CalorieCalculator'; // Импорт страницы "Калория калькулятор"

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/register" element={<Registration />} /> {/* Маршрут для регистрации */}
        <Route path="/calorie-calculator" element={<CalorieCalculator />} /> {/* Маршрут для калькулятора */}
      </Routes>
    </Router>
  );
};

export default AppRoutes;