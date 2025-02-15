import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import "./Game.scss";

const Game = () => {
  const { gameId } = useParams();
  const navigate = useNavigate();
  const gamePath = `${window.location.origin}/UdWebPlay/games/${gameId}/index.html`;

  return (
    <div className="game-container">
      <button className="back-button" onClick={() => navigate("/")}>
        <i className="fas fa-home"></i> Back to Home
      </button>
      <h1>Playing {gameId}</h1>
      <iframe
        src={gamePath}
        title="Unity WebGL Game"
        className="game-iframe"
      ></iframe>
    </div>
  );
};

export default Game;
