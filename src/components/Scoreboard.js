import React from "react";
import "./styles/Scoreboard.css";

const Scoreboard = (props) => {
  return (
    <div id="scoreboard-container">
      <h2>Scoreboard</h2>
      <div className="display-score">
        <h4>Current:</h4>
        <h4>{props.currentScore} / 16</h4>
      </div>
      <div className="display-score">
        <h4>Best:</h4>
        <h4>{props.currentScore} / 16</h4>
      </div>
    </div>
  );
};

export default Scoreboard;
