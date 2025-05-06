const express = require("express");
const { PrismaClient } = require("@prisma/client");
const router = express.Router();

const prisma = new PrismaClient();

// POST /api/preferences — Сохранение или обновление предпочтений пользователя
router.post("/", async (req, res) => {
  const { userId, gender, age, goal, fitness } = req.body;

  if (!userId || !gender || !age || !goal || !fitness) {
    return res.status(400).json({ message: "Все поля обязательны для заполнения" });
  }

  try {
    const user = await prisma.user.findUnique({
      where: { id: userId },
    });

    if (!user) {
      return res.status(404).json({ message: "Пользователь не найден" });
    }

    const preferences = await prisma.userPreferences.upsert({
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

// POST /api/preferences/reset — Сброс предпочтений пользователя
router.post("/reset", async (req, res) => {
  const { userId } = req.body;

  if (!userId) {
    return res.status(400).json({ message: "Поле userId обязательно" });
  }

  try {
    const deletedPreferences = await prisma.userPreferences.delete({
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

// GET /api/preferences/:userId — Получение предпочтений пользователя
router.get("/:userId", async (req, res) => {
  const { userId } = req.params;

  try {
    const preferences = await prisma.userPreferences.findUnique({
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