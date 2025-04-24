import React from 'react';
import '../styles/PrivacyPolicy.css';

export default function PrivacyPolicy() {
  return (
    <div className="privacy-policy-container">
      <h1 className="title">Құпиялылық саясаты</h1>
      <p className="updated-date">Жаңартылған күні: {new Date().toLocaleDateString()}</p>

      <p className="intro-text">
        Sport Time-ға қош келдіңіз! Біз сіздің құпиялылығыңызды құрметтейміз және пайдаланушыларымыздың деректерін қорғауға
        тырысамыз. Бұл құжатта біз қандай деректерді жинайтынымыз, оларды қалай пайдаланатынымыз және сіздің құқықтарыңыз
        туралы сипатталған.
      </p>

      <h2 className="section-title">1. Қандай деректерді жинаймыз</h2>
      <ul className="list-items">
        <li>Аты-жөні, электронды пошта, телефон нөмірі</li>
        <li>Тренировка мақсаттары, белсенділік және прогресс туралы ақпарат</li>
        <li>IP-адрес, құрылғының түрі және браузер</li>
        <li>Геолокациялық деректер (егер қосылған болса)</li>
        <li>Аналитика және персонализация үшін cookie файлдары</li>
      </ul>

      <h2 className="section-title">2. Деректерді қалай пайдаланамыз</h2>
      <ul className="list-items">
        <li>Аккаунт құру және басқару</li>
        <li>Қызмет сапасын талдау және жақсарту</li>
        <li>Тренировкаларды персонализациялау</li>
        <li>Кері байланыс және техникалық қолдау</li>
        <li>Хабарламалар жіберу (сіздің келісіміңізбен)</li>
      </ul>

      <h2 className="section-title">3. Деректерді кімдермен бөлісеміз</h2>
      <p className="content-text">
        Біз сіздің деректеріңізді сатпаймыз. Деректер тек келесі жағдайларда берілуі мүмкін:
      </p>
      <ul className="list-items">
        <li>Аналитика қызметтерімен (мысалы, Google Analytics)</li>
        <li>Пошта және хостинг қызметтерімен</li>
        <li>Мемлекеттік органдардың заңды талабымен</li>
      </ul>

      <h2 className="section-title">4. Қауіпсіздік</h2>
      <p className="content-text">
        Біз SSL шифрлауын, қорғалған серверлерді қолданамыз және паролдерді шифрланған түрде сақтаймыз. Біз сіздің деректеріңізді қорғауға
        барынша күш саламыз.
      </p>

      <h2 className="section-title">5. Сіздің құқықтарыңыз</h2>
      <ul className="list-items">
        <li>Деректеріңізге қол жеткізу</li>
        <li>Деректерді өзгерту немесе жою</li>
        <li>Келісімді қайтарып алу</li>
        <li>Уәкілетті органдарға шағым беру</li>
      </ul>

      <h2 className="section-title">6. Cookie файлдары</h2>
      <p className="content-text">
        Біз сайтпен өзара әрекеттесуді жақсарту үшін cookie қолданамыз. Сіз cookie-ді браузер параметрлерінде өшіре аласыз.
      </p>

      <h2 className="section-title">7. Саясаттағы өзгерістер</h2>
      <p className="content-text">
        Біз бұл саясатты мезгіл-мезгіл жаңартып отыруымыз мүмкін. Барлық өзгерістер осы бетте жарияланады.
      </p>

      <h2 className="section-title">8. Байланыс</h2>
      <p className="content-text">
        Егер сұрақтарыңыз болса, бізге жазуға болады:{" "}
        <a href="mailto:support@sporttime.kz" className="contact-link">
          bolatulyolzhas@gmail.com
        </a>
      </p>
    </div>
  );
}