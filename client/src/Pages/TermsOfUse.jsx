import React from "react";
import "../styles/TermsOfUse.css";

export default function TermsOfUse() {
  return (
    <div className="terms-container">
      <h1 className="title">Пайдалану шарттары</h1>
      <p className="updated-date">Жаңартылған күні: {new Date().toLocaleDateString()}</p>

      <p className="intro-text">
        Sport Time платформасына қош келдіңіз! Сайт пен қызметтерімізді пайдаланбас бұрын осы пайдаланушы шарттарымен мұқият танысыңыз.
      </p>

      <h2 className="section-title">1. Шарттарды қабылдау</h2>
      <p className="content-text">
        Біздің сайтты пайдалану арқылы сіз осы шарттармен келісесіз. Егер сіз оларға келіспесеңіз, сайтты пайдаланбаңыз.
      </p>

      <h2 className="section-title">2. Пайдаланушы аккаунты</h2>
      <ul className="list-items">
        <li>Сіз өзіңіздің кіру деректеріңіздің қауіпсіздігін қамтамасыз етуге жауаптысыз.</li>
        <li>Сіз тіркелу кезінде дұрыс ақпарат беруіңіз қажет.</li>
        <li>Шарттарды бұзған жағдайда біз аккаунтыңызды шектеу немесе жою құқығын сақтаймыз.</li>
      </ul>

      <h2 className="section-title">3. Зияткерлік меншік</h2>
      <p className="content-text">
        Барлық контент, соның ішінде мәтіндер, суреттер, логотиптер және дизайн, Sport Time-ның меншігі болып табылады және авторлық құқықтармен қорғалады.
      </p>

      <h2 className="section-title">4. Жауапкершіліктің шектелуі</h2>
      <p className="content-text">
        Біз платформаны пайдалану кезінде туындауы мүмкін шығындарға жауап бермейміз. Қызметті өз жауапкершілігіңізбен пайдаланасыз.
      </p>

      <h2 className="section-title">5. Шарттардың өзгеруі</h2>
      <p className="content-text">
        Біз пайдаланушы шарттарын кез келген уақытта жаңарта аламыз. Өзгерістер жарияланған сәттен бастап күшіне енеді.
      </p>

      <h2 className="section-title">6. Байланыс</h2>
      <p className="content-text">
        Егер сұрақтарыңыз болса, бізге мына мекенжайға жазыңыз:{" "}
        <a href="mailto:support@sporttime.kz" className="contact-link">
          bolatulyolzhas@gmail.com
        </a>
      </p>
    </div>
  );
}