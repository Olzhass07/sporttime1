import React, { useRef } from "react";
import '../styles/BenefitsScroll.css';

const benefits = [
  {
    image: "/public/Goals.png",
    title: "Тура мақсаттар",
    text: "Шынайы мақсаттар қойып, прогресті біртіндеп бақылаңыз.",
  },
  {
    image: "/public/Motivation.png",
    title: "Күн сайынғы мотивация",
    text: "Ескертулер мен жетістіктер жүйеміз сізді әрдайым сергек ұстайды.",
  },
  {
    image: "/public/Health.png",
    title: "Денсаулыққа қамқорлық",
    text: "Тұрақты жаттығулар жүрек пен тыныс алу жүйесін жақсартады.",
  },
  {
    image: "/public/Schedule.png",
    title: "Икемді график",
    text: "Өзіңізге ыңғайлы уақытта жаттығыңыз — үйде, залда немесе көшеде.",
  },
  {
    image: "/public/Habits.png",
    title: "Қалыптасқан әдет",
    text: "Кесте бойынша жаттығу фитнесті өмір салтыңызға айналдыруға көмектеседі.",
  },
  {
    image: "/public/Progress.png",
    title: "Көрнекі прогресс",
    text: "Нәтижелеріңнің күн сайын қалай өсіп жатқанын көр!",
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
      <h2 className="text-2xl font-bold mb-4">Бізбен жаттығудың артықшылықтары</h2>

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