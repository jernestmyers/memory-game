import React from "react";
import Portal from "./Portal";
import "../styles/Modal.css";

const HelpModal = ({ children, close, render }) => {
  return (
    <Portal>
      <div id="help-modal-container">
        <div id="help-modal-content">
          <h2 id="modal-header">How To Play</h2>
          <ul>
            <li>The goal is to click each icon only once.</li>
            <li>Are you clever enough to click all 16 icons?</li>
          </ul>
          <div id="help-modal-btn-container">
            {/* <small id="click-continue-msg">CLICK ANYWHERE TO CONTINUE</small> */}
            {/* {render(children) || children} */}
            {/* <hr /> */}
            <button onClick={close}>Close</button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default HelpModal;
