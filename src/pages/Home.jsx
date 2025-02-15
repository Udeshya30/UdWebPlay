import React from "react";
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
          {/* Example Game Cards */}
          <div className="game-card">
            <img src="/images/game1.jpg" alt="Game 1" />
            <h3>Game 1</h3>
            <button>Play Now</button>
          </div>
          <div className="game-card">
            <img src="/images/game2.jpg" alt="Game 2" />
            <h3>Game 2</h3>
            <button>Play Now</button>
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
