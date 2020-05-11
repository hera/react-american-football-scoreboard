//TODO: STEP 1 - Import the useState hook.
import React, { useState } from "react";
import Scoreboard from "./Scoreboard";
import Buttons from "./Buttons";
import "./App.css";

function App() {
  //TODO: STEP 2 - Establish your applictaion's state with some useState hooks.  You'll need one for the home score and another for the away score.
  let [homeScore, setHomeScore] = useState(0);
  let [awayScore, setAwayScore] = useState(0);

  function addScore(team, score) {
    if (team === "home") {
      setHomeScore(homeScore + score);
    } else if (team === "away") {
      setAwayScore(awayScore + score);
    }
  }

  return (
    <div className="container">
      <Scoreboard homeScore={homeScore} awayScore={awayScore} />
      <Buttons addScore={addScore} />
    </div>
  );
}

export default App;
