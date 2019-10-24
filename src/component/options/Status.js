import React from "react";

const Status = props => {
  if (props.loading) {
    return "Loading...";
  }
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
        <h3>
          HP: {info.hp}/{info.maxHp}
        </h3>
        <h3>DEF: {info.def}</h3>
        <h3>LUK: {info.luk}</h3>
        <h3>EXP: {info.exp}</h3>
        <button onClick={props.handleClose}> close </button>
      </section>
    </div>
  );
};

export default Status;
