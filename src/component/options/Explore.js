import React from "react";

const Explore = props => {
  if (props.loading) {
    return "Loading...";
  }
  if (!props.explore) {
    return "";
  }
  console.log(props);
  const showHideClassname = props.show
    ? "modal display-block"
    : "modal display-none";

  if (props.explore === "wildMob") {
    return (
      <div className={showHideClassname} id={props.modalId}>
        <section className="modal-main">
          <h1>{props.wildMob.name}</h1>
          <h3>
            HP:{props.wildMob.cHp}/{props.wildMob.hp}
          </h3>
          <button onClick={props.handleClose}> Fight </button>
          <button onClick={props.handleClose}> Run </button>
        </section>
      </div>
    );
  } else if (props.explore === "gettingRobbed") {
    return (
      <div className={showHideClassname} id={props.modalId}>
        <section className="modal-main">
          <h1>F IN THE CHAT BOIS</h1>
          <button onClick={props.handleClose}> close </button>
        </section>
      </div>
    );
  } else if (props.explore === "randomItem") {
    return (
      <div className={showHideClassname} id={props.modalId}>
        <section className="modal-main">
          <h1>FEELSGOODMAN</h1>
          <button onClick={props.handleClose}> close </button>
        </section>
      </div>
    );
  } else if (props.explore === "merchant") {
    return (
      <div className={showHideClassname} id={props.modalId}>
        <section className="modal-main">
          <h1>POG</h1>
          <button onClick={props.handleClose}> close </button>
        </section>
      </div>
    );
  }
};

export default Explore;
