import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import DropDownToggleButton from "../DropDownMenu/DropDownToggleButton";

const NavBar = props => (
  <header className="NavBar">
    <nav className="NavBar_navigation">
      <div className="ToggleButton">
        <DropDownToggleButton click={props.dropClickHandler} />
      </div>
      <div className="NavBar_Logo">
        <Link to="Home">Logo </Link>
      </div>
      <div className="spacer" />
      <div className="NavBar_navigation_items">
        <ul>
          <li>
            <Link to="Dice_generation">dice generation</Link>
          </li>
          <li>
            <Link to="News">news</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
