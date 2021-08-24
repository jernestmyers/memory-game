import React from "react";
import ReactDOM from "react-dom";
// import "../styles/Modal.css";

const GameOverModal = (props) => {
  return (
    <div
      className="toggle-modal"
      id="gameover-modal-container"
      style={{
        position: "absolute",
        zIndex: 10,
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0,0,0,0.4)",
        overflow: "auto",
      }}
    >
      <div
        id="gameover-modal-content"
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-around",
          flexDirection: "column",
          margin: "15% auto",
          padding: "0.5rem",
          height: "150px",
          width: "300px",
          maxWidth: "100%",
          borderRadium: "0.5rem",
        }}
      >
        <h2 id="modal-header" style={{ textAlign: "center" }}>
          Game Over
        </h2>
        <p id="gameover-msg"></p>
        <small
          id="click-continue-msg"
          style={{
            fontWeight: "bolder",
            color: "#cf7397",
            textDecoration: "underline",
          }}
        >
          CLICK ANYWHERE TO CONTINUE
        </small>
      </div>
    </div>
  );
};

// const GameOverModalJSX = (props) => {
//   return (
//     <div className="toggle-modal" id="gameover-modal-container">
//       <div id="gameover-modal-content">
//         <h2 id="modal-header">Game Over</h2>
//         <p id="gameover-msg"></p>
//         <small id="click-continue-msg">CLICK ANYWHERE TO CONTINUE</small>
//       </div>
//     </div>
//   );
// };

// const GameOverModal = (props) => {
//   return ReactDOM.createPortal(
//     GameOverModalJSX,
//     document.querySelector("#modal")
//   );
// };

export default GameOverModal;
