import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '../Pages/Home';
import Authentication from '../Pages/Authentication';
import Registration from '../Pages/Registration'; // Импорт страницы регистрации
import CalorieCalculator from '../Pages/CalorieCalculator'; // Импорт страницы "Калория калькулятор"
import PrivacyPolicy from '../Pages/PrivacyPolicy'; // Импорт страницы "Политика конфиденциальности"
import TrainingPrograms from "../Pages/TrainingPrograms"; 
import TermsOfUse from "../Pages/TermsOfUse";
import Profile from "../Pages/Profile"; // Импорт страницы "Профиль"
import ProgramDetails from "../Pages/ProgramDetails";
import Generator from "../Pages/Generator"; // Импорт страницы "Генератор"
import ProgramDetails from "../Pages/ProgramDetails"; // Импорт страницы "Детали программы"
import SavedPrograms from "../Pages/SavedPrograms"; // Импорт страницы "Сохраненные программы"


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
        <Route path="/profile" element={<Profile />} />
        <Route path="/program/:programId" element={<ProgramDetails />} />
        <Route path="/generator" element={<Generator />} />
        <Route path="/savedprograms" element={<SavedPrograms />} />

      </Routes>
    </Router>
  );
};

export default AppRoutes;