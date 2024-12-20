import React, { MouseEventHandler, useState } from "react";
import { easeInOut, motion } from "framer-motion";
import "./HandCard.css";

interface Props {
  cardFrontURL: string;
  onCardClick: MouseEventHandler;
  cardIndex: number; 
}

const HandCard = ({ cardFrontURL, onCardClick, cardIndex}: Props) => {
  const [clicked, setClicked] = useState(false);
  const [event, setEvent] =
    useState<React.MouseEvent<HTMLImageElement, MouseEvent>>();

  const offset = (cardIndex - 5) * 110

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
      x: -220 - offset,
      y: -550,
      transition: { duration: 2, ease: easeInOut },
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

  const handleClick = (
    event: React.MouseEvent<HTMLImageElement, MouseEvent>
  ) => {
    //TODO only set clicked if its their turn otherwise ignore click
    setClicked(true);
    setEvent(event);
  };

  return (
    <div className="betweenCards">
      {!clicked && (
        <img
          className="card"
          src={cardFrontURL}
          onClick={(event) => {
            handleClick(event);
          }}
        />
      )}
      {clicked && (
        <motion.div
          variants={cardVariants}
          initial="visible"
          animate={clicked ? "moveToDestination" : "visible"}
          onAnimationComplete={() => {
            if (event) {
              setTimeout(() => {
                onCardClick(event);
                setClicked(false)
              }, 500);
            }
          }}
        >
          <img
            className="card"
            src={cardFrontURL}
          />
        </motion.div>
      )}
    </div>
  );
};

export default HandCard;
