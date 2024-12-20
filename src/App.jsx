import React  from "react";
import { Routes, Route } from "react-router-dom";
import Game from "./Game.jsx";
import Home from "./Home.jsx"

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/game" element={<Game />} />
    </Routes>
  );
}

export default App;
