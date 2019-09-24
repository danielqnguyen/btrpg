import React, { Component } from "react";
import "./CharSelect.css";
import WarriorSelection from "../warrior/WarriorSelection";
import RogueSelection from "../rogue/RogueSelection";
import { connect } from "react-redux";

class CharSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false
    };
  }

  showModal1 = () => {
    this.setState({ show1: true });
  };

  hideModal1 = () => {
    this.setState({ show1: false });
  };

  showModal2 = () => {
    this.setState({ show2: true });
  };

  hideModal2 = () => {
    this.setState({ show2: false });
  };

  saveInfo = () => {
    // this.props.getUserCharData(data goes here)
  };

  render() {
    return (
      <div>
        <h1>Class Selection</h1>

        <WarriorSelection
          handleClose={this.hideModal1}
          show={this.state.show1}
          info={this.props.warrior}
        ></WarriorSelection>
        <button type="button" onClick={this.showModal1}>
          Warrior
        </button>
        <RogueSelection
          handleClose={this.hideModal2}
          show={this.state.show2}
          info={this.props.rogue}
        ></RogueSelection>
        <button type="button" onClick={this.showModal2}>
          Rogue
        </button>
        {/* <button onClick={() => console.log(this.state, this.props)}></button> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    charData: state.Reducer
  };
};

const mapDispatchToProps = dispatch => {
  return {
    getUserCharData: charData => {
      dispatch(getCharData(charData));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(CharSelect);
