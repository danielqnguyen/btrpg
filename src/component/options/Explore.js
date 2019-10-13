import React from "react";

const Explore = props => {
  if (props.loading) {
    return "Loading...";
  }
  console.log(props);
  const showHideClassname = props.show
    ? "modal display-block"
    : "modal display-none";

  return (
    <div className={showHideClassname} id={props.modalId}>
      <section className="modal-main">
        <h1>HI</h1>
        <button onClick={props.handleClose}> close </button>
      </section>
    </div>
  );
};

export default Explore;
