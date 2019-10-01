import React, { Component } from "react";
import "./Explore.css";

class Explore extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  checkStats = () => {
    console.log(this.props.getCharData);
  };

  render() {
    return (
      <>
        <button type="button" className="eButton">
          Explore
        </button>
        <button type="button" className="rButton">
          Rest
        </button>
        <button
          type="button"
          className="sButton"
          onClick={() => this.checkStats()}
        >
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

export default Explore;
