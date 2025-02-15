import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

// Import images correctly for Vite
import spacewar from "/images/spacewar.jpg";
import comingSoon from "/images/coming-soon.jpg"; 

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
            <img src={spacewar} alt="SpaceWar" />
            <h3>SpaceWar</h3>
            <Link to="/game/game1">
              <button>Play Now</button>
            </Link>
          </div>

          {/* Coming Soon Games - All use the same image */}
          <div className="game-card coming-soon">
            <img src={comingSoon} alt="Coming Soon" />
            <h3>Infinity Run</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>

          <div className="game-card coming-soon">
            <img src={comingSoon} alt="Coming Soon" />
            <h3>Tic Tac Toe</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>

          <div className="game-card coming-soon">
            <img src={comingSoon} alt="Coming Soon" />
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
