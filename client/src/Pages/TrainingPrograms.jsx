import React from "react";
import "../styles/TrainingPrograms.css";
import Navbar from "../components/Navbar";


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
    image: "/images/functional.jpg"
  },
  {
    title: "Программа для улучшения выносливости (Endurance Training)",
    description: "Повышение общей выносливости и кардио-формы",
    image: "/images/mass.jpg"
  },
  {
    title: "Программа для улучшения гибкости (Flexibility Training)",
    description: "Повышение гибкости и подвижности.",
    image: "/images/fatburn.jpg"
  },
  {
    title: "Программа для реабилитации (Rehabilitation Training)",
    description: "Легкие упражнения на укрепление мышц и восстановление подвижности.",
    image: "/images/functional.jpg"
  }
];

export default function TrainingPrograms() {
  return (
    <div className="training-programs-container">
      <Navbar/>
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
