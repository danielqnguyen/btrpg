import React from "react";
import Modal from "../charSelect/Modal";

const WarriorSelection = props => {
  console.log("============", props);
  if (props.info) {
    return (
      <Modal
        name="modal1"
        info={props.info}
        show={props.show}
        handleClose={props.handleClose}
      ></Modal>
    );
  } else {
    return <h1>hi</h1>;
  }
};

export default WarriorSelection;
