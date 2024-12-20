import React, { useEffect, useState } from "react";

import GameRules from "./GameRules.tsx";
import HandCard from "./HandCard.tsx";
import DeckCard from "./DeckCard.tsx";
import "./Game.css";

const Game = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [hand, setHand] = useState([]);
  const [playerId] = useState(1);
  const [nextCardUrl, setNextCardUrl] = useState("");
  const [topDiscardUrl, setTopDiscardURL] = useState("")

  //const cardbackURL = "https://www.deckofcardsapi.com/static/img/back.png";

  //figure out why this is calling again every refresh
  useEffect(() => {
    fetch(`/hand/${playerId}`)
      .then((res) => res.json())
      .then((data) => {
        setHand(data.hand);
      });
      peekNextCard()
  }, [playerId]);

  const peekNextCard = () => {
    fetch(`/deck`)
      .then((res) => res.json())
      .then((data) => {
        setNextCardUrl(data.card);
      });
    console.log("next card url: ", nextCardUrl);
  };

  const peekTopDiscardCard = () => {
    fetch(`/discard`)
      .then((res) => res.json())
      .then((data) => {
        setTopDiscardURL(data.card);
      });
    console.log("discard card url: ", topDiscardUrl);
  };

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
      peekTopDiscardCard()
  };

  const handleDeckClick = () => {
    fetch(`/deck/${playerId}`)
      .then((res) => res.json())
      .then((data) => {
        setHand(data.hand);
      });
    setTimeout(() => peekNextCard(), 500) 
  };

  return (
    <div>
      <header className="Game-header">
      <img className="card" src={topDiscardUrl} />
        <h1>Game Board Coming Soon TM </h1>
        <div>
          <DeckCard
            className="deck"
            onDeckClick={handleDeckClick}
            cardFrontURL={nextCardUrl}
          />
        </div>
        <div className="hand">
          {hand.map((card, index) => (
            <HandCard
              key={index}
              cardFrontURL={card.image}
              onCardClick={() => handleCardClick(card.code)}
              cardIndex={index}
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
