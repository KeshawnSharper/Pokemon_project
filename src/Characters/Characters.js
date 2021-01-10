import React, { Component } from "react";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import Character from "./Character";
import "./Characters.css";
class Characters extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: "",
      searchBtn: false,
      characters: this.props.characters
    };
    this.handleClick = this.handleClick.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  onChange(e) {
    this.setState({
      ...this.state,
      value: e.target.value,

      characters: this.props.characters.filter((character) =>
        character.name.includes(this.state.value)
      )
    });

    console.log(this.state.value);
    console.log(
      this.props.characters.filter((character) =>
        character.name.includes(this.state.value)
      )
    );
  }
  handleClick() {
    this.setState({
      ...this.state,
      searchBtn: true,
      input: true
    });
  }
  // searchBtn.classList.toggle("close");
  // input.classList.toggle("square");
  render() {
    // onChange={(e) => this.onChange(e)}

    return (
      <div>
        <form id="content">
          <input
            type="text"
            onChange={(e) => this.onChange(e)}
            name="input"
            className={this.state.input ? "square" : "input"}
            id="search-input"
          />
          <button
            style={{ cursor: "pointer" }}
            onClick={this.handleClick}
            type="reset"
            class={this.state.searchBtn ? "close" : "search"}
            id="search-btn"
          ></button>
          {this.state.value.length >= 2 ? (
            <ul>
              {this.state.characters
                .map((character) => (
                  <Character name={character.name} url={character.url} />
                ))
                .slice(0, 5)}
            </ul>
          ) : (
            <></>
          )}
        </form>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    character: state.character,
    characters: state.characters
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    searchCharacter: (character) => {
      dispatch(searchCharacter(character));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Characters);
