import React from "react";
import "./charSelect.css";

const CharSelect = props => (
  <div>
    <button
      className="wButton"
      onClick={() => {
        console.log(props.warrior);
      }}
    >
      Warrior
    </button>
    <button className="tButton">Theif</button>
  </div>
);

export default CharSelect;
