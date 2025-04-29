import React, { useState } from "react";
import "../styles/TrainingPrograms.css";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import Footer from "../components/Footer";
import { useNavigate } from "react-router-dom"; // Импорт useNavigate

const programs = [
  {
    id: "massgain",
    title: "Программа для набора массы (Hypertrophy Training)",
    description: "Увеличение мышечной массы.",
    image: "../public/massgain.jpg",
  },
  {
    id: "fatloss",
    title: "Программа для сжигания жира (Fat Loss)",
    description: "Снижение жировой массы и улучшение общей физической формы.",
    image: "../public/losefat.jpg",
  },
  {
    id: "strength",
    title: "Программа для улучшения силы (Strength Training)",
    description: "Развитие общей физической формы и подвижности.",
    image: "../public/strenght.webp",
  },
  {
    id: "endurance",
    title: "Программа для улучшения выносливости (Endurance Training)",
    description: "Повышение общей выносливости и кардио-формы",
    image: "../public/endurance.jpg",
  },
  {
    id: "flexibility",
    title: "Программа для улучшения гибкости (Flexibility Training)",
    description: "Повышение гибкости и подвижности.",
    image: "../public/flexibility.jpg",
  },
  {
    id: "rehabilitation",
    title: "Программа для реабилитации (Rehabilitation Training)",
    description: "Легкие упражнения на укрепление мышц и восстановление подвижности.",
    image: "../public/rehabilitation.jpg",
  },
];

export default function TrainingPrograms() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate(); // Инициализация navigate

  const toggleFavorite = (programTitle) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(programTitle)
        ? prevFavorites.filter((title) => title !== programTitle)
        : [...prevFavorites, programTitle]
    );
  };

  return (
    <>
      <div className="training-programs-container">
        <Navbar />
        <h1 className="training-programs-title">Программы тренировок</h1>
        <div className="training-programs-cards-grid">
          {programs.map((program) => (
            <div className="training-programs-card" key={program.id}>
              <img
                src={program.image}
                alt={program.title}
                className="training-programs-card-image"
              />
              <h2 className="training-programs-card-title">{program.title}</h2>
              <p className="training-programs-card-description">
                {program.description}
              </p>
              <div className="training-programs-card-actions">
                <FontAwesomeIcon
                  icon={faHeart}
                  className={`training-programs-heart-icon ${
                    favorites.includes(program.title) ? "active" : ""
                  }`}
                  onClick={() => toggleFavorite(program.title)}
                />
                <button
                  className="training-programs-card-button"
                  onClick={() => navigate(`/program/${program.id}`)} // Перенаправление на страницу программы
                >
                  Подробнее
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <Footer />
    </>
  );
}