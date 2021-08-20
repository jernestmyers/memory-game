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
          <button
            className="modal-btn"
            onClick={() => {
              document.querySelector(
                `#help-modal-container`
              ).style.display = `none`;
            }}
          >
            CONTINUE
          </button>
        </div>
      </div>
    </div>
  );
};

export default HelpModal;
