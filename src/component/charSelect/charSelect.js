import React, { Component } from "react";
import "./CharSelect.css";
import WarriorSelection from "../warrior/WarriorSelection";
import RogueSelection from "../rogue/RogueSelection";
import { connect } from "react-redux";
import { getCharData } from "../../redux/Action";
import $ from "jquery";

class CharSelect extends Component {
  constructor(props) {
    super(props);
    this.state = {
      show1: false,
      show2: false,
      charSheet: "",
      loading: true
    };
  }

  componentDidMount() {
    $.ajax({
      url: "/characterData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({ charSheet: data, loading: false });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
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

  chooseJob = jobStat => {
    this.props.getUserCharData(jobStat);

    this.props.history.push("/options");
  };

  render() {
    if (this.state.loading) {
      return "Loading...";
    }
    return (
      <div>
        <h1>Class Selection</h1>
        <WarriorSelection
          handleClose={this.hideModal1}
          show={this.state.show1}
          info={this.state.charSheet.warrior}
          chooseJob={() => this.chooseJob(this.state.charSheet.warrior)}
        ></WarriorSelection>
        <button type="button" onClick={this.showModal1}>
          Warrior
        </button>
        <RogueSelection
          handleClose={this.hideModal2}
          show={this.state.show2}
          info={this.state.charSheet.rogue}
          chooseJob={() => this.chooseJob(this.state.charSheet.rogue)}
        ></RogueSelection>
        <button type="button" onClick={this.showModal2}>
          Rogue
        </button>
        <button onClick={() => console.log(this.state)}></button>
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
