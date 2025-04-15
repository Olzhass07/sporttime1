import React from "react";
import Navbar from "../components/Navbar";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home-container">
      <Navbar />
      <main className="home-main">
        <div className="home-slogan">
          <h1 className="home-title">
            Мақсатың айқын —{" "}
            <span className="highlight">жолыңыз бізбен жарқын!</span>
          </h1>
          <button className="home-button">
            Жаттығуды бастау!
            <i className="fas fa-arrow-right ml-2"></i>
          </button>
        </div>
        <div className="home-image-container">
          <img
            alt="A man working out with battle ropes in a gym"
            className="home-image"
            src="https://placehold.co/1200x600"
          />
        </div>
      </main>
    </div>
  );
};

export default Home;
