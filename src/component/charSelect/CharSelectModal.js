import React from "react";

const Modal = props => {
  const showHideClassname = props.show
    ? "modal display-block"
    : "modal display-none";
  let info = props.info;
  return (
    <div className={showHideClassname} id={props.modalId}>
      <section className="modal-main">
        <h1>Job: {info.job}</h1>
        <h2>Stats</h2>
        <h3>STR: {info.str}</h3>
        <h3>AGI: {info.agi}</h3>
        <h3>HP: {info.hp}</h3>
        <h3>DEF: {info.def}</h3>
        <h3>LUK: {info.luk}</h3>

        <h4>Select this class?</h4>
        <button onClick={props.chooseJob}> Yes </button>

        <button onClick={props.handleClose}> No </button>
      </section>
    </div>
  );
};

export default Modal;
