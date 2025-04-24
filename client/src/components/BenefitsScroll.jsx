import React, { useRef } from "react";
import '../styles/BenefitsScroll.css';

const benefits = [
  {
    image: "/public/Goals.png",
    title: "Чёткие цели",
    text: "Ставь реалистичные цели и отслеживай прогресс шаг за шагом.",
  },
  {
    image: "/public/Motivation.png",
    title: "Мотивация каждый день",
    text: "Наша система напоминаний и достижений держит тебя в тонусе.",
  },
  {
    image: "/public/Health.png",
    title: "Забота о здоровье",
    text: "Регулярные тренировки улучшают сердечную и дыхательную систему.",
  },
  {
    image: "/public/Schedule.png",
    title: "Гибкий график",
    text: "Тренируйся тогда, когда удобно — дома, в зале или на улице.",
  },
  {
    image: "/public/Habits.png",
    title: "Формирование привычки",
    text: "Занятия по расписанию помогают встроить фитнес в твою жизнь.",
  },
  {
    image: "/public/Progress.png",
    title: "Визуальный прогресс",
    text: "Смотри, как растут твои результаты с каждым днём!",
  },
];

export default function BenefitsScroll() {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    const container = scrollRef.current;
    const scrollAmount = 400;
    if (container) {
      container.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
  };

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">Почему тренироваться с нами</h2>

      {/* ОБЁРТКА ТОЛЬКО ВОКРУГ scroll-container */}
      <div className="scroll-wrapper">
        <div className="arrow left" onClick={() => scroll('left')}>&lt;</div>
        <div className="arrow right" onClick={() => scroll('right')}>&gt;</div>

        <div className="scroll-container scrollbar-hide" ref={scrollRef}>
          {benefits.map((b, index) => (
            <div key={index} className="benefit-card">
              <img src={b.image} alt={b.title} className="w-full h-32 object-cover" />
              <div className="benefit-card-content">
                <h3 className="benefit-card-title">{b.title}</h3>
                <p className="benefit-card-description">{b.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}