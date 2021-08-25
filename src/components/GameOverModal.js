import React from "react";
import Portal from "./Portal";
import "../styles/Modal.css";

const GameOverModal = ({ children, close, render }) => {
  return (
    <Portal>
      <div id="gameover-modal-container">
        <div id="gameover-modal-content">
          <h2 id="modal-header">Game Over</h2>
          <p id="gameover-msg"></p>
          {/* <small id="click-continue-msg">CLICK ANYWHERE TO CONTINUE</small> */}
          <button onClick={close}>Close</button>
        </div>
      </div>
    </Portal>
  );
};

export default GameOverModal;
