import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer";
import "../styles/ProgramDetails.css";
import programs from "../data/programDetails"; // <-- ВАЖНО: импортируем массив

const ProgramDetails = () => {
  const { programId } = useParams(); // Получаем ID из URL
  const program = programs.find((p) => p.id === programId); // Ищем нужную программу

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
        <div className="program-workouts">
          {program.workouts.map((workout) => (
            <div key={workout.day} className="workout-day">
              <h3>День {workout.day}</h3>
              {workout.exercises.map((exercise, index) => (
                <div key={index} className="exercise-container">
                  <h4>{exercise.name}</h4>
                  <p>{exercise.description}</p>
                  <p><strong>Орындау уақыты:</strong> {exercise.duration}</p>
                  <p><strong>Тәсілдер саны:</strong> {exercise.sets}</p>
                  <img src={exercise.gif} alt={exercise.name} className="exercise-gif" />
                  <Timer />
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgramDetails;