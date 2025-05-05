import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import programs from "../data/programsList"; // если вынесешь программы в отдельный файл
import "../styles/TrainingPrograms.css";

export default function SavedPrograms() {
  const [savedPrograms, setSavedPrograms] = useState([]);

  useEffect(() => {
    const savedIds = JSON.parse(localStorage.getItem("favoritePrograms")) || [];
    const matched = programs.filter((p) => savedIds.includes(p.id));
    setSavedPrograms(matched);
  }, []);

  return (
    <>
      <Navbar />
      <div className="training-programs-container">
        <h1 className="training-programs-title">Жеке жаттығулар</h1>
        {savedPrograms.length === 0 ? (
          <p className="no-favorite-message">Сізде ешқандай таңдалған жаттығулар жоқ.</p> // Сообщение если нет избранных
        ) : (
          <div className="training-programs-cards-grid">
            {savedPrograms.map((program) => (
              <div className="training-programs-card" key={program.id}>
                <img
                  src={program.image}
                  alt={program.title}
                  className="training-programs-card-image"
                />
                <h2 className="training-programs-card-title">{program.title}</h2>
                <p className="training-programs-card-description">{program.description}</p>
                <div className="training-programs-card-actions">
                  <button
                    className="training-programs-card-button"
                    onClick={() => (window.location.href = `/program/${program.id}`)}
                  >
                    Толығырақ
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </>
  );
}