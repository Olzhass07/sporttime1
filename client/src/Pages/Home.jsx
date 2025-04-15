
import React from "react";
import Navbar from "../components/Navbar.jsx";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <div className="home-slogan">
        <p className="normal-text">Мақсатың айқын —</p>
        <p className="gradient-text">жолың бізбен жарқын!</p>
        </div>

        <div >
        <button className="home-button">
            Жаттығуды бастау!
          </button>
        </div>
        <div className="home-image-container">
          <img
            alt="A man working out with battle ropes in a gym"
            className="home-image"
            src="./home.jpg"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
