import React from "react";
import { Link } from "react-router-dom";
import "./Home.scss";

// Import images
import spacewar from "/images/spacewar.jpg";
import comingSoon from "/images/coming-soon.jpg"; 
import arFeature from "/images/ar-placeholder.jpg"; // Add AR placeholder image

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Welcome to UdWebPlay 🎮</h1>
        <p>Play and explore amazing web games!</p>
      </header>

      {/* Games Section */}
      <section className="games-list">
        <h2>Available Games</h2>
        <div className="games-grid">
          <div className="game-card">
            <img src={spacewar} alt="SpaceWar" />
            <h3>SpaceWar</h3>
            <Link to="/game/game1">
              <button>Play Now</button>
            </Link>
          </div>

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

          <div className="game-card coming-soon"> {/* ✅ Added missing 4th game card */}
            <img src={comingSoon} alt="Coming Soon" />
            <h3>Block Stack</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>
        </div>
      </section>

      {/* AR Features Section */}
      <section className="ar-list">
        <h2>Augmented Reality Features</h2>
        <div className="games-grid">
          <div className="game-card">
            <img src={arFeature} alt="AR Feature 1" />
            <h3>3D Object Viewer</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>

          <div className="game-card">
            <img src={arFeature} alt="AR Feature 2" />
            <h3>Virtual Try-On</h3>
            <span className="coming-soon-label">Coming Soon</span>
          </div>

          <div className="game-card">
            <img src={arFeature} alt="AR Feature 3" />
            <h3>AR Space Simulation</h3>
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
