import React from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";
import DropDownToggleButton from "../DropDownMenu/DropDownToggleButton";
import logo from "../pictures/PngJoy_wolf-icon-space-wolves-transparent-png_6236993.png";

const NavBar = props => (
  <header className="NavBar">
    <nav className="NavBar_navigation">
      <div className="ToggleButton">
        <DropDownToggleButton click={props.dropClickHandler} />
      </div>
      <div className="NavBar_Logo">
        <Link to="/">
          <img style={{ width: 45, height: 45 }} src={logo} />
        </Link>
      </div>
      <div className="spacer" />
      <div className="NavBar_navigation_items">
        <ul>
          <li>
            <Link to="/Dice_generation">dice generation</Link>
          </li>
          <li>
            <Link to="/News">news</Link>
          </li>
        </ul>
      </div>
    </nav>
  </header>
);

export default NavBar;
