const nodemailer = require('nodemailer');
require('dotenv').config(); // Загружаем переменные окружения из .env

// Создаем транспорт с параметрами из .env
const transporter = nodemailer.createTransport({
  host: process.env.EMAIL_HOST,
  port: parseInt(process.env.EMAIL_PORT),
  secure: process.env.EMAIL_SECURE === 'true', // true для SSL (порт 465), false для TLS (порт 587)
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Проверка подключения
transporter.verify((error, success) => {
  if (error) {
    console.error('❌ Ошибка подключения к почтовому серверу:', error);
  } else {
    console.log('✅ Подключение к почтовому серверу успешно');
  }
});

module.exports = transporter;