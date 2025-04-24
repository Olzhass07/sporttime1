import React from "react";
import { Mail, Phone, MapPin } from "lucide-react"; // Импортируем иконки
import "../styles/Footer.css"; // Импортируем стили для футера
import { Link } from "react-router-dom"; // This imports the Link component



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
              <Mail size={16} /> bolatulyolzas@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +7 (708) 599-02-45
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Астана, ​Проспект Мангилик Ел, С1 Astana IT University
            </li>
          </ul>
          </div>
        </div>

        <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sport Time. Все права защищены.</p>
        <p>
        <Link to="/privacy-policy" className="text-blue-500 hover:underline">
      Политика конфиденциальности
    </Link> | <a href="#">Условия использования</a>
        </p>
      </div>
    </footer>
  );
}
