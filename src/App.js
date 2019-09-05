import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import CharSelect from "./component/charSelect/charSelect";
import WarriorStats from "./component/Warrior/warrior";
import TheifStats from "./component/Theif/theif";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      charSheet: ""
    };
  }

  getCharData() {
    $.ajax({
      url: "/characterData.json",
      dataType: "json",
      cache: false,
      success: function(data) {
        console.log(data);
        this.setState({ charSheet: data });
      }.bind(this),
      error: function(xhr, status, err) {
        console.log(err);
      }
    });
  }

  componentDidMount() {
    this.getCharData();
  }

  render() {
    return (
      <div className="App">
        <h1>Class Selection</h1>
        <CharSelect
          warrior={this.state.charSheet.warrior}
          theif={this.state.charSheet.theif}
        />
        <WarriorStats />
        <TheifStats />
      </div>
    );
  }
}

export default App;
