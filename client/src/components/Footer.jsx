import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Импортируем иконки
import "../styles/Footer.css"; // Импортируем стили для футера

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* О нас */}
        <div className="footer-section">
          <h2>Sport Time</h2>
          <p>
            Твоя платформа для достижения фитнес-целей. Создавай планы,
            отслеживай прогресс и добивайся результата вместе с нами.
          </p>
        </div>

        {/* Контакты */}
        <div className="footer-section">
          <h2>Контакты</h2>
          <ul>
            <li className="flex items-center gap-2">
              <Mail size={16} /> support@sporttime.kz
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +7 (707) 123-45-67
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> г. Астана, IT колледж
            </li>
          </ul>
        </div>

        {/* Навигация */}
        <div className="footer-section">
          <h2>Навигация</h2>
          <ul>
            <li><a href="#">Главная</a></li>
            <li><a href="#">О нас</a></li>
            <li><a href="#">Контакты</a></li>
            <li><a href="#">FAQ</a></li>
          </ul>
        </div>
      </div>

      {/* Линия и копирайт */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sport Time. Все права защищены.</p>
        <p>
          <a href="#">Политика конфиденциальности</a> | <a href="#">Условия использования</a>
        </p>
      </div>
    </footer>
  );
}
