import React from "react";
import "./FaceCard.css";

interface Props {
  cardFrontURL: String,
  onCardClick: Function
}

const FaceCard = ({ cardFrontURL, onCardClick }: Props) => {

  return (
    <div className="betweenCards">
      <button className="cardButton" onClick={onCardClick}>
        <img className="card" src={cardFrontURL}/>
      </button>
    </div>
  );
};

export default FaceCard;
