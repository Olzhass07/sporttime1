import React, { useState } from "react";
import "../styles/Generator.css";
import Navbar from "../components/Navbar";
import programs from "../data/programsList";
import { toast, Toaster } from "react-hot-toast";
import { jwtDecode } from "jwt-decode";

const getUserIdFromToken = () => {
  const token = localStorage.getItem("authToken");
  if (!token) return null;

  try {
    const decoded = jwtDecode(token);
    return decoded.userId;
  } catch (error) {
    console.error("Ошибка при декодировании токена:", error);
    return null;
  }
};

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
    const userId = getUserIdFromToken();

    if (!userId) {
      toast.error("Не удалось определить пользователя. Пожалуйста, войдите в систему.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5000/api/preferences", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userId,
          ...answers,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log("Данные успешно сохранены:", data);
        toast.success("Данные успешно сохранены!");
      } else {
        console.error("Ошибка при сохранении данных");
        toast.error("Ошибка при сохранении данных");
      }
    } catch (error) {
      console.error("Ошибка:", error);
      toast.error("Ошибка при сохранении данных");
    }
  };

  const filterWorkouts = () => {
    const result = programs.filter((program) => {
      if (answers.bodyType === "Арық" && program.id === "massgain") return true;
      if (answers.bodyType === "Толық" && program.id === "fatloss") return true;
      if (answers.goal === "Форманы сақтау" && program.id === "flexibility") return true;
      if (answers.fitness === "Бастапқы деңгей" && program.id === "rehabilitation") return true;
      if (answers.goal === "Бұлшық ет өсіру" && program.id === "strength") return true;
      if (answers.goal === "Арықтау" && program.id === "endurance") return true;
      return false;
    });
    setFilteredWorkouts(result);
    if (result.length > 0) toast.success("Подходящие тренировки найдены!");
    else toast.error("Подходящих тренировок не найдено.");
  };

  return (
    <>
      <Navbar />
      <div className="container">
        <div className="progress-bar">
          {steps.map((step, index) => (
            <div
              key={step.key}
              className={`progress-step ${index === currentStep ? "active" : ""} ${index < currentStep ? "completed" : ""}`}
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
                <button key={option} className="option-button" onClick={() => handleOptionClick(option)}>
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
