import axios from "axios";

export function getCharacters() {
  return (dispatch) => {
    dispatch({
      type: "GET_CHARACTERS"
    });
    axios
      .get(`https://pokeapi.co/api/v2/pokemon?limit=1118`)
      .then((res) => {
        dispatch({
          type: "GET_CHARACTERS_SUCCESS",
          characters: res.data.results
        });
      })
      .catch((err) => {
        dispatch({ type: "GET_CHARACTERS_FAILED", characters: err });
      });
  };
}
export function getCharacter(url) {
  return (dispatch) => {
    dispatch({
      type: "GET_CHARACTER"
    });
    axios.get(url).then((res) => {
      dispatch({
        type: "GET_CHARACTER_SUCCESS",
        character: res.data
      });
      getMove1(res.data.moves[0].move.url, dispatch);
      getMove2(res.data.moves[1].move.url, dispatch);
    });
  };
}
export function getMove1(url, dispatch) {
  dispatch({
    type: "GET_MOVES"
  });
  axios.get(url).then((res) => {
    dispatch({
      type: "GET_MOVE1_SUCCESS",
      move: res.data
    });
  });
}

export function getMove2(url, dispatch) {
  axios.get(url).then((res) => {
    dispatch({
      type: "GET_MOVE2_SUCCESS",
      move: res.data
    });
  });
}
