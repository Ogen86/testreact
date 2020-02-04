import React, { Component } from "react";
import DiceSide from "./diceSide";
import SuccessRate from "./successRate";
import DiceNumber from "./diceNumber";

import "./diceGenerator.css";

const getRandomInt = (min, max) => {
  return Math.floor(Math.random() * max - min + 1) + min;
};

class DiceGenerator extends Component {
  state = {
    result: 0,
    sides: 0,
    dieNumber: 1,
    rate: 0
  };

  handleSideSetting(newSide) {
    this.setState({ sides: newSide });
  }

  handleIncrement() {
    this.setState({ dieNumber: this.state.dieNumber + 1 });
  }

  handleDecrement() {
    if (this.state.dieNumber > 0)
      this.setState({ dieNumber: this.state.dieNumber - 1 });
  }

  handleRateSetting(newRate) {
    this.setState({ rate: newRate });
  }

  handleGenerate() {
    let rollNumber = 0;
    let genRes = 0;
    this.setState({ result: 0 });
    for (rollNumber = 0; rollNumber < this.state.dieNumber; rollNumber++) {
      if (getRandomInt(1, this.state.sides) >= this.state.rate) genRes++;
    }
    this.setState({ result: genRes });
  }

  render() {
    return (
      <div>
        <div>
          <DiceSide
            sides={this.state.sides}
            doSideSet={this.handleSideSetting.bind(this)}
          />
        </div>
        <div>
          <DiceNumber
            numbers={this.state.dieNumber}
            doIncrement={this.handleIncrement.bind(this)}
            doDecrement={this.handleDecrement.bind(this)}
          />
        </div>
        <div>
          <SuccessRate handleChange={this.handleRateSetting.bind(this)} />
        </div>
        <div>
          <button
            onClick={this.handleGenerate.bind(this)}
            className="Generate-button"
          >
            Generate
          </button>
          <div>
            <span className="Success_result_sign">
              rolled successes: {this.state.result}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default DiceGenerator;
