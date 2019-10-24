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
    charJson.exp = 0;
    charJson.inventory = ["potion", "weapon", "armor"];
    charJson.gold = 0;
    charJson.maxHp = charJson.hp;
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
      // } else if (action === "explore") {
      //   this.setState({ eModal: true });
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
    this.setState({ eModal: true });
  };

  diceRoll = () => {
    let rng = Math.floor(Math.random() * 10) + 1;
    return rng;
  };

  mobEncounter = () => {
    let mobList = this.state.mobData;
    let mob = mobList[Math.floor(Math.random() * mobList.length)];
    if (this.state.mobCounter === 10) {
      mob.stats.level =
        this.state.char.level + (Math.floor(Math.random() * 5) + 1);
      this.mobStats("boss", mob.stats.level, mob.name, mob);
      this.setState({ mobCounter: 0 });
    } else {
      this.setState({ mobCounter: this.state.mobCounter + 1 });
      let rng = Math.floor(Math.random() * 10) + 1;
      if (rng === this.diceRoll()) {
        mob.stats.level = Math.round(
          this.state.char.level + Math.floor(Math.random() * 3)
        );
        this.mobStats("elite", mob.stats.level, mob.name, mob);
      } else {
        mob.stats.level = this.state.char.level;
        this.mobStats("common", mob.stats.level, mob.name, mob);
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
          cHp: stats.hp * level,
          def: stats.def * level,
          gold: Math.round(Math.random() * 5),
          exp: level * 5,
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
          cHp: Math.round(stats.hp * (level * 1.2)),
          def: Math.round(stats.def * (level * 1.2)),
          gold: Math.round(Math.random() * 10),
          exp: level * 10,
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
          cHp: Math.round(stats.hp * (level * 1.5)),
          def: Math.round(stats.def * (level * 1.5)),
          gold: Math.round(Math.random() * 20),
          exp: level * 20,
          loot: [mob.loot[Math.floor(Math.random() * 2)], mob.loot[3]]
        }
      });
    }
  };

  fight = () => {
    let aDmg = this.attackDmgCalc();
    let attack = aDmg - this.state.wildMob.def;
    let dmgGiven = this.state.wildMob.cHp - attack;
    this.setState(prevState => {
      let wildMob = { ...prevState.wildMob };
      wildMob.cHp = dmgGiven;
      return { wildMob };
    });
    if (this.state.wildMob.cHp <= 0 || attack >= this.state.wildMob.cHp) {
      this.battleWon(this.state.wildMob.exp);
      this.setState({ wildMob: [], explore: "endScreen" });
    }
    let eDmg = this.enemyAttDmgCalc();
    let eAttack = eDmg - this.state.char.def;
    let dmgTaken = this.state.char.hp - eAttack;
    this.setState(prevState => {
      let char = { ...prevState.char };
      char.hp = dmgTaken;
      return { char };
    });
    if (this.state.char.hp <= 0 || eAttack >= this.state.char.hp) {
      this.setState(prevState => {
        let char = { ...prevState.char };
        char.hp = this.state.char.maxHp;
        return { char };
      });
      this.setState({ explore: "endScreen2" });
    }
  };

  attackDmgCalc = () => {
    if (this.state.char.job === "Warrior") {
      return this.state.char.str + this.state.char.agi / 2;
    } else {
      return this.state.char.agi + this.state.char.str / 2;
    }
  };

  enemyAttDmgCalc = () => {
    return this.state.wildMob.str + this.state.wildMob.agi;
  };

  battleWon = obtainedExp => {
    console.log("-ff7 victory music-");
    let currentExp = this.state.char.exp;
    let newExp = Object.assign({}, this.state.char);
    newExp.exp = currentExp + obtainedExp;
    console.log(newExp);
    if (newExp.exp === this.state.char.level * 10) {
      this.levelUp();
    } else {
      this.setState({ char: newExp });
      console.log("exp gained");
    }
  };

  levelUp = () => {
    console.log("levelup");
    let currentStats = this.state.char;
    let levelUp = Object.assign({}, this.state.char);
    levelUp.level = currentStats.level + 1;
    levelUp.str = currentStats.str + 10;
    levelUp.agi = currentStats.agi + 5;
    levelUp.def = currentStats.def + 2;
    levelUp.maxHp = currentStats.maxHp + Math.round(currentStats.maxHp / 2);
    this.setState({ char: levelUp });
    setTimeout(() => {
      this.healHp();
    }, 1000);
  };

  healHp = () => {
    let healHp = Object.assign({}, this.state.char);
    healHp.hp = this.state.char.maxHp;
    console.log(healHp);
    this.setState({ char: healHp });
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
          wildMob={this.state.wildMob}
          fight={this.fight}
          handleClose={() => this.closeModal("explore")}
        ></Explore>
        <button type="button" className="eButton" onClick={this.explore}>
          Explore
        </button>
        <button type="button" className="rButton" onClick={this.healHp}>
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
