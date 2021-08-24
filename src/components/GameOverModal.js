// import "../styles/Modal.css";

const GameOverModal = (props) => {
  return (
    <div className="toggle-modal" id="gameover-modal-container">
      <div id="gameover-modal-content">
        <h2 id="modal-header">Game Over</h2>
        <p id="gameover-msg"></p>
        <small id="click-continue-msg">CLICK ANYWHERE TO CONTINUE</small>
      </div>
    </div>
  );
};

export default GameOverModal;
