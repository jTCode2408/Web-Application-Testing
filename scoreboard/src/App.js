import React, {useState} from 'react';
import './App.css';
import Display from './Display';
import Dashboard from './Dashboard';

function App() {

  const [ hits, setHits] = useState(0);
  const [ balls, setBalls] = useState(0);
  const [ strikes, setStrikes] = useState(0);
  const [ innings, setInnings] = useState(1);
  const [fouls, setFouls] = useState(0);





  return (
    <div className="container">
      <Display
        hits = {hits}
        balls = {balls}
        strikes = {strikes}
        innings = {innings}
        fouls = {fouls}

      />
      <Dashboard
        setHits = {setHits}
        setBalls = {setBalls}
        setStrikes = {setStrikes}
        setInnings = {setInnings}
        setFouls = {setFouls}
        balls = {balls}
        strikes = {strikes}
        hits = {hits}
        fouls = {fouls}
      />


    </div>
  );
}

export default App;