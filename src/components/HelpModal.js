import "../styles/HelpModal.css";

const HelpModal = (props) => {
  return (
    <div className="toggle-modal" id="help-modal-container">
      <div id="help-modal-content">
        <h2 id="modal-header">How To Play</h2>
        <ul>
          <li>The goal is to click each icon only once.</li>
          <li>Are you clever enough to click all 16 icons?</li>
        </ul>
        <div id="help-modal-btn-container">
          <small id="click-continue-msg">CLICK ANYWHERE TO CONTINUE</small>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
