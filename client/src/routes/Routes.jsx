import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication';
import Registration from '../Pages/Registration'; // Импорт страницы регистрации
import CalorieCalculator from '../Pages/CalorieCalculator'; // Импорт страницы "Калория калькулятор"
import PrivacyPolicy from '../Pages/PrivacyPolicy'; // Импорт страницы "Политика конфиденциальности"
import TrainingPrograms from "../Pages/TrainingPrograms"; 
import TermsOfUse from "../Pages/TermsOfUse";

const AppRoutes = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/auth" element={<Authentication />} />
        <Route path="/register" element={<Registration />} />
        <Route path="/calorie-calculator" element={<CalorieCalculator />} />
        <Route path="/privacy-policy" element={<PrivacyPolicy />} />
        <Route path="/workout" element={<TrainingPrograms />} />
        <Route path="/terms-of-use" element={<TermsOfUse />} />
      </Routes>
    </Router>
  );
};

export default AppRoutes;