import React, { useState } from 'react';
import '../styles/CalorieCalculator.css';
import Navbar from '../components/Navbar';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Регистрируем компоненты для диаграммы
ChartJS.register(ArcElement, Tooltip, Legend);

const CalorieCalculator = () => {
  const [weight, setWeight] = useState('');
  const [height, setHeight] = useState('');
  const [age, setAge] = useState('');
  const [gender, setGender] = useState('male');
  const [activityLevel, setActivityLevel] = useState('sedentary');
  const [goal, setGoal] = useState('maintain');
  const [calories, setCalories] = useState(null);
  const [macros, setMacros] = useState(null);
  const [waterIntake, setWaterIntake] = useState(null);

  const calculateCalories = () => {
    let bmr;

    if (gender === 'male') {
      bmr = 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
      bmr = 10 * weight + 6.25 * height - 5 * age - 161;
    }

    let activityMultiplier;
    switch (activityLevel) {
      case 'sedentary':
        activityMultiplier = 1.2;
        break;
      case 'light':
        activityMultiplier = 1.375;
        break;
      case 'moderate':
        activityMultiplier = 1.55;
        break;
      case 'active':
        activityMultiplier = 1.725;
        break;
      case 'veryActive':
        activityMultiplier = 1.9;
        break;
      default:
        activityMultiplier = 1.2;
    }

    let totalCalories = bmr * activityMultiplier;

    if (goal === 'lose') {
      totalCalories -= 500;
    } else if (goal === 'gain') {
      totalCalories += 500;
    }

    // Макроэлементы: 40% белки, 30% жиры, 30% углеводы
    const proteinGrams = (totalCalories * 0.4) / 4;
    const fatGrams = (totalCalories * 0.3) / 9;
    const carbsGrams = (totalCalories * 0.3) / 4;

    // Энергетическая ценность
    const proteinCalories = proteinGrams * 4;
    const fatCalories = fatGrams * 9;
    const carbsCalories = carbsGrams * 4;

    // Расчёт нормы воды: 30 мл на 1 кг веса
    const water = weight * 30; // в мл

    setCalories(totalCalories);
    setMacros({
      proteinGrams,
      fatGrams,
      carbsGrams,
      proteinCalories,
      fatCalories,
      carbsCalories,
    });
    setWaterIntake(water);
  };

  const chartData = {
    labels: ['Белки (ккал)', 'Жиры (ккал)', 'Көмірсулар (ккал)'],
    datasets: [
      {
        data: [
          macros?.proteinCalories,
          macros?.fatCalories,
          macros?.carbsCalories,
        ],
        backgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
        hoverBackgroundColor: ['#ff6384', '#36a2eb', '#ffcd56'],
      },
    ],
  };

  return (
    <>
      <Navbar />
      <div className="calorie-calculator">
        <h1>Калория калькуляторы</h1>

        <div className="form-group gender-buttons">
          <label>Жынысыңыз:</label>
          <div className="gender-buttons">
            <button
              className={gender === 'male' ? 'active' : ''}
              onClick={() => setGender('male')}
              type="button"
            >
              Ер
            </button>
            <button
              className={gender === 'female' ? 'active' : ''}
              onClick={() => setGender('female')}
              type="button"
            >
              Әйел
            </button>
          </div>
        </div>

        <div className="form-row">
          <div className="form-group">
            <label>Жасыңыз:</label>
            <input
              type="number"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              placeholder="Жасыңызды енгізіңіз"
            />
          </div>

          <div className="form-group">
            <label>Салмақ (кг):</label>
            <input
              type="number"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              placeholder="Салмағыңызды енгізіңіз"
            />
          </div>

          <div className="form-group">
            <label>Бой (см):</label>
            <input
              type="number"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              placeholder="Бойыңызды енгізіңіз"
            />
          </div>
        </div>

        <div className="form-row">
  <div className="form-group activity-level">
    <label>Белсенділік деңгейі:</label>
    <select value={activityLevel} onChange={(e) => setActivityLevel(e.target.value)}>
      <option value="sedentary">Төмен (офис жұмысы)</option>
      <option value="light">Жеңіл белсенділік</option>
      <option value="moderate">Орташа белсенділік</option>
      <option value="active">Жоғары белсенділік</option>
      <option value="veryActive">Өте жоғары белсенділік</option>
    </select>
  </div>

  <div className="form-group goal">
    <label>Мақсат:</label>
    <select value={goal} onChange={(e) => setGoal(e.target.value)}>
      <option value="maintain">Салмақты сақтау</option>
      <option value="lose">Салмақ тастау</option>
      <option value="gain">Салмақ қосу</option>
    </select>
  </div>
</div>


        <button onClick={calculateCalories}>Есептеу</button>

        {calories !== null && (
          <>
            <p>Күнделікті қажетті калория: <strong>{Math.round(calories)} ккал</strong></p>

         

           
            {macros && (
              <div className="macros-chart">
                <Doughnut data={chartData} />
              </div>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default CalorieCalculator;
