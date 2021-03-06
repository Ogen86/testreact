import React, { Component } from "react";

import "./Links.css";

class Links extends Component {
  state = {};
  render() {
    return (
      <div className="links-home-container">
        <h1 className="links-main-header">Links</h1>
        <p className="links-parags">
          {" "}
          In this section, I collected my favoured links. If you'reinterested in
          the hobby, feel free to click on them.
        </p>
        <p className="links-note">
          These link are not for commercial purposes, I am not sponsored by any
          of them.
        </p>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href = "https://www.warhammer-community.com/";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers"> Warhammer community</h4>
            <p className="links-parags">
              A website for the community, who play with the Games-Workshop
              company's products
            </p>
          </div>
        </div>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href = "https://www.belloflostsouls.net/";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers">Bell of Lost Souls</h4>
            <p className="links-parags">
              Website for anyone, who's into tabletop gaming and rpg's.{" "}
            </p>
          </div>
        </div>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href = "https://wargameexclusive.com/";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers">Wargame Exclusive</h4>
            <p className="links-parags">
              As the name dictates, they are making models for wargaming. They
              are third party producers, giving the fans great looking models.
              At first they were famous for their female models, which were
              scarcity at their startup time
            </p>
          </div>
        </div>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href = "https://www.urbanmatz.com/";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers">Urbanmatz</h4>
            <p className="links-parags">
              They are producing gaming mattresses and accessories for mainly
              tabletop gaming.
            </p>
          </div>
        </div>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href = "https://anvilindustry.co.uk/";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers">Anvil industry</h4>
            <p className="links-parags">
              At first they were third party producers, producing "bitz" for
              models, now they also have their own range of models as well.
            </p>
          </div>
        </div>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href = "https://www.thediceshoponline.com/";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers">Dice Shop</h4>
            <p className="links-parags">
              They are selling a wide variety of dices,for nearly any games.
            </p>
          </div>
        </div>
        <div className="links-link-container">
          <button
            className="links-linkbtn"
            onClick={() => {
              window.location.href =
                "http://www.giantitp.com/comics/oots0001.html";
              return null;
            }}
          >
            {" "}
            link{" "}
          </button>
          <div className="links-link-text-container">
            <h4 className="links-headers">
              Giants in the playground - The Order of the Stick
            </h4>
            <p className="links-parags">
              My favourite webcomic. If someone played D&D it is a must-read
              comic, if not, then there is a lot of jokes for them as well!
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Links;
