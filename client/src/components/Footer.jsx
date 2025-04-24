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
            Фитнес-мақсаттарға жету үшін сенің платформаң. Жоспарлар құрып, 
            прогрессті бақылап, бізбен бірге нәтижеге жет
          </p>
        </div>

        {/* Контакты */}
        <div className="footer-section">
          <h2>Байланыс</h2>
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
            <li><a href="#">Басты бет</a></li>
            <li><a href="#">Біз туралы</a></li>
            <li><a href="#">Байланыс</a></li>
          </ul>
        </div>
      </div>

      {/* Линия и копирайт */}
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Sport Time. Барлық құқықтар қорғалған.</p>
        <p>
          <a href="#">Қауіпсіздік политикасы</a> | <a href="#">Пайдалану шарттары</a>
        </p>
      </div>
    </footer>
  );
}
