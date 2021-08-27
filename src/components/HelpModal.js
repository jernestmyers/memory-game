import React from "react";
import Portal from "./Portal";
import "../styles/Modal.css";

const HelpModal = ({ close }) => {
  return (
    <Portal>
      <div id="help-modal-container">
        <div id="help-modal-content" style={{ opacity: "95%" }}>
          <h2 id="modal-header">How To Play</h2>
          <ul>
            <li>The goal is to click each icon only once.</li>
            <li>Are you clever enough to click all 16 icons?</li>
          </ul>
          <div id="help-modal-btn-container">
            <button className="modal-btn" onClick={close}>
              CLOSE
            </button>
          </div>
        </div>
      </div>
    </Portal>
  );
};

export default HelpModal;
