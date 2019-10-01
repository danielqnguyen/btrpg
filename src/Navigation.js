import React, { Component } from "react";
import { Route, NavLink } from "react-router-dom";
import CharSelect from "./component/charSelect/CharSelect";
import Explore from "./component/explore/Explore";

class Navigation extends Component {
  render() {
    return (
      <>
        <Route exact path="/" component={CharSelect}></Route>
        <Route exact path="/explore" component={Explore}></Route>
      </>
    );
  }
}

export default Navigation;
