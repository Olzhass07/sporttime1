import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication';
import Registration from '../Pages/Registration'; // Импорт страницы регистрации
import CalorieCalculator from '../Pages/CalorieCalculator'; // Импорт страницы "Калория калькулятор"
import PrivacyPolicy from '../Pages/PrivacyPolicy'; // Импорт страницы "Политика конфиденциальности"
import TrainingPrograms from "../Pages/TrainingPrograms"; 

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/register" element={<Registration />} /> {/* Маршрут для регистрации */}
        <Route path="/calorie-calculator" element={<CalorieCalculator />} /> {/* Маршрут для калькулятора */}
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/workout" element={<TrainingPrograms />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;