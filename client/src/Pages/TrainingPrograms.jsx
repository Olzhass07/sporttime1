import React, { useState, useEffect } from "react";
import "../styles/TrainingPrograms.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import programs from "../data/programsList"; // ✅ импорт массива программ

export default function TrainingPrograms() {
  const [favorites, setFavorites] = useState([]);
  const navigate = useNavigate();

  // Загружаем избранные из localStorage
  useEffect(() => {
    const storedFavorites = JSON.parse(localStorage.getItem("favoritePrograms")) || [];
    setFavorites(storedFavorites);
  }, []);

  // Переключаем избранное состояние и сохраняем в localStorage
  const toggleFavorite = (programId) => {
    let updatedFavorites;
    if (favorites.includes(programId)) {
      updatedFavorites = favorites.filter((id) => id !== programId);
    } else {
      updatedFavorites = [...favorites, programId];
    }

    setFavorites(updatedFavorites);
    localStorage.setItem("favoritePrograms", JSON.stringify(updatedFavorites));
  };

  return (
    <>
      <Navbar />
      <div className="training-programs-container">
        <h1 className="training-programs-title">Жаттығу бағдарламалары</h1>
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
                    favorites.includes(program.id) ? "active" : ""
                  }`}
                  onClick={() => toggleFavorite(program.id)}
                />
                <button
                  className="training-programs-card-button"
                  onClick={() => navigate(`/program/${program.id}`)}
                >
                  Толығырақ
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