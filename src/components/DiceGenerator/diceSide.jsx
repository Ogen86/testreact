import React, { Component } from "react";
import "./diceSide.css";

class DiceSide extends Component {
  sideSet(number) {
    this.props.doSideSet(number);
  }

  render() {
    return (
      <React.Fragment>
        <span className="side-text">The simulated dice side number:</span>
        <span className="side-sign">{this.props.sides}</span>
        <div className="side-button-container">
          <button onClick={() => this.sideSet(4)} className="side-btn">
            4 side
          </button>
          <button onClick={() => this.sideSet(6)} className="side-btn">
            6 side
          </button>
          <button onClick={() => this.sideSet(8)} className="side-btn">
            8 side
          </button>
          <button onClick={() => this.sideSet(10)} className="side-btn">
            10 side
          </button>
          <button onClick={() => this.sideSet(12)} className="side-btn">
            12 side
          </button>
          <button onClick={() => this.sideSet(20)} className="side-btn">
            20 side
          </button>
        </div>
      </React.Fragment>
    );
  }
}

export default DiceSide;
