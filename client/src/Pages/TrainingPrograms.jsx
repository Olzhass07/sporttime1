import React from "react";
import "../styles/TrainingPrograms.css";


const programs = [
  {
    title: "Сила и масса",
    description: "Программа для увеличения мышечной массы и силы.",
    image: "/images/mass.jpg"
  },
  {
    title: "Жиросжигание",
    description: "Сжигание жира и улучшение выносливости.",
    image: "/images/fatburn.jpg"
  },
  {
    title: "Функциональные тренировки",
    description: "Развитие общей физической формы и подвижности.",
    image: "/images/functional.jpg"
  }
];

export default function TrainingPrograms() {
  return (
    <div className="training-programs-container">
      <h1 className="programs-title">Программы тренировок</h1>
      <div className="cards-grid">
        {programs.map((program, index) => (
          <div className="program-card" key={index}>
            <img src={program.image} alt={program.title} className="program-image" />
            <h2 className="program-title">{program.title}</h2>
            <p className="program-description">{program.description}</p>
            <button className="program-button">Подробнее</button>
          </div>
        ))}
      </div>
    </div>
  );
}
