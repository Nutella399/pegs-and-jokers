import React, { useEffect, useState } from "react";
import GameRules from "./GameRules.tsx";
import FaceCard from "./FaceCard.tsx";
import "./Game.css";

const Game = () => {
  const cardbackURL = 'https://www.deckofcardsapi.com/static/img/back.png'
  
  const [isOpen, setIsOpen] = useState(false);
  const [hand, setHand] = useState([]);
  const [playerId] = useState(1); 

  //figure out why this is calling again every refresh 
  useEffect(() => {
    fetch(`/hand/${playerId}`)
      .then((res) => res.json())
      .then((data) => {
        setHand(data.hand);
      });
  }, [playerId]);

  const openRules = () => {
    setIsOpen(true);
  };

  const handleCardClick = (code) => {
    console.log("card rank: " + code);
    fetch(`/deck/${playerId}/code/${code}`)
    .then((res) => res.json())
    .then((data) => {
      setHand(data.hand);
    });
  };

  const handleDeckClick = () => {
    fetch(`/deck/${playerId}`)
    .then((res) => res.json())
    .then((data) => {
      setHand(data.hand);
    });
  };

  return (
    <div>
      <header className="Game-header">
        <h1>Game Board Coming Soon TM </h1>
        <div>
          <img className="deck" onClick={(handleDeckClick)} src={cardbackURL}/>
        </div>
        <div className="hand">
          {hand.map((card, index) => (
            <FaceCard
              key={index}
              cardFrontURL={card.image}
              onCardClick={() => handleCardClick(card.code)}
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
