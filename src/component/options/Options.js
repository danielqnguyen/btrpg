import React, { Component } from "react";
import "./Options.css";
import { getCharData } from "../../redux/Action";
import { connect } from "react-redux";
import Status from "./Status";
import $ from "jquery";
import Explore from "./Explore";

class Options extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sModal: false,
      mobCounter: 0,
      loading: true,
      char: {},
      mobData: {},
      wildMob: { name: "" },
      explore: "",
      eModal: false
    };
  }

  componentDidMount() {
    let charData = sessionStorage.getItem("char");
    let charJson = JSON.parse(charData);
    charJson.stats.exp = 0;
    charJson.inventory = ["potion", "weapon", "armor"];
    charJson.gold = 0;
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

  openModal = action => {
    if (action === "status") {
      this.setState({ sModal: true });
    } else if (action === "explore") {
      this.setState({ eModal: true });
    }
  };

  closeModal = action => {
    if (action === "status") {
      this.setState({ sModal: false });
    } else if (action === "explore") {
      this.setState({ eModal: false });
    }
  };

  explore = () => {
    let rng = this.diceRoll();
    console.log("============", rng);
    if (rng === 10) {
      this.setState({ explore: "gettingRobbed" });
      console.log("getting robbed ):");
      this.getRobbed();
    } else if (rng === 9) {
      this.setState({ explore: "randomItem" });
      console.log("Free item!");
      this.randomItem();
    } else if (rng === 8) {
      this.setState({ explore: "merchant" });
      console.log("why hello there");
      // this.merchantAppear();
    } else {
      this.setState({ explore: "wildMob" });
      console.log("grind time");
      this.mobEncounter();
      // }
    }
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
      mob.stats.level =
        this.state.char.stats.level + (Math.floor(Math.random() * 5) + 1);
      this.mobStats("boss", mob.stats.level, mob.name, mob);
      this.setState({ mobCounter: 0 });
    } else {
      let rng = Math.floor(Math.random() * 10) + 1;
      if (rng === this.diceRoll()) {
        mob.stats.level = Math.round(
          this.state.char.stats.level + Math.floor(Math.random() * 3)
        );
        this.mobStats("elite", mob.stats.level, mob.name, mob);
      } else {
        mob.stats.level = this.state.char.stats.level;
        this.mobStats("common", mob.stats.level, mob.name, mob);
        this.setState({ mobCounter: this.state.mobCounter + 1 });
      }
    }
  };

  mobStats = (rarity, level, name, mob) => {
    //might need to fix hp mulitplcation rate
    let stats = mob.stats;
    if (rarity === "common") {
      this.setState({
        wildMob: {
          name,
          level,
          rarity,
          str: stats.str * level,
          agi: stats.agi * level,
          hp: stats.hp * level,
          def: stats.def * level,
          loot: [mob.loot[Math.floor(Math.random() * 2)], mob.loot[3]]
        }
      });
    } else if (rarity === "elite") {
      this.setState({
        wildMob: {
          name,
          level,
          rarity,
          str: Math.round(stats.str * (level * 1.2)),
          agi: Math.round(stats.agi * (level * 1.2)),
          hp: Math.round(stats.hp * (level * 1.2)),
          def: Math.round(stats.def * (level * 1.2)),
          loot: [mob.loot[Math.floor(Math.random() * 2)], mob.loot[3]]
        }
      });
    } else if (rarity === "boss") {
      this.setState({
        wildMob: {
          name,
          level,
          rarity,
          str: Math.round(stats.str * (level * 1.5)),
          agi: Math.round(stats.agi * (level * 1.5)),
          hp: Math.round(stats.hp * (level * 1.5)),
          def: Math.round(stats.def * (level * 1.5)),
          loot: [mob.loot[Math.floor(Math.random() * 2)], mob.loot[3]]
        }
      });
    }
  };

  getRobbed = () => {
    if (this.state.char.inventory.length >= 1) {
      let inventory = this.state.char.inventory;
      inventory.splice(Math.floor(Math.random() * inventory.length), 1);
    } else {
      console.log("nothing to steal you poor guy");
    }
  };

  randomItem = () => {
    let randomItem = ["weapon", "potion", "armor"];
    this.state.char.inventory.push(
      randomItem[Math.floor(Math.random() * randomItem.length)]
    );
  };

  render() {
    return (
      <>
        <Explore
          loading={this.state.loading}
          show={this.state.eModal}
          explore={this.state.explore}
          handleClose={() => this.closeModal("explore")}
        ></Explore>
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
          handleClose={() => this.closeModal("status")}
        ></Status>
        <button
          type="button"
          className="sButton"
          onClick={() => this.openModal("status")}
        >
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
