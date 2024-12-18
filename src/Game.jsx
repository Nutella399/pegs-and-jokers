import React, { useState } from "react";
import GameRules from "./GameRules";
import "./Game.css";

const Game = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openRules = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <header class="Game-header">
        <h1>Game Board Coming Soon TM </h1>
        <button class="guide-button" onClick={openRules}>
          Game Guide
        </button>

        {isOpen && <GameRules closeGuide={() => setIsOpen(false)} />}
      </header>
    </div>
  );
};

export default Game;
