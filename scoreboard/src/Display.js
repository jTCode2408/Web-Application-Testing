//display the count of balls and strikes for the at-bat.
//should be updated when the user records activity on the Dashboard component.
import React from 'react';


    const Display = (props) => {
        return (
          <div className="balls-display">
            <div className="balls">
              <h3 className="balls-text">Balls:</h3>
        <div className="balls-count">{props.balls}</div>
            </div>
            <div className="strikes-display">
              <h3 className="strikes-text">Strikes:</h3>
        <div className="strikes-count">{props.strikes}</div>
            </div>
            <div className="Inning">
              <h3 className="inning-text">Inning:</h3>
              <div className="inning-count">3</div>
            </div>
          </div>
        );
      };
      
      export default Display;