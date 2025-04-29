import React, { useState, useEffect } from "react";

const Timer = () => {
  const [time, setTime] = useState(0); // Время в секундах
  const [isRunning, setIsRunning] = useState(false);

  const startTimer = () => {
    if (time > 0 && !isRunning) {
      setIsRunning(true);
    }
  };

  const stopTimer = () => {
    setIsRunning(false);
  };

  const resetTimer = () => {
    setIsRunning(false);
    setTime(0);
  };

  const handleMinutesChange = (e) => {
    const minutes = parseInt(e.target.value, 10);
    if (!isNaN(minutes)) {
      setTime((prevTime) => (prevTime % 60) + minutes * 60);
    }
  };

  const handleSecondsChange = (e) => {
    const seconds = parseInt(e.target.value, 10);
    if (!isNaN(seconds)) {
      setTime((prevTime) => Math.floor(prevTime / 60) * 60 + seconds);
    }
  };

  useEffect(() => {
    let interval;
    if (isRunning && time > 0) {
      interval = setInterval(() => {
        setTime((prevTime) => prevTime - 1);
      }, 1000);
    } else if (time === 0) {
      setIsRunning(false);
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isRunning, time]);

  const formatTime = (time) => {
    const minutes = String(Math.floor(time / 60)).padStart(2, "0");
    const seconds = String(time % 60).padStart(2, "0");
    return { minutes, seconds };
  };

  const { minutes, seconds } = formatTime(time);

  return (
    <div className="timer">
      <div className="timer-display">
        <input
          type="number"
          value={minutes}
          onChange={handleMinutesChange}
          min="0"
          max="59"
          className="timer-input"
        />
        :
        <input
          type="number"
          value={seconds}
          onChange={handleSecondsChange}
          min="0"
          max="59"
          className="timer-input"
        />
      </div>
      <div className="timer-buttons">
        <button onClick={startTimer} disabled={isRunning || time === 0}>
          Старт
        </button>
        <button onClick={stopTimer} disabled={!isRunning}>
          Стоп
        </button>
        <button onClick={resetTimer}>Сброс</button>
      </div>
    </div>
  );
};

export default Timer;