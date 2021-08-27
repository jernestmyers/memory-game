import React from "react";
import Portal from "./Portal";
import "../styles/Modal.css";

const GameOverModal = (props) => {
  const handleGameOverModal = () => {
    props.close();
    props.setScore(0);
    props.setClickedArray([]);
    props.setIsGameOver(false);
  };

  return (
    <Portal>
      <div id="gameover-modal-container">
        <div id="gameover-modal-content" style={{ opacity: "95%" }}>
          <h2 id="modal-header">Game Over</h2>
          <p id="gameover-msg">
            {props.score === 16
              ? `Perfect score! You must be a techie.`
              : `You got ${props.score} / 16!`}
          </p>
          <button className="modal-btn" onClick={handleGameOverModal}>
            Play Again!
          </button>
        </div>
      </div>
    </Portal>
  );
};

export default GameOverModal;
