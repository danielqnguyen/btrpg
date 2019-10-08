import React, { Component } from "react";
import "./Options.css";
import { getCharData } from "../../redux/Action";
import { connect } from "react-redux";
import Status from "./Status";
import $ from "jquery";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sModal: false,
      mobCounter: 0,
      loading: true,
      char: {},
      mobData: {}
    };
  }

  componentDidMount() {
    let charData = sessionStorage.getItem("char");
    let charJson = JSON.parse(charData);
    charJson.stats.exp = 0;
    this.setState({ char: charJson, loading: false });
    console.log(charJson, this.state);

    $.ajax({
      url: "/mobData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        this.setState({ mobData: data.monster.mobs });
      }.bind(this)
    });
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
    console.log(rng);
    // if (rng == 10) {
    //   this.getRobbed();
    // } else if (rng == 9) {
    //   this.randomItem();
    // } else if (rng == 8) {
    //   this.merchantAppear();
    // } else {
    this.mobEncounter();
    // }
  };

  diceRoll = () => {
    let rng = Math.floor(Math.random() * 10) + 1;
    return rng;
  };

  mobEncounter = () => {
    console.log(this.state.mobCounter);
    let mobList = this.state.mobData;
    let mob = mobList[Math.floor(Math.random() * mobList.length)];
    console.log("ASDQWE", mob);

    if (this.state.mobCounter === 10) {
      console.log("Boss Stage");
      mob.stats.level = Math.round(
        this.state.char.stats.level + (Math.floor(Math.random() * 5) + 1) * 2
      );
      this.mobStats("boss", mob.stats.level, mob.name);
      this.setState({ mobCounter: 0 });
    } else {
      let rng = Math.floor(Math.random() * 10) + 1;
      console.log("MOB APPEARS");
      if (rng === this.diceRoll()) {
        mob.stats.level = Math.round(
          this.state.char.stats.level +
            (Math.floor(Math.random() * 5) + 1) * 1.5
        );
        this.mobStats("elite", mob.stats.level, mob.name);
        console.log(mob, "======elite======");
      } else {
        mob.stats.level =
          this.state.char.stats.level + (Math.floor(Math.random() * 5) + 1);
        this.mobStats("common", mob.stats.level, mob.name);
        this.setState({ mobCounter: this.state.mobCounter + 1 });
        console.log(mob, "=====COMMOn=======");
      }
    }
  };

  mobStats = (rarity, level, name) => {
    if (rarity === "common") {
      console.log("common mob stats");
      console.log(name);
    } else if (rarity === "elite") {
      console.log("elite mob stats");
    } else if (rarity === "boss") {
      console.log("boss mob stats");
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
        <button type="button" onClick={() => console.log(this.state)}></button>
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