const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const transporter = require('../utils/mailer');
require('dotenv').config();

const prisma = new PrismaClient();
const app = express();
const PORT = 5000;

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// === Отправка письма для подтверждения электронной почты ===
app.post('/auth/send-verification-email', async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: 'Email обязателен' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    // Если email уже подтвержден — не отправляем повторно
    if (user && user.isEmailVerified) {
      return res.status(400).json({ message: 'Электронная почта уже подтверждена' });
    }

    const verificationCode = Math.floor(100000 + Math.random() * 900000).toString();
    const expiresAt = new Date(Date.now() + 3600000); // 1 час

    await prisma.tempEmail.upsert({
      where: { email },
      update: { code: verificationCode, expiresAt },
      create: { email, code: verificationCode, expiresAt },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: email,
      subject: 'Код подтверждения',
      html: `<p>Сіздің растау кодыңыз: <b>${verificationCode}</b></p>`,
    });    

    res.status(200).json({ message: 'Письмо для подтверждения отправлено' });
  } catch (error) {
    console.error('Ошибка отправки письма:', error);
    res.status(500).json({ message: `Ошибка при отправке письма: ${error.message}` });
  }
});

// === Подтверждение электронной почты ===
app.get('/auth/verify-email', async (req, res) => {
  const { code } = req.query;

  if (!code) {
    return res.status(400).json({ message: 'Код подтверждения отсутствует' });
  }

  try {
    const tempEmail = await prisma.tempEmail.findFirst({ where: { code } });

    if (!tempEmail) {
      return res.status(400).json({ message: 'Неверный код подтверждения' });
    }

    if (tempEmail.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Код истёк. Пожалуйста, запросите новый код.' });
    }

    const user = await prisma.user.findUnique({ where: { email: tempEmail.email } });

    if (!user) {
      await prisma.tempEmail.updateMany({
        where: { code },
        data: { code: 'expired' },  // Обновление на строку "expired", чтобы избежать ошибки
      });      
      return res.status(200).json({ message: 'Почта подтверждена. Теперь вы можете зарегистрироваться.' });
    }

    await prisma.user.update({
      where: { id: user.id },
      data: { isEmailVerified: true },
    });

    await prisma.tempEmail.delete({ where: { email: tempEmail.email } });

    res.status(200).json({ message: 'Электронная почта подтверждена' });
  } catch (error) {
    console.error('Ошибка верификации:', error);
    res.status(500).json({ message: 'Ошибка при подтверждении электронной почты' });
  }
});

// === Регистрация пользователя ===
app.post('/auth/register', async (req, res) => {
  const { email, username, password } = req.body;

  if (!email || !username || !password) {
    return res.status(400).json({ message: 'Email, имя пользователя и пароль обязательны' });
  }

  try {
    const existingUser = await prisma.user.findUnique({ where: { email } });

    if (existingUser) {
      return res.status(400).json({ message: 'Пользователь с таким email уже существует' });
    }

    const tempEmail = await prisma.tempEmail.findUnique({ where: { email } });

    if (!tempEmail || tempEmail.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Email не подтверждён или код истёк. Повторите подтверждение.' });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    await prisma.user.create({
      data: {
        email,
        username,
        password: hashedPassword,
        isEmailVerified: true,
      },
    });

    await prisma.tempEmail.delete({ where: { email } });

    res.status(201).json({ message: 'Пользователь успешно зарегистрирован' });
  } catch (error) {
    console.error('Ошибка регистрации:', error);
    res.status(500).json({ message: 'Ошибка при регистрации пользователя' });
  }
});

// === Сброс пароля ===
app.post('/auth/reset-password', async (req, res) => {
  const { token, newPassword } = req.body;

  if (!token || !newPassword) {
    return res.status(400).json({ message: 'Токен и новый пароль обязательны' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const user = await prisma.user.findUnique({ where: { id: decoded.userId } });

    if (!user || user.passwordResetToken !== token || user.passwordResetExpires < new Date()) {
      return res.status(400).json({ message: 'Неверный или просроченный токен' });
    }

    const hashedPassword = await bcrypt.hash(newPassword, 10);

    await prisma.user.update({
      where: { id: user.id },
      data: {
        password: hashedPassword,
        passwordResetToken: null,
        passwordResetExpires: null,
      },
    });

    res.status(200).json({ message: 'Пароль успешно сброшен' });
  } catch (error) {
    console.error('Ошибка сброса пароля:', error);
    res.status(400).json({ message: 'Недействительный или просроченный токен' });
  }
});

// === Проверка кода подтверждения ===
app.post('/auth/verify-code', async (req, res) => {
  const { email, code } = req.body;

  if (!email || !code) {
    return res.status(400).json({ message: 'Email мен код қажет' });
  }

  try {
    const tempEmail = await prisma.tempEmail.findUnique({ where: { email } });

    if (!tempEmail || tempEmail.code !== code) {
      return res.status(400).json({ message: 'Қате код немесе код табылмады' });
    }

    if (tempEmail.expiresAt < new Date()) {
      return res.status(400).json({ message: 'Кодтың мерзімі өтті' });
    }

    // если пользователь уже существует — обновим его
    const user = await prisma.user.findUnique({ where: { email } });

    if (user) {
      await prisma.user.update({
        where: { id: user.id },
        data: { isEmailVerified: true },
      });
    }

    // удалить tempEmail после успешной проверки
    await prisma.tempEmail.delete({ where: { email } });

    res.status(200).json({ message: 'Email сәтті расталды' });
  } catch (error) {
    console.error('Қате кодты тексеруде:', error);
    res.status(500).json({ message: 'Сервер қатесі' });
  }
});

// === Логин пользователя ===
app.post('/auth/login', async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res.status(400).json({ message: 'Email и пароль обязательны' });
  }

  try {
    const user = await prisma.user.findUnique({ where: { email } });

    if (!user) {
      return res.status(400).json({ message: 'Неверный email или пароль' });
    }

    // Сравниваем введенный пароль с хешированным в базе данных
    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Неверный email или пароль' });
    }

    // Создаем JWT токен
    const token = jwt.sign({ userId: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });

    // Отправляем ответ с токеном и данными пользователя
    res.status(200).json({
      message: 'Успешный вход',
      token,
      user: {
        id: user.id,
        username: user.username,
        email: user.email,
        isEmailVerified: user.isEmailVerified,
      },
    });
  } catch (error) {
    console.error('Ошибка при входе:', error);
    res.status(500).json({ message: 'Ошибка при входе в систему' });
  }
});

app.listen(PORT, () => {
  console.log(`Сервер запущен на http://localhost:${PORT}`);
});