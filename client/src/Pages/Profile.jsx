import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import { toast } from "react-hot-toast";
import "../styles/Profile.css";
import Navbar from "../components/Navbar"; // Импорт Navbar

const Profile = () => {
  const [nickname, setNickname] = useState("");
  const [preferences, setPreferences] = useState(null);
  const [caloriePreferences, setCaloriePreferences] = useState(null);

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

  useEffect(() => {
    const storedNickname = localStorage.getItem("nickname");
    if (storedNickname) setNickname(storedNickname);

    const userId = getUserIdFromToken();
    if (!userId) {
      toast.error("Пользователь не найден. Войдите снова.");
      return;
    }

    const storedPreferences = localStorage.getItem("caloriePreferences");
    if (storedPreferences) {
      setCaloriePreferences(JSON.parse(storedPreferences));
    }

    fetch(`http://localhost:5000/api/preferences/${userId}`)
      .then((res) => {
        if (!res.ok) throw new Error("Не удалось загрузить данные");
        return res.json();
      })
      .then((data) => setPreferences(data))
      .catch((err) => {
        console.error(err);
        toast.error("Ошибка загрузки предпочтений");
      });
  }, []);

  return (
    <>
      <Navbar /> {/* Добавлен Navbar */}
      <div className="profile-container">
        <h1 className="profile-title">Профиль</h1>
        <p className="profile-info">
          <strong>Имя пользователя:</strong> {nickname || "Не указан"}
        </p>

        {preferences && caloriePreferences ? (
          <>
            <ul className="preferences-list">
              <li><strong>Жынысы:</strong> {preferences.gender}</li>
              <li><strong>Жасы:</strong> {caloriePreferences.age}</li>
              <li><strong>Мақсат:</strong> {preferences.goal}</li>
              <li><strong>Дене дайындығы:</strong> {preferences.fitness}</li>
            </ul>

            <ul className="calorie-preferences-list">
              <li><strong>Калориялар:</strong> {Math.round(caloriePreferences.totalCalories)} ккал</li>
              <li><strong>Бой:</strong> {caloriePreferences.height} см</li>
              <li><strong>Салмақ:</strong> {caloriePreferences.weight} кг</li>
              <li><strong>Вода (мл):</strong> {caloriePreferences.waterIntake} мл</li>
            </ul>
          </>
        ) : (
          <p className="loading-text">Загрузка предпочтений...</p>
        )}
      </div>
    </>
  );
};

export default Profile;
