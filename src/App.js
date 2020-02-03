import React, { Component } from "react";

import NavBar from "./components/navBar/NavBar";
import DropDown from "./components/DropDownMenu/DropDown";
import BackDrop from "./components/BackDrop/BackDrop";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Switch } from "react-router-dom";

import HomePage from "./components/Homepage/HomePage";
import DiceGenerator from "./components/DiceGenerator/diceGenerator";
import NewsFeed from "./components/NewsFeed/NewsFeed";

class App extends Component {
  state = {
    dropDownOpen: false
  };

  dropDownToggleHandler = () => {
    this.setState(prevState => {
      return { dropDownOpen: !prevState.dropDownOpen };
    });
  };

  backDropClickHandler = () => {
    this.setState({ dropDownOpen: false });
  };

  render() {
    let backDrop;

    if (this.state.dropDownOpen) {
      backDrop = <BackDrop click={this.backDropClickHandler} />;
    }
    return (
      <div style={{ height: "100%" }}>
        <NavBar dropClickHandler={this.dropDownToggleHandler} />
        <DropDown show={this.state.dropDownOpen} />
        {backDrop}
        <main style={{ marginTop: "64px" }}>
          <Router>
            <Switch>
              <Route exact path="/Home" component={HomePage}>
                <HomePage />
              </Route>
              <Route path="/Dice_generation" component={DiceGenerator}>
                <DiceGenerator />
              </Route>
              <Route path="/News" component={NewsFeed}>
                <NewsFeed />
              </Route>
            </Switch>
          </Router>
        </main>
      </div>
    );
  }
}

export default App;
