import React from "react";
import { Link } from "react-router-dom";

import "./DropDown.css";

const DropDown = props => {
  let dropDownClasses = "DropDown";
  if (props.show) {
    dropDownClasses = "DropDown open";
  }
  return (
    <nav className={dropDownClasses}>
      <ul>
        <li>
          <Link to="/Dice_generation">Dice Generator</Link>
        </li>
        <li>
          <Link to="/Links">Links</Link>
        </li>
      </ul>
    </nav>
  );
};

export default DropDown;
