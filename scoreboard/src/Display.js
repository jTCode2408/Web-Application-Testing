//display the count of balls and strikes for the at-bat.
//should be updated when the user records activity on the Dashboard component.
import React from 'react';


const Display = (props) =>{



    return(
      <div className="display-container">

        <section className="scoreboard">
            
             <h1>Batter Up!</h1>
            <div className="score-div">
              <h2 className="score">Score:</h2>
              <div className="score-count">{props.hits}</div>
            </div>
         
          <div className="counter">
            <h3 className="strikes">Strikes: {props.strikes}</h3>
            <h3 className="balls">Balls: {props.balls}</h3>
            <h3 className = "fouls">Fouls: {props.fouls}</h3>
          </div>
        </section>
  
      </div>
  
  
    );
  
  
  
  };
  
  export default Display;