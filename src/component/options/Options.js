import React, { Component } from "react";
import "./Options.css";
import { getCharData } from "../../redux/Action";
import { connect } from "react-redux";
import Status from "./Status";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sModal: false,
      mobCounter: 0,
      loading: true,
      char: {}
    };
  }

  componentDidMount() {
    let charData = sessionStorage.getItem("char");
    let charJson = JSON.parse(charData);
    charJson.stats.exp = 0;
    this.setState({ char: charJson, loading: false });
    console.log(charJson, this.state);
    // if (this.state.char.stats.level === null) {
    //   this.props.history.push("/");
    // }
  }

  showStatus = () => {
    this.setState({ sModal: true });
    // console.log(this.props.charData);
    console.log(this.state);
  };

  closeModal = () => {
    this.setState({ sModal: false });
  };

  explore = () => {
    let rng = this.diceRoll();
    // if (rng == 10) {
    //   this.getRobbed();
    // } else if (rng == 9) {
    //   this.randomItem();
    // } else if (rng == 8) {
    //   this.merchantAppear();
    // } else {
    //   this.mobEncounter();
    // }
  };

  diceRoll = () => {
    let rng = Math.floor(Math.random() * 10) + 1;
    return rng;
  };

  mobCounter = () => {
    if (!this.state.mobCounter === 10) {
    }
  };

  render() {
    return (
      <>
        <button type="button" className="eButton" onClick={this.explore}>
          Explore
        </button>
        <button type="button" className="rButton">
          Rest
        </button>
        <Status
          loading={this.state.loading}
          show={this.state.sModal}
          info={this.state.char}
          handleClose={this.closeModal}
        ></Status>
        <button type="button" className="sButton" onClick={this.showStatus}>
          Status
        </button>
        <button type="button" className="iButton">
          Inventory
        </button>
        <button type="button" className="dButton">
          Data Book
        </button>
      </>
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
)(Options);
