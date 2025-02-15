import React from "react";
import { useParams } from "react-router-dom";
import "./Game.scss";

const Game = () => {
  const { gameId } = useParams();
  const gamePath = `${process.env.PUBLIC_URL}/games/${gameId}/index.html`;

  return (
    <div className="game-container">
      <h1>Playing {gameId}</h1>
      <iframe
        src={gamePath}  // ✅ Fixed URL
        title="Unity WebGL Game"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Game;
