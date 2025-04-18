const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken'); // Для создания JWT токенов

const prisma = new PrismaClient();
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(bodyParser.json());

// Регистрация пользователя
app.post('/auth/register', async (req, res) => {
  const { username, email, password } = req.body;

  try {
    // Проверяем, существует ли пользователь
    const existingUser = await prisma.user.findUnique({ where: { email } });
    if (existingUser) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    // Хэшируем пароль
    const hashedPassword = await bcrypt.hash(password, 10);

    // Создаём пользователя
    const user = await prisma.user.create({
      data: {
        username,
        email,
        password: hashedPassword,
      },
    });

    res.status(201).json({ message: 'Пользователь успешно зарегистрирован', user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Логин пользователя
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  try {
    // Проверяем, существует ли пользователь с таким email
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Пользователь не найден' });
    }

    // Сравниваем пароли
    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Неверный пароль' });
    }

    // Генерируем JWT токен
    const token = jwt.sign(
      { userId: user.id, email: user.email },
      'секретный_ключ', // Замените на ваш секретный ключ
      { expiresIn: '1h' } // Токен будет действителен 1 час
    );

    res.status(200).json({ message: 'Успешный вход', token, user });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Ошибка сервера' });
  }
});

// Запуск сервера
app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});
