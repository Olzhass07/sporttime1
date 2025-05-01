import React, { useState } from "react";
import "../styles/Generator.css";

const steps = [
  { label: "Жынысыңыз", key: "gender" },
  { label: "Жасыңыз", key: "age" },
  { label: "Мақсат", key: "goal" },
  { label: "Дене күйі", key: "fitness" },
  { label: "Аяқталды", key: "done" },
];

const options = {
  gender: ["Ер адам", "Әйел адам"],
  age: ["18-25", "26-35", "36-45", "46+"],
  goal: ["Арықтау", "Бұлшық ет өсіру", "Форманы сақтау"],
  fitness: ["Бастапқы деңгей", "Орташа", "Жақсы формада"],
};

export default function App() {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState({});

  const stepKey = steps[currentStep].key;

  const handleOptionClick = (value) => {
    setAnswers({ ...answers, [stepKey]: value });
    if (currentStep < steps.length - 1) {
      setCurrentStep(currentStep + 1);
    }
  };

  return (
    <div className="container">
      <div className="progress-bar">
        {steps.map((step, index) => (
          <div
            key={step.key}
            className={`progress-step ${index === currentStep ? "active" : ""}`}
          >
            {index + 1}
          </div>
        ))}
      </div>

      <h2 className="question">{steps[currentStep].label}:</h2>

      {stepKey === "done" ? (
        <div className="summary">
          <h3>Сіз таңдадыңыз:</h3>
          <pre>{JSON.stringify(answers, null, 2)}</pre>
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
        </div>
      )}
    </div>
  );
}
