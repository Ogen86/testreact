import React, { Component } from "react";
import "font-awesome/css/font-awesome.min.css";

import "./HomePage.css";
import codePic from "../pictures/css-code-pic.jpg";

class HomePage extends Component {
  state = {};
  render() {
    return (
      <div>
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
        <div className="parag-box">
          <div className="spacer"></div>
          <p className="home-parag">
            The picture hold's the personal contact's, to reveal them, hover on
            it, or in small display, click on it. This homepage is for react
            code testing. Only a minimalistic design, with some css code try.
            The page was mainly a link collection for me, but feel free to visit
            these links.
          </p>
          <div className="spacer"></div>
        </div>
      </div>
    );
  }
}

export default HomePage;
