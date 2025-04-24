import React from "react";
import '../styles/PrivacyPolicy.css'; // Подключаем внешний CSS файл

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="title">Политика конфиденциальности</h1>
      <p className="updated-date">Дата обновления: {new Date().toLocaleDateString()}</p>

      <p className="intro-text">
        Добро пожаловать в Sport Time! Мы уважаем вашу конфиденциальность и стремимся защищать персональные данные
        наших пользователей. В этом документе описано, какие данные мы собираем, как мы их используем и какие у вас
        есть права.
      </p>

      <h2 className="section-title">1. Какие данные мы собираем</h2>
      <ul className="list-items">
        <li>Имя, адрес электронной почты, номер телефона</li>
        <li>Информация о целях тренировок, активности и прогрессе</li>
        <li>IP-адрес, тип устройства и браузера</li>
        <li>Геолокационные данные (если включены)</li>
        <li>Cookie-файлы для аналитики и персонализации</li>
      </ul>

      <h2 className="section-title">2. Как мы используем данные</h2>
      <ul className="list-items">
        <li>Создание и управление аккаунтом</li>
        <li>Анализ и улучшение качества сервиса</li>
        <li>Персонализация тренировок</li>
        <li>Обратная связь и техническая поддержка</li>
        <li>Отправка уведомлений (с вашего согласия)</li>
      </ul>

      <h2 className="section-title">3. С кем мы делимся данными</h2>
      <p className="content-text">
        Мы не продаем ваши данные. Информация может передаваться только:
      </p>
      <ul className="list-items">
        <li>Сервисам аналитики (например, Google Analytics)</li>
        <li>Почтовым и хостинговым сервисам</li>
        <li>По законному требованию государственных органов</li>
      </ul>

      <h2 className="section-title">4. Безопасность</h2>
      <p className="content-text">
        Мы применяем SSL-шифрование, защищенные серверы и храним пароли в зашифрованном виде. Мы стремимся обеспечивать
        максимальную защиту ваших данных.
      </p>

      <h2 className="section-title">5. Ваши права</h2>
      <ul className="list-items">
        <li>Доступ к вашим данным</li>
        <li>Изменение или удаление данных</li>
        <li>Отзыв согласия</li>
        <li>Жалоба в уполномоченные органы</li>
      </ul>

      <h2 className="section-title">6. Cookie-файлы</h2>
      <p className="content-text">
        Мы используем cookie для улучшения взаимодействия с сайтом. Вы можете отключить cookie в настройках браузера.
      </p>

      <h2 className="section-title">7. Изменения в политике</h2>
      <p className="content-text">
        Мы можем время от времени обновлять данную политику. Все изменения будут опубликованы на этой странице.
      </p>

      <h2 className="section-title">8. Контакты</h2>
      <p className="content-text">
        Если у вас есть вопросы, напишите нам:{" "}
        <a href="mailto:support@sporttime.kz" className="contact-link">
          bolatulyolzhas@gmail.com
        </a>
      </p>
    </div>
  );
}
