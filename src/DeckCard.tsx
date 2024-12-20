import React, { useState } from "react";
import { easeInOut, motion } from "framer-motion";
import "./DeckCard.css";

interface Props {
  cardFrontURL: string;
  onDeckClick: Function;
  cardIndex: number;
}

const DeckCard = ({ cardFrontURL, onDeckClick }: Props) => {
  const [clicked, setClicked] = useState(false);

  const cardbackURL = "https://www.deckofcardsapi.com/static/img/back.png";

  const cardVariants = {
    hidden: {
      opacity: 0,
      x: 0,
      y: 0,
    },
    visible: {
      opacity: 1,
      x: 0,
      y: 0,
      tranition: { duration: 0.4 },
    },
    moveToDestination: {
      opacity: 1,
      x: -360,
      y: 570,
      transition: { duration: 1, ease: easeInOut },
    },
    disappear: {
      opacity: 0,
      transition: { duration: 0.5 },
    },
    returnToOrigin: {
      opacity: 1,
      x: 0,
      y: 0,
      transition: { duration: 1 },
    },
  };

  const handleClick = () => {
    //TODO only set clicked if its their turn otherwise ignore click
    setTimeout(() => onDeckClick(), 550);
    setClicked(true);
  };

  return (
    <div>
      <img className="card" src={cardbackURL} onClick={handleClick} />

      {clicked && (
        <motion.div
          variants={cardVariants}
          initial="visible"
          animate={clicked ? "moveToDestination" : "visible"}
          onAnimationComplete={() => {
            setTimeout(() => {
              setClicked(false);
            }, 500);
          }}
        >
          <img className="card" src={cardFrontURL} />
        </motion.div>
      )}
    </div>
  );
};

export default DeckCard;
