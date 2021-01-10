import React, { useState } from "react";
import Characters from "./Characters/Characters";
import "./Home.css";
const Home = (props) => {
  const [search, SetSearch] = useState(false);
  const click = () => {
    SetSearch(true);
  };
  return (
    <>
      {!search ? (
        <div>
          {/*  Meta  */}
          <meta charSet="UTF-8" />
          <title>My New Pen!</title>
          <link
            href="https://fonts.googleapis.com/css?family=Joti+One"
            rel="stylesheet"
          />
          <link
            href="https://fonts.googleapis.com/css?family=Russo+One"
            rel="stylesheet"
          />
          {/*  Styles  */}
          <link rel="stylesheet" href="Pokemon.css" />
          <div id="game-div">
            <div id="stats">
              <h1>
                Points: <span id="points">0</span>
              </h1>
              <h1>
                Round: <span id="rounds">0</span>/10
              </h1>
            </div>
            <div id="mDiv"></div>
          </div>
          <div style={{ cursor: "pointer" }} id="menu-title" onClick={click}>
            <h1 id="mTitle">
              Who's that <br />
              <span className="pokemon-header">POKEMON?</span>
            </h1>
            <h2 className="pokeHeaders">PRESS ANY KEY TO START</h2>
          </div>
          <div id="sTitle">
            <div id="tabs">
              <div id="tab-1" className="tabs">
                <h2>PLAY NOW</h2>
              </div>
              <div id="tab-2" className="tabs">
                <h2>POKEMON FOUND</h2>
              </div>
              <div id="tab-3" className="tabs">
                <h2>POKEDEX</h2>
              </div>
            </div>
          </div>
          <div id="gPick">
            <div id="row_1" className="row">
              <div className="gen-box" id="gen-1">
                <h3>GEN 1</h3>
              </div>
              <div className="gen-box" id="gen-2">
                <h3>GEN 2</h3>
              </div>
            </div>
            <div id="row_2" className="row">
              <div className="gen-box" id="gen-3">
                <h3>GEN 3</h3>
              </div>
              <div className="gen-box" id="gen-4">
                <h3>GEN 4</h3>
              </div>
            </div>
            <div id="row_3" className="row">
              <div className="gen-box" id="gen-5">
                <h3>GEN 5</h3>
              </div>
              <div className="gen-box" id="gen-6">
                <h3>GEN 6</h3>
              </div>
            </div>
            <div id="row_4" className="row">
              <div className="gen-box" id="all">
                <h3>ALL</h3>
              </div>
            </div>
          </div>
          <div id="oMenu"></div>
          <div id="pokemon-details">
            <div className="details-con">
              <h2 id="pokemon-name" />
            </div>
            <img id="pokedex_image" src />
            <div className="details-con">
              <h2 id="pokemon-num" />
            </div>
            <button className="back-btn">Back to menu</button>
          </div>
          <div id="pokemon-found">
            <button className="back-btn" id="back-btn-1">
              Back to menu
            </button>
          </div>
        </div>
      ) : (
        <Characters />
      )}
    </>
  );
};
export default Home;
