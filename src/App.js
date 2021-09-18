import { useState } from "react";
import { Link, Route, Switch } from "react-router-dom";

import paperImg from "./images/icon-paper.svg";
import rockImg from "./images/icon-rock.svg";
import scissorsImg from "./images/icon-scissors.svg";
import triangle from "./images/bg-triangle.svg";

import Header from "./components/Header";
import Buttons from "./components/Buttons";
import Result from "./components/Result";
import Rules from "./components/Rules";

function App() {
  const [myScore, setMyScore] = useState(0);
  const [houseScore, setHouseScore] = useState(0);
  const [myChoiceS, setMyChoiceS] = useState("");
  const [houseChoiceS, setHouseChoiceS] = useState("");
  const [winnerIs, setWinnerIs] = useState("");

  const ROCK = "ROCK";
  const PAPER = "PAPER";
  const SCISSORS = "SCISSORS";

  const winner = (e) => {
    const myChoice = e.target.getAttribute("alt").toUpperCase();
    let houseChoice = Math.random();
    console.log(houseChoice);
    if (houseChoice < 0.33) {
      houseChoice = ROCK;
    } else if (houseChoice > 0.33 && houseChoice <= 0.65) {
      houseChoice = PAPER;
    } else {
      houseChoice = SCISSORS;
    }

    setMyChoiceS(myChoice);
    setHouseChoiceS(houseChoice);

    battle(myChoice, houseChoice);
  };

  const battle = (player1, player2) => {
    if (
      (player1 === ROCK && player2 === SCISSORS) ||
      (player1 === PAPER && player2 === ROCK) ||
      (player1 === SCISSORS && player2 === PAPER)
    ) {
      setWinnerIs("You Win");
      setMyScore(myScore + 1);
    } else if (player2 === player1) {
      setWinnerIs("Is a draw");
      return;
    } else {
      setWinnerIs("House Win");
      setHouseScore(houseScore + 1);
    }
  };

  const restart = () => {
    setMyScore(0);
    setHouseScore(0);
  };

  return (
    <>
      <Header myScore={myScore} houseScore={houseScore} />
      <Switch>
        <Route exact path="/">
          <div className="home">
            <img src={triangle} alt="triangle" className='triangle'/>
            <Link to="/result">
              <img src={paperImg} alt="paper" onClick={winner} />
            </Link>
            <Link to="/result">
              <img src={rockImg} alt="rock" onClick={winner} />
            </Link>
            <Link to="/result">
              <img src={scissorsImg} alt="scissors" onClick={winner} />
            </Link>
          </div>
        </Route>

        <Route path="/result">
          <Result
            myChoiceS={myChoiceS}
            houseChoiceS={houseChoiceS}
            winnerIs={winnerIs}
          />
        </Route>
        <Route path="/rules">
          <Rules />
        </Route>
      </Switch>

      <Buttons restart={restart} />
    </>
  );
}

export default App;
