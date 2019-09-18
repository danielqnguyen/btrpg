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
        <h3>STR: {info.stats.str}</h3>
        <h3>AGI: {info.stats.agi}</h3>
        <h3>HP: {info.stats.hp}</h3>
        <h3>DEF: {info.stats.def}</h3>
        <h3>LUK: {info.stats.luk}</h3>
        <button onClick={props.handleClose}> close </button>
      </section>
    </div>
  );
};

export default Modal;
