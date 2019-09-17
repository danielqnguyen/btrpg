import React, { Component } from "react";
import "./App.css";
import $ from "jquery";
import CharSelect from "./component/charSelect/CharSelect";

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
        <CharSelect
          warrior={this.state.charSheet.warrior}
          rogue={this.state.charSheet.rogue}
        />
        <button onClick={() => console.log(this.state)}></button>
      </div>
    );
  }
}

export default App;
