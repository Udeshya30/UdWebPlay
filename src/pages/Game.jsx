import React from "react";
import { useParams } from "react-router-dom";
import "./Game.scss";

const Game = () => {
  const { gameId } = useParams();

  return (
    <div className="game-container">
      <h1>Playing {gameId}</h1>
      <iframe
        src={`/games/${gameId}/index.html`}
        title="Unity WebGL Game"
        width="100%"
        height="600px"
        style={{ border: "none" }}
      ></iframe>
    </div>
  );
};

export default Game;
