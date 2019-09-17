import React, { Component } from "react";
import "./CharSelect.css";
import Modal from "./Modal";
import WarriorSelection from "../warrior/WarriorSelection";
import RogueSelection from "../rogue/RogueSelection";

class CharSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show: false
    };
  }
  componentDidUpdate() {
    console.log(this.props);
  }

  showModal = () => {
    this.setState({ show: true });
  };

  hideModal = () => {
    this.setState({ show: false });
  };

  render() {
    return (
      <div>
        <h1>Class Selection</h1>

        <WarriorSelection
          handleClose={this.hideModal}
          show={this.state.show}
          info={this.props.warrior}
        ></WarriorSelection>
        <button type="button" onClick={this.showModal}>
          Warrior
        </button>
        <RogueSelection
          handleClose={this.hideModal}
          show={this.state.show}
          info={this.props.rogue}
        ></RogueSelection>
        <button type="button" onClick={this.showModal}>
          Rogue
        </button>
        <button onClick={() => console.log(this.state, this.props)}></button>
      </div>
    );
  }
}

export default CharSelect;
