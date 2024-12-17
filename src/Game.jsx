import React, { useState } from "react";
import GameRules from "./GameRules";
import "./Game.css"

const Game = () => {
  const [isOpen, setIsOpen] = useState(false);

  const openRules = () => {
    setIsOpen(true);
  };
  return (
    <div>
      <h1>Game Board Coming Soon TM </h1>
      <button class="guide-button"onClick={openRules}>Game Guide</button>

      {isOpen && <GameRules closeGuide={() => setIsOpen(false)} />}
    </div>
  );
};

export default Game;
