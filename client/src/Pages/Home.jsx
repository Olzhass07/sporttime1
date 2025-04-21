import React from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar.jsx";
import useAuth from "../hooks/useAuth"; // добавляем хук
import "../styles/Home.css";

const Home = () => {
  const navigate = useNavigate();
  const { isAuthenticated } = useAuth(); // Получаем статус авторизации

  // Обработчик нажатия кнопки "Жаттығуды бастау!"
  const handleStartWorkout = () => {
    if (isAuthenticated) {
      navigate("/workout"); // Переход на страницу тренировки, если авторизован
    } else {
      navigate("/auth"); // Перенаправление на страницу авторизации, если не авторизован
    }
  };

  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <div className="home-slogan">
          <p className="gradient-text">Мақсатың айқын —</p>
          <p className="gradient-text">жолың бізбен жарқын!</p>
        </div>

        <div>
        <button className="home-button" onClick={handleStartWorkout}>
          Жаттығуды бастау!
          <span className="arrow-icon">→</span>
          </button>
        </div>

        <div className="home-image-container">
          <img
            alt="A man working out with battle ropes in a gym"
            className="home-image"
            src="./home.jpg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
