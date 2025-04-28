import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import "../styles/ProgramDetails.css";

const programs = [
  {
    id: "massgain",
    title: "Программа для набора массы (Hypertrophy Training)",
    description: "Увеличение мышечной массы.",
    image: "../public/massgain.jpg"
  },
  {
    id: "fatloss",
    title: "Программа для сжигания жира (Fat Loss)",
    description: "Снижение жировой массы и улучшение общей физической формы.",
    image: "../public/losefat.jpg"
  },
  {
    id: "strength",
    title: "Программа для улучшения силы (Strength Training)",
    description: "Развитие общей физической формы и подвижности.",
    image: "../public/strenght.webp"
  },
  {
    id: "endurance",
    title: "Программа для улучшения выносливости (Endurance Training)",
    description: "Повышение общей выносливости и кардио-формы.",
    image: "../public/endurance.jpg"
  },
  {
    id: "flexibility",
    title: "Программа для улучшения гибкости (Flexibility Training)",
    description: "Повышение гибкости и подвижности.",
    image: "../public/flexibility.jpg"
  },
  {
    id: "rehabilitation",
    title: "Программа для реабилитации (Rehabilitation Training)",
    description: "Легкие упражнения на укрепление мышц и восстановление подвижности.",
    image: "../public/rehabilitation.jpg"
  }
];

const ProgramDetails = () => {
  const { programId } = useParams(); // Получаем параметр из URL
  const program = programs.find((p) => p.id === programId); // Находим программу по ID

  if (!program) {
    return <div>Программа не найдена</div>;
  }

  return (
    <div className="program-details-container">
      <Navbar />
      <div className="program-details">
        <img src={program.image} alt={program.title} className="program-image" />
        <h1 className="program-title">{program.title}</h1>
        <p className="program-description">{program.description}</p>
      </div>
    </div>
  );
};

export default ProgramDetails;