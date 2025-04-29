import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import Timer from "../components/Timer"; // Импортируем компонент таймера
import "../styles/ProgramDetails.css";

const programs = [
  {
    id: "massgain",
    title: "Программа для набора массы (Hypertrophy Training)",
    description: "Увеличение мышечной массы с помощью базовых и изолирующих упражнений.",
    image: "../public/massgain.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Жим лежа",
            description: "Классическое упражнение для развития грудных мышц, трицепсов и передних дельт.",
            duration: "3-4 минуты на подход",
            sets: "4 подхода по 8-12 повторений",
            gif: "/massgain.gif",
          },
          {
            name: "Тяга штанги в наклоне",
            description: "Упражнение для развития широчайших мышц спины и задних дельт.",
            duration: "2-3 минуты на подход",
            sets: "3 подхода по 10-12 повторений",
            gif: "/barbell-row.gif",
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Приседания со штангой",
            description: "Базовое упражнение для развития квадрицепсов, ягодичных мышц и задней поверхности бедра.",
            duration: "4-5 минут на подход",
            sets: "4 подхода по 8-10 повторений",
            gif: "/squats.gif",
          },
          {
            name: "Румынская тяга",
            description: "Упражнение для развития задней поверхности бедра и ягодичных мышц.",
            duration: "3-4 минуты на подход",
            sets: "3 подхода по 10-12 повторений",
            gif: "/romanian-deadlift.gif",
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Жим гантелей сидя",
            description: "Упражнение для развития дельтовидных мышц.",
            duration: "2-3 минуты на подход",
            sets: "3 подхода по 10-12 повторений",
            gif: "/dumbbell-shoulder-press.gif",
          },
          {
            name: "Подъем на бицепс",
            description: "Упражнение для развития бицепсов.",
            duration: "1-2 минуты на подход",
            sets: "3 подхода по 12-15 повторений",
            gif: "/bicep-curl.gif",
          },
        ],
      },
    ],
  },
  {
    id: "fatloss",
    title: "Программа для сжигания жира (Fat Loss)",
    description: "Снижение жировой массы с помощью кардио и высокоинтенсивных тренировок.",
    image: "../public/losefat.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Бег на месте",
            description: "Кардио-упражнение для повышения выносливости и сжигания калорий.",
            duration: "5-10 минут",
            sets: "1 подход",
            gif: "/running.gif",
          },
          {
            name: "Прыжки со скакалкой",
            description: "Эффективное упражнение для сжигания жира и улучшения координации.",
            duration: "3-5 минут",
            sets: "3 подхода",
            gif: "/jump-rope.gif",
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Бёрпи",
            description: "Комплексное упражнение для всего тела, которое помогает сжигать калории.",
            duration: "2-3 минуты",
            sets: "3 подхода по 10 повторений",
            gif: "/burpee.gif",
          },
          {
            name: "Планка с приподнятием ног",
            description: "Упражнение для укрепления мышц кора.",
            duration: "1-2 минуты",
            sets: "3 подхода",
            gif: "/plank.gif",
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Выпады с гантелями",
            description: "Упражнение для укрепления ног и ягодиц.",
            duration: "3-4 минуты",
            sets: "3 подхода по 12 повторений",
            gif: "/lunges.gif",
          },
          {
            name: "Скалолаз",
            description: "Кардио-упражнение для укрепления мышц кора и ног.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/mountain-climber.gif",
          },
        ],
      },
    ],
  },
  {
    id: "strength",
    title: "Программа для улучшения силы (Strength Training)",
    description: "Развитие общей физической формы и подвижности.",
    image: "../public/strenght.webp",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Становая тяга",
            description: "Базовое упражнение для развития силы всего тела.",
            duration: "4-5 минут",
            sets: "4 подхода по 6-8 повторений",
            gif: "/deadlift.gif",
          },
          {
            name: "Жим штанги стоя",
            description: "Упражнение для развития плеч и трицепсов.",
            duration: "3-4 минуты",
            sets: "3 подхода по 8-10 повторений",
            gif: "/overhead-press.gif",
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Тяга штанги к поясу",
            description: "Упражнение для укрепления спины.",
            duration: "3-4 минуты",
            sets: "3 подхода по 10 повторений",
            gif: "/barbell-row1.gif",
          },
          {
            name: "Подтягивания",
            description: "Упражнение для развития широчайших мышц спины.",
            duration: "2-3 минуты",
            sets: "3 подхода по максимуму",
            gif: "/pull-ups.gif",
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Приседания со штангой",
            description: "Базовое упражнение для ног и ягодиц.",
            duration: "4-5 минут",
            sets: "4 подхода по 8-10 повторений",
            gif: "/squats1.gif",
          },
          {
            name: "Жим лежа",
            description: "Упражнение для грудных мышц.",
            duration: "3-4 минуты",
            sets: "4 подхода по 8-10 повторений",
            gif: "/bench-press1.gif",
          },
        ],
      },
    ],
  },
  {
    id: "endurance",
    title: "Программа для улучшения выносливости (Endurance Training)",
    description: "Повышение общей выносливости и кардио-формы.",
    image: "../public/endurance.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Бег на длинные дистанции",
            description: "Упражнение для повышения выносливости и укрепления сердечно-сосудистой системы.",
            duration: "30-40 минут",
            sets: "1 подход",
            gif: "/long-distance-run.gif",
          },
          {
            name: "Прыжки на месте",
            description: "Упражнение для повышения выносливости и укрепления ног.",
            duration: "5 минут",
            sets: "3 подхода",
            gif: "/jumping.gif",
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Интервальный бег",
            description: "Чередование быстрого и медленного бега для повышения выносливости.",
            duration: "20 минут",
            sets: "1 подход",
            gif: "/interval-run.gif",
          },
          {
            name: "Скалолаз",
            description: "Кардио-упражнение для укрепления мышц кора и ног.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/mountain-climber1.gif",
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Прыжки через скакалку",
            description: "Упражнение для повышения выносливости и сжигания калорий.",
            duration: "10 минут",
            sets: "1 подход",
            gif: "/jump-rope1.gif",
          },
          {
            name: "Бёрпи",
            description: "Комплексное упражнение для всего тела.",
            duration: "2-3 минуты",
            sets: "3 подхода по 10 повторений",
            gif: "/burpee.gif",
          },
        ],
      },
    ],
  },
  {
    id: "flexibility",
    title: "Программа для улучшения гибкости (Flexibility Training)",
    description: "Повышение гибкости и подвижности.",
    image: "../public/flexibility.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Наклоны вперед",
            description: "Упражнение для растяжки задней поверхности бедра.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/forward-bend.gif",
          },
          {
            name: "Растяжка плеч",
            description: "Упражнение для улучшения гибкости плечевых суставов.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/shoulder-stretch.gif",
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Поза кобры",
            description: "Упражнение для растяжки спины и укрепления поясницы.",
            duration: "1-2 минуты",
            sets: "3 подхода",
            gif: "/cobra-pose.gif",
          },
          {
            name: "Растяжка квадрицепсов",
            description: "Упражнение для растяжки передней поверхности бедра.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/quad-stretch.jpeg",
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Поза бабочки",
            description: "Упражнение для растяжки внутренней поверхности бедра.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/butterfly-pose.gif",
          },
          {
            name: "Растяжка подколенных сухожилий",
            description: "Упражнение для улучшения гибкости задней поверхности бедра.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/hamstring-stretch.jpeg",
          },
        ],
      },
    ],
  },
  {
    id: "rehabilitation",
    title: "Программа для реабилитации (Rehabilitation Training)",
    description: "Легкие упражнения на укрепление мышц и восстановление подвижности.",
    image: "../public/rehabilitation.jpg",
    workouts: [
      {
        day: 1,
        exercises: [
          {
            name: "Подъем ног лежа",
            description: "Упражнение для укрепления мышц бедра.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/leg-raise.gif",
          },
          {
            name: "Растяжка спины",
            description: "Упражнение для снятия напряжения в спине.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/back-stretch.gif",
          },
        ],
      },
      {
        day: 2,
        exercises: [
          {
            name: "Повороты корпуса",
            description: "Упражнение для улучшения подвижности позвоночника.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/torso-twist.gif",
          },
          {
            name: "Растяжка шеи",
            description: "Упражнение для снятия напряжения в шее.",
            duration: "1-2 минуты",
            sets: "3 подхода",
            gif: "/neck-stretch.gif",
          },
        ],
      },
      {
        day: 3,
        exercises: [
          {
            name: "Мостик",
            description: "Упражнение для укрепления ягодичных мышц и поясницы.",
            duration: "2-3 минуты",
            sets: "3 подхода",
            gif: "/bridge.gif",
          },
          {
            name: "Растяжка икроножных мышц",
            description: "Упражнение для улучшения гибкости икроножных мышц.",
            duration: "2 минуты",
            sets: "3 подхода",
            gif: "/calf-stretch.gif",
          },
        ],
      },
    ],
  },
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
        <div className="program-workouts">
          {program.workouts.map((workout) => (
            <div key={workout.day} className="workout-day">
              <h3>День {workout.day}</h3>
              {workout.exercises.map((exercise, index) => (
                <div key={index} className="exercise-container">
                  <h4>{exercise.name}</h4>
                  <p>{exercise.description}</p>
                  <p><strong>Время выполнения:</strong> {exercise.duration}</p>
                  <p><strong>Количество подходов:</strong> {exercise.sets}</p>
                  <img src={exercise.gif} alt={exercise.name} className="exercise-gif" />
                  <Timer /> {/* Добавлен таймер */}
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