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
            Фитнес-мақсаттарға жету үшін сенің платформаң. Жоспарлар құрып, 
            прогрессті бақылап, бізбен бірге нәтижеге жет
          </p>
        </div>

        {/* Контакты */}
        <div className="footer-section">
          <h2>Байланыс</h2>
          <ul>
            <li className="flex items-center gap-2">
              <Mail size={16} /> bolatulyolzhas@gmail.com
            </li>
            <li className="flex items-center gap-2">
              <Phone size={16} /> +7 (708) 599-02-45
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={16} /> Астана, ​Мәңгілік Ел даңғылы, С1 Astana IT University
            </li>
          </ul>
          </div>
        </div>


        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} Sport Time. Барлық құқықтар қорғалған.</p>
          <p>
            <Link to="/privacy-policy" className="text-blue-500 hover:underline">
            Құпиялылық саясаты
            </Link> |{" "}
            <Link to="/terms-of-use" className="text-blue-500 hover:underline">
            Пайдалану шарттары
            </Link>
          </p>
        </div>
    </footer>
  );
}