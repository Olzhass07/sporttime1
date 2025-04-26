import React, { useState } from "react";
import "../styles/TrainingPrograms.css";
import Navbar from "../components/Navbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";

const programs = [
  {
    title: "Программа для набора массы (Hypertrophy Training)",
    description: "Увеличение мышечной массы.",
    image: "../public/massgain.jpg"
  },
  {
    title: "Программа для сжигания жира (Fat Loss)",
    description: "Снижение жировой массы и улучшение общей физической формы.",
    image: "../public/losefat.jpg"
  },
  {
    title: "Программа для улучшения силы (Strength Training)",
    description: "Развитие общей физической формы и подвижности.",
    image: "../public/strenght.webp"
  },
  {
    title: "Программа для улучшения выносливости (Endurance Training)",
    description: "Повышение общей выносливости и кардио-формы",
    image: "../public/endurance.jpg"
  },
  {
    title: "Программа для улучшения гибкости (Flexibility Training)",
    description: "Повышение гибкости и подвижности.",
    image: "../public/flexibility.jpg"
  },
  {
    title: "Программа для реабилитации (Rehabilitation Training)",
    description: "Легкие упражнения на укрепление мышц и восстановление подвижности.",
    image: "../public/rehabilitation.jpg"
  }
];

export default function TrainingPrograms() {
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (programTitle) => {
    setFavorites((prevFavorites) =>
      prevFavorites.includes(programTitle)
        ? prevFavorites.filter((title) => title !== programTitle)
        : [...prevFavorites, programTitle]
    );
  };

  return (
    <div className="training-programs-container">
      <Navbar />
      <h1 className="programs-title">Программы тренировок</h1>
      <div className="cards-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.title} className="program-image" />
            <h2 className="program-title">{program.title}</h2>
            <p className="program-description">{program.description}</p>
            <div className="program-actions">
              <FontAwesomeIcon
                icon={faHeart}
                className={`heart-icon ${
                  favorites.includes(program.title) ? "active" : ""
                }`}
                onClick={() => toggleFavorite(program.title)}
              />
              <button className="program-button">Подробнее</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
