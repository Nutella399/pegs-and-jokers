import React, { useEffect, useState } from "react";
import GameRules from "./GameRules";
import "./Game.css";
import FaceCard from "./FaceCard";

const Game = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hand, setHand] = useState([]);

  useEffect(() => {
    fetch("/hand/1")
      .then((res) => res.json())
      .then((data) => {
        setHand(data.hand);
      });
  }, []);

  const openRules = () => {
    setIsOpen(true);
  };

  const handleCardClick = (rank) => {
    console.log("card rank: " + rank);
  };

  return (
    <div>
      <header className="Game-header">
        <h1>Game Board Coming Soon TM </h1>
        <div className="hand">
          {hand.map((card, index) => (
            <FaceCard
              key={index}
              rank={card.Rank}
              suit={card.Suit}
              onCardClick={() => handleCardClick(card.Rank)}
            />
          ))}
        </div>
        <button className="guide-button" onClick={openRules}>
          Game Guide
        </button>

        {isOpen && <GameRules closeGuide={() => setIsOpen(false)} />}
      </header>
    </div>
  );
};

export default Game;
