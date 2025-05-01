const express = require("express");
const prisma = require("@prisma/client").PrismaClient;
const router = express.Router();

const prismaClient = new prisma();

// Эндпоинт для сохранения предпочтений пользователя
router.post("/preferences", async (req, res) => {
  const { userId, gender, age, goal, fitness } = req.body;

  // Проверяем, что все обязательные поля присутствуют
  if (!userId || !gender || !age || !goal || !fitness) {
    return res.status(400).json({ message: "Все поля обязательны для заполнения" });
  }

  try {
    // Проверяем, существует ли пользователь
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    // Сохраняем предпочтения
    const preferences = await prismaClient.userPreferences.upsert({
      where: { userId },
      update: { gender, age, goal, fitness },
      create: { userId, gender, age, goal, fitness },
    });

    res.status(200).json({ message: "Предпочтения успешно сохранены", preferences });
  } catch (error) {
    console.error("Ошибка при сохранении предпочтений:", error);
    res.status(500).json({ message: "Ошибка сервера при сохранении данных" });
  }
});

// Эндпоинт для сброса предпочтений пользователя
router.post("/preferences/reset", async (req, res) => {
  const { userId } = req.body;

  // Проверяем, что поле userId присутствует
  if (!userId) {
    return res.status(400).json({ message: "Поле userId обязательно" });
  }

  try {
    // Удаляем предпочтения пользователя
    const deletedPreferences = await prismaClient.userPreferences.delete({
      where: { userId },
    });

    res.status(200).json({ message: "Данные успешно сброшены", deletedPreferences });
  } catch (error) {
    // Если данных для удаления нет, возвращаем сообщение
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Предпочтения для данного пользователя не найдены" });
    }

    console.error("Ошибка при сбросе данных:", error);
    res.status(500).json({ message: "Ошибка сервера при сбросе данных" });
  }
});

module.exports = router;