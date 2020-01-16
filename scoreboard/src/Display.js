//display the count of balls and strikes for the at-bat.
//should be updated when the user records activity on the Dashboard component.
import React from 'react';


const Display = (props) =>{



    return(
      <div className="display-container">
        <section className="scoreboard">
          <div className="topRow">
            <div className="home">
              <h2 className="home__name">Score:</h2>
              <div className="home__score">{props.hits}</div>
            </div>
          </div>
          <div className="counter">
            <h3 className="strikes">Strikes: {props.strikes}</h3>
            <h3 className="balls">Balls: {props.balls}</h3>
            <h3>Fouls: {props.fouls}</h3>
          </div>
        </section>
  
      </div>
  
  
    );
  
  
  
  };
  
  export default Display;