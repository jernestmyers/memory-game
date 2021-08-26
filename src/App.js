import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Footer from "./components/Footer";
import Game from "./components/Game";
import HelpModal from "./components/HelpModal";
import GameOverModal from "./components/GameOverModal";
import "./App.css";
import logo from "./assets/Orion_brain.png";
import useModal from "./components/useModal";

const App = () => {
  const [score, setScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const { open, openModal, closeModal } = useModal();

  useEffect(() => {
    if (score > highScore) {
      setHighScore(score);
    }
    if (score === 16) {
      setIsGameOver(true);
    }
  }, [score, isGameOver, highScore]);

  return (
    <div id="app-container">
      <header>
        <div id="header-left">
          <img id="logo" alt="brain" src={logo}></img>
          <h2 id="page-title">Techie Thingies</h2>
          <h3 id="page-subtitle">A memory game</h3>
          <div onClick={openModal} id="help-container">
            <svg
              id="help-icon"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="feather feather-info"
            >
              <circle cx="12" cy="12" r="10"></circle>
              <line x1="12" y1="16" x2="12" y2="12"></line>
              <line x1="12" y1="8" x2="12.01" y2="8"></line>
            </svg>
            <h4>Click to see the rules</h4>
          </div>
          {open ? <HelpModal close={closeModal} /> : null}
        </div>
        <div id="header-right">
          <Scoreboard
            currentScore={score}
            highScore={highScore}
            setHighScore={setHighScore}
          ></Scoreboard>
        </div>
      </header>
      <Game
        score={score}
        setScore={setScore}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      ></Game>
      <Footer></Footer>
      {isGameOver ? (
        <GameOverModal
          setScore={setScore}
          setClickedArray={setClickedArray}
          setIsGameOver={setIsGameOver}
          score={score}
          close={closeModal}
        ></GameOverModal>
      ) : null}
    </div>
  );
};

export default App;
