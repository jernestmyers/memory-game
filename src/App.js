import React, { useState, useEffect } from "react";
import Scoreboard from "./components/Scoreboard";
import Game from "./components/Game";
import GameRefactor from "./components/GameRefactor";
import HelpModal from "./components/HelpModal";
import "./App.css";
import logo from "./assets/Orion_brain.png";

const App = () => {
  const [score, setScore] = useState(0);
  const [clickedArray, setClickedArray] = useState([]);
  const [highScore, setHighScore] = useState(0);
  const [isGameOver, setIsGameOver] = useState(false);
  const [areRulesOpen, setAreRulesOpen] = useState(false);

  function handleHelpModal(e) {
    // console.log(e.target.closest(`div`).id);
    // console.log(areRulesOpen);
    if (!areRulesOpen && e.target.closest(`div`).id === `help-container`) {
      setAreRulesOpen(true);
      document
        .querySelector(`#help-modal-container`)
        .classList.remove(`toggle-modal`);
      return document.removeEventListener("click", handleHelpModal);
    }
    if (areRulesOpen) {
      setAreRulesOpen(false);
      document
        .querySelector(`#help-modal-container`)
        .classList.add(`toggle-modal`);
      return document.removeEventListener("click", handleHelpModal);
    }
  }

  useEffect(() => {
    console.log(`modal useEffect`);
    document.addEventListener("click", handleHelpModal);
  }, [areRulesOpen]);

  // useEffect(() => {
  //   console.log(`game useEffect`);
  //   if (score > highScore) {
  //     setHighScore(score);
  //   }
  //   if (isGameOver) {
  //     setScore(0);
  //     setIsGameOver(false);
  //     setClickedArray([]);
  //   }
  //   if (score === 16) {
  //     alert(`congrats, you must be one of those techie thingies yourself.`);
  //     setScore(0);
  //     setClickedArray([]);
  //   }
  // }, [score, isGameOver, highScore]);

  return (
    <div id="app-container">
      <header>
        <div id="header-left">
          <img id="logo" alt="brain" src={logo}></img>
          <h2 id="page-title">Techie Thingies</h2>
          <h3 id="page-subtitle">A memory game</h3>
          <div id="help-container">
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
            <HelpModal></HelpModal>
          </div>
        </div>
        <div id="header-right">
          <Scoreboard
            currentScore={score}
            highScore={highScore}
            setHighScore={setHighScore}
          ></Scoreboard>
        </div>
      </header>
      {/* <Game
        score={score}
        setScore={setScore}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      ></Game> */}
      <GameRefactor
        score={score}
        setScore={setScore}
        clickedArray={clickedArray}
        setClickedArray={setClickedArray}
        isGameOver={isGameOver}
        setIsGameOver={setIsGameOver}
      ></GameRefactor>
    </div>
  );
};

export default App;
