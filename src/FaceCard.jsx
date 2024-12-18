import "./FaceCard.css";

const FaceCard = ({ rank, suit, onCardClick }) => {
  const suitSymbols = {
    Hearts: "♥",
    Diamonds: "♦",
    Clubs: "♣",
    Spades: "♠",
  };

  return (
    <div className="betweenCards">
      <button className="card" onClick={onCardClick}>
        <div className="rank"> {rank}</div>
        <div className="suit"> {suitSymbols[suit]}</div>
      </button>
    </div>
  );
};

export default FaceCard;
