import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./HomePage.css";
import codePic from "../pictures/css-code-pic.jpg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div className="card-container">
        <div className="spacer"></div>
        <div className="card">
          <div className="card-front">
            <img src={codePic} />
          </div>
          <div className="card-back">
            <div className="card-details">
              <h2 className="card-header">Köller Bálint</h2>
              <span className="card-span">Junior fejlesztő</span>
              <div className="card-social-details">
                <a
                  className="social-icons"
                  href="https://www.facebook.com/balint.koller.9"
                >
                  <i class="fa fa-facebook" aria-hidden="true"></i>
                </a>
                <a className="social-icons" href="https://github.com/Ogen86">
                  <i class="fa fa-github" aria-hidden="true"></i>
                </a>
                <a
                  className="social-icons"
                  href="https://www.linkedin.com/in/b%C3%A1lint-k%C3%B6ller-2a0a1697/"
                >
                  <i class="fa fa-linkedin" aria-hidden="true"></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="spacer"></div>
      </div>
    );
  }
}

export default HomePage;
