//provide a button that the person in charge can press every time there is a strike, ball, foul or hit.(single, double, doesnt matter.
//changes recorded on this component should update the information shown by the Display component.
import React, {useState} from 'react';
import Display from './Display';
const Dashboard = (props) =>{


  return(
    <div className="dashboard-container">
      <section className="buttons">
        <div className="homeButtons">

          <button className="homeButtons__touchdown" onClick={() => props.setBalls(addBall(props.balls))}>Ball</button>

          <button className="homeButtons__fieldGoal" onClick={() => {
            let values = addStrike(props.strikes);
            props.setStrikes(values[0]);
          }}>Strike</button>

          <button className="awayButtons__touchdown" onClick={()=> props.setFouls(addFoul(props.fouls))}>Foul</button>
          <button className="awayButtons__fieldGoal" onClick={()=> {
              props.setHits(props.hits +1); 
            props.setStrikes(0);
            props.setBalls(0);

          }}>Hit</button>
        </div>
      </section>
    </div>


  );



};

const addBall = (prevCount) => {

  let newCount = prevCount + 1;

  if(newCount > 3){
    newCount = 0;
  }

  return newCount;

}

const addStrike = (prevStrike) => {
  let newStrike = prevStrike + 1;
  console.log(prevStrike);

  if (newStrike > 2){
    newStrike = 0;

  }

  return newStrike;

}

const addFoul = (prevFoul) => {
  let newFoul = prevFoul + 1;

  if (newFoul > 2){
    newFoul = 2;
  }

  return newFoul;

}


export default Dashboard;
export {addBall, addStrike, addFoul};