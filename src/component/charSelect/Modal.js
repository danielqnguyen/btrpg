import React from "react";

const Modal = props => {
  console.log(props);
  const showHideClassname = props.show
    ? "modal display-block"
    : "modal display-none";
  let info = props.test;
  return (
    <div className={showHideClassname}>
      <section className="modal-main">
        {/* <h1>Job: {info.job}</h1>
        <h2>Stats</h2>
        <h3>STR: {info.stats.str}</h3>
        <h3>AGI: {info.stats.agi}</h3>
        <h3>HP: {info.stats.hp}</h3>
        <h3>DEF: {info.stats.def}</h3>
        <h3>LUK: {info.stats.luk}</h3> */}
        <button onClick={props.handleClose}> close </button>
      </section>
    </div>
  );
};

export default Modal;
