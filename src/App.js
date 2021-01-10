import React, { useEffect } from "react";
import "./styles.css";
import Characters from "./Characters/Characters";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { getCharacters } from "./Redux/actions";
import { connect } from "react-redux";
import Home from "./Home";
function App(props) {
  useEffect(() => {
    props.getCharacters();
  }, []);
  return (
    <>
      {!props.loading && props.characters.length > 0 ? (
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/home">
            <Characters />
          </Route>
        </Router>
      ) : (
        <></>
      )}
    </>
  );
}

function mapStateToProps(state) {
  return {
    characters: state.characters
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacters: () => {
      dispatch(getCharacters());
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
