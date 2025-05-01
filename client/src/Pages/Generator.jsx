import React, { useState } from "react";
import "../styles/Generator.css";
import Navbar from "../components/Navbar";
import programs from "../data/programsList"; // Импорт списка программ
import { toast, Toaster } from "react-hot-toast"; // Импорт react-hot-toast

const steps = [
  { label: "Жынысыңыз", key: "gender" },
  { label: "Жасыңыз", key: "age" },
  { label: "Дене бітімі", key: "bodyType" },
  { label: "Мақсат", key: "goal" },
  { label: "Дене күйі", key: "fitness" },
  { label: "Аяқталды", key: "done" },
];

const options = {
  gender: ["Ер адам", "Әйел адам"],
  age: ["18-25", "26-35", "36-45", "46+"],
  bodyType: ["Арық", "Норма", "Толық"],
  goal: ["Арықтау", "Бұлшық ет өсіру", "Форманы сақтау"],
  fitness: ["Бастапқы деңгей", "Орташа", "Жақсы формада"],
};

export default function Generator() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [filteredWorkouts, setFilteredWorkouts] = useState([]);

  const stepKey = steps[currentStep].key;

  const handleOptionClick = (value) => {
    setAnswers({ ...answers, [stepKey]: value });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    if (window.confirm("Вы уверены, что хотите начать заново?")) {
      setCurrentStep(0);
      setAnswers({});
      setFilteredWorkouts([]);
      toast.success("Данные успешно сброшены!");
    }
  };

  const savePreferences = async () => {
    try {
      const response = await fetch("http://localhost:5000/api/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId: 1, // Замените на реальный ID пользователя
          ...answers,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Данные успешно сохранены:", data);
        toast.success("Данные успешно сохранены!"); // Уведомление об успехе
      } else {
        console.error("Ошибка при сохранении данных");
        toast.error("Ошибка при сохранении данных"); // Уведомление об ошибке
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error("Ошибка при сохранении данных"); // Уведомление об ошибке
    }
  };

  const filterWorkouts = () => {
    const result = programs.filter((program) => {
      if (answers.bodyType === "Арық" && program.id === "massgain") {
        return true; // Программа для набора массы
      }
      if (answers.bodyType === "Толық" && program.id === "fatloss") {
        return true; // Программа для сжигания жира
      }
      if (answers.goal === "Форманы сақтау" && program.id === "flexibility") {
        return true; // Программа для гибкости
      }
      if (answers.fitness === "Бастапқы деңгей" && program.id === "rehabilitation") {
        return true; // Программа для реабилитации
      }
      if (answers.goal === "Бұлшық ет өсіру" && program.id === "strength") {
        return true; // Программа для силы
      }
      if (answers.goal === "Арықтау" && program.id === "endurance") {
        return true; // Программа для выносливости
      }
      return false; // Если ничего не подходит
    });
    setFilteredWorkouts(result);
    if (result.length > 0) {
      toast.success("Подходящие тренировки найдены!");
    } else {
      toast.error("Подходящих тренировок не найдено.");
    }
  };

  return (
    <>
      <Navbar />
      <Toaster position="top-right" reverseOrder={false} /> {/* Добавлен Toaster */}
      <div className="container">
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`progress-step 
                ${index === currentStep ? "active" : ""} 
                ${index < currentStep ? "completed" : ""}`}
            >
              {index + 1}
            </div>
          ))}
        </div>

        <div className="content fade-in">
          <h2 className="question">{steps[currentStep].label}:</h2>

          {stepKey === "done" ? (
            <div className="summary">
              <h3>Сіз таңдадыңыз:</h3>
              <ul>
                {Object.entries(answers).map(([key, val]) => (
                  <li key={key}>
                    <strong>{key}:</strong> {val}
                  </li>
                ))}
              </ul>
              <button className="save-button" onClick={savePreferences}>
                Сақтау
              </button>
              <button className="save-button" onClick={filterWorkouts}>
                Тренировкаларды көру
              </button>
              <button className="restart-button" onClick={handleRestart}>
                Қайта өту
              </button>
              {filteredWorkouts.length > 0 && (
                <div className="workouts">
                  <h3>Ұсынылған бағдарламалар:</h3>
                  <ul>
                    {filteredWorkouts.map((program) => (
                      <li key={program.id} className="program-card">
                        <img src={program.image} alt={program.title} className="program-image" />
                        <h3>{program.title}</h3>
                        <p>{program.description}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ) : (
            <div className="options">
              {options[stepKey].map((option) => (
                <button
                  key={option}
                  className="option-button"
                  onClick={() => handleOptionClick(option)}
                >
                  {option}
                </button>
              ))}
              {currentStep > 0 && (
                <button className="back-button" onClick={handleBack}>
                  ⬅ Артқа
                </button>
              )}
            </div>
          )}
        </div>
      </div>
    </>
  );
}
