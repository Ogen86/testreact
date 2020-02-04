import React, { Component } from "react";
import "./diceNumber.css";

class DiceNumber extends Component {
  state = {
    number: 1
  };

  render() {
    return (
      <React.Fragment>
        <span className="number-text">the number of die :</span>
        <button
          onClick={() => this.props.doDecrement()}
          className="generic-button"
        >
          -
        </button>
        <span className="number-sign"> {this.props.numbers} </span>
        <button
          onClick={() => this.props.doIncrement()}
          className="generic-button"
        >
          +
        </button>
      </React.Fragment>
    );
  }
}

export default DiceNumber;
