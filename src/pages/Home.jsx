import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to UdWebPlay 🎮</h1>
        <p>Play and explore amazing web games!</p>
      </header>

      <section className="games-list">
        <h2>Available Games</h2>
        <div className="games-grid">
          <div className="game-card">
            <img src="/images/game1.jpg" alt="Game 1" />
            <h3>Game 1</h3>
            <Link to="/game/game1">
              <button>Play Now</button>
            </Link>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 UdWebPlay | Developed by Udeshya Kumar</p>
      </footer>
    </div>
  );
};

export default Home;
