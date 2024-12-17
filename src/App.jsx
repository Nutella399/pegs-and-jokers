import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Game from "./Game.jsx"
import logo from "./logo.svg";
import "./App.css";

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
    console.log("button is click and in function")
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


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
