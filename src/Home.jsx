import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./logo.svg";
import "./Home.css";

const Home = () => {
  const navigate = useNavigate();
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch("/time")
      .then((res) => res.json())
      .then((data) => {
        setCurrentTime(data.time);
      });
  }, []);

  const startGame = () => {
    navigate("/game");
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p> The current time is {currentTime}! </p>
        <p> Welcome to Pegs and Jokers! </p>
        <button onClick={startGame}>Start Game</button>
      </header>
    </div>
  );
};

export default Home