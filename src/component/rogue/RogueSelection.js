import React from "react";
import Modal from "../charSelect/Modal";

const RogueSelection = props => {
  if (props.info) {
    return (
      <Modal
        id="modal2"
        info={props.info}
        show={props.show}
        handleClose={props.handleClose}
      ></Modal>
    );
  } else {
    return <h1>hi</h1>;
  }
};

export default RogueSelection;
