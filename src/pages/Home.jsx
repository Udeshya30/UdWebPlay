import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

// Ensure BASE_URL is defined, otherwise default to "/"
const BASE_URL = import.meta.env.VITE_BASE_URL || "/";
const IMAGE_PATH = import.meta.env.VITE_IMAGE_PATH || "images/";

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
          {/* First Game - Playable */}
          <div className="game-card">
            <img src={`${BASE_URL}images/spacewar.png`} alt="SpaceWar" />
            <h3>SpaceWar</h3>
            <Link to="/game/game1">
              <button>Play Now</button>
            </Link>
          </div>

          {/* Coming Soon Games */}
          <div className="game-card coming-soon">
            <img src={`${BASE_URL}${IMAGE_PATH}coming-soon-1.jpg`} alt="Coming Soon" />
            <h3>Infinity Run</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>

          <div className="game-card coming-soon">
            <img src={`${BASE_URL}${IMAGE_PATH}coming-soon-2.jpg`} alt="Coming Soon" />
            <h3>Tic Tac Toe</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>

          <div className="game-card coming-soon">
            <img src={`${BASE_URL}${IMAGE_PATH}coming-soon-3.jpg`} alt="Coming Soon" />
            <h3>Block Stack</h3>
            <span className="coming-soon-label">Coming Soon</span>
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
