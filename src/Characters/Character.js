import React from "react";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import { connect } from "react-redux";
import { getCharacter, getMove1, getMove2 } from "../Redux/actions";
import "./Character.css";
function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

function rand() {
  return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
  const top = 50 + rand();
  const left = 50 + rand();

  return {
    top: `${top}%`,
    left: `${left}%`,
    transform: `translate(-${top}%, -${left}%)`
  };
}

const useStyles = makeStyles((theme) => ({
  paper: {
    position: "absolute",
    width: 400,
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3)
  }
}));

function Character(props) {
  const { name, url, loading, character } = props;

  const classes = useStyles();
  // getModalStyle is not a pure function, we roll the style only on the first render
  const [modalStyle] = React.useState(getModalStyle);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    props.getCharacter(url);
    console.log("hey", character);
    // props.getMove1(character.moves[0].move.url);
    // props.getMove2(character.moves[0].move.url);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const body = (
    <>
      {loading ? (
        <></>
      ) : (
        // <div style={modalStyle} className={classes.paper}>
        //   <h2 id="simple-modal-title">{character.name}</h2>
        //   <h2>Abilities </h2>
        //   {character.abilities ? (
        //     <>

        //       {character.abilities.map((ability) => (
        //         <p>{ability.ability.name}</p>
        //       ))}
        //     </>
        //   ) : (
        //     <></>
        //   )}
        // </div>

        <div className="cardBody">
          <div className="header">
            <p className="basic">Basic Pokémon</p>
            <div className="nameAndHealth">
              <p className="name">{character.name}</p>
              <div className="floatRight">
                <p className="health">{character.base_experience} HP</p>
                <img
                  src="https://jcr08.github.io/pokemon-card/images/water-energy.png"
                  alt="Water Energy Symbol"
                />
              </div>
            </div>
          </div>
          <div className="squirtle">
            <img
              src={character.sprites.front_default}
              alt="Squirtle"
              width="170px"
              height="170px"
            />
          </div>
          <div className="stats">
            <p>Tiny Turtle Pokémon, Length: 1' 8", Weight: 20lbs.</p>
          </div>
          <div className="attacks">
            <div className="specificAttack">
              <div className="energy">
                <img
                  src="https://jcr08.github.io/pokemon-card/images/water-energy.png"
                  alt="Water Energy Symbol"
                />
              </div>
              <div className="attackDescription">
                <p>
                  <span className="attackName">{props.moves[0].name}</span> Flip
                  dfg
                </p>
              </div>
              <div className="power">10</div>
            </div>
            <hr />
            <div className="specificAttack">
              <div className="energy">
                <img
                  src="https://jcr08.github.io/pokemon-card/images/water-energy.png"
                  alt="Water Energy Symbol"
                />
                <img
                  src="https://jcr08.github.io/pokemon-card/images/normal-energy.png"
                  alt="Normal Energy Symbol"
                />
              </div>
              <div className="attackDescription">
                <p>
                  <span className="attackName">Withdraw</span> Flip a coin. If
                  heads, prevent all damage done to Squirtle during your
                  opponent's next turn.
                  <em>(Any other effects of attacks still happen.)</em>
                </p>
              </div>
            </div>
            <hr />
          </div>
          <div className="attributes">
            <div className="weakness">
              <p>weakness</p>
              <img
                src="https://jcr08.github.io/pokemon-card/images/electric-energy.png"
                alt="Electric Energy Symbol"
              />
            </div>
            <div className="resistance">
              <p>resistance</p>
            </div>
            <div className="retreatCost">
              <p>retreat cost</p>
              <img
                src="https://jcr08.github.io/pokemon-card/images/normal-energy.png"
                alt="Normal Energy Symbol"
              />
            </div>
          </div>
          <div className="description">
            <p>
              After birth, its back swells and hardens into a shell. It
              powerfully sprays foam from its mouth. LV. 8 #7
            </p>
          </div>
          <div className="footer">
            <div>
              <strong>Illus.MitsuhiroArica</strong>
              ©1995,96,98,99NintendoCreaturesGAMEFREAK©1999Wizards
              <strong>63/102●</strong>
            </div>
          </div>
        </div>
      )}
    </>
  );

  return (
    <div>
      <Alert onClick={handleOpen} severity="success">
        {name}
      </Alert>
      <br />
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        {body}
      </Modal>
    </div>
  );
}
function mapStateToProps(state) {
  return {
    characters: state.characters,
    loading: state.loading,
    moves: state.moves,
    character: state.character
  };
}
const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: (id) => {
      dispatch(getCharacter(id));
    },
    getMove1: (url) => {
      dispatch(getMove1(url));
    },
    getMove2: () => {
      dispatch(getMove2(url));
    }
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);
