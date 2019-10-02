import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import CharSelect from "./component/charSelect/CharSelect";
import Options from "./component/options/Options";

class Navigation extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={CharSelect}></Route>
        <Route exact path="/options" component={Options}></Route>
      </>
    );
  }
}

export default Navigation;
