const express = require("express");
const prisma = require("@prisma/client").PrismaClient;
const router = express.Router();

const prismaClient = new prisma();

// POST /preferences — Сохранение или обновление предпочтений пользователя
router.post("/preferences", async (req, res) => {
  const { userId, gender, age, goal, fitness } = req.body;

  if (!userId || !gender || !age || !goal || !fitness) {
    return res.status(400).json({ message: "Все поля обязательны для заполнения" });
  }

  try {
    const user = await prismaClient.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const preferences = await prismaClient.userPreferences.upsert({
      where: { userId },
      update: { gender, age, goal, fitness },
      create: { userId, gender, age, goal, fitness },
    });

    res.status(200).json({ message: "Предпочтения успешно сохранены", preferences });
  } catch (error) {
    console.error("Ошибка при сохранении предпочтений:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// POST /preferences/reset — Сброс предпочтений пользователя
router.post("/preferences/reset", async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "Поле userId обязательно" });
  }

  try {
    const deletedPreferences = await prismaClient.userPreferences.delete({
      where: { userId },
    });

    res.status(200).json({ message: "Данные успешно сброшены", deletedPreferences });
  } catch (error) {
    if (error.code === "P2025") {
      return res.status(404).json({ message: "Предпочтения не найдены" });
    }
    console.error("Ошибка при сбросе данных:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

// GET /preferences/:userId — Получение предпочтений пользователя
router.get("/preferences/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const preferences = await prismaClient.userPreferences.findUnique({
      where: { userId: parseInt(userId) },
    });

    if (!preferences) {
      return res.status(404).json({ message: "Предпочтения не найдены" });
    }

    res.status(200).json(preferences);
  } catch (error) {
    console.error("Ошибка при получении предпочтений:", error);
    res.status(500).json({ message: "Ошибка сервера" });
  }
});

module.exports = router;
