import React from 'react';
import "./App.css";


function Buttons (props) {
    let { addScore } = props;
    
    return (
        <section className="buttons">
        <div className="homeButtons">

          {/* TODO STEP 4 - Now we need to attach our state setter functions to click listeners. */}
          <button className="homeButtons__touchdown" onClick={() => addScore('home', 7)}>Home Touchdown</button>
          <button className="homeButtons__fieldGoal" onClick={() => addScore('home', 3)}>Home Field Goal</button>
        </div>
        <div className="awayButtons">
          <button className="awayButtons__touchdown" onClick={() => addScore('away', 7)}>Away Touchdown</button>
          <button className="awayButtons__fieldGoal" onClick={() => addScore('away', 3)}>Away Field Goal</button>
        </div>
      </section>
    );
}

export default Buttons;