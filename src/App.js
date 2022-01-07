import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

function App() {
  return (
    <div className="App">
      <h1>This is from BPL players Draft 2022</h1>

      <MyProfile salary='7000' name='Sakib'></MyProfile>
      <MyProfile></MyProfile>
      <MyProfile></MyProfile>



    </div>
  );
}

function MyProfile(props) {

  const [state, changeState] = useState('Player');
  const [salary, setSalary] = useState(props.salary ? props.salary : 5000);

  const yourStyle = {
    backgroundColor: 'aqua',
    borderRadius: '10px',
    margin: '20px',
    padding: '5px'
  }

  function handleCC() {
    if (state == 'Player' || state == 'Batter') {
      changeState('Bowler');
    }
    else if (state == 'Player' || state == 'Bowler') {
      changeState('Batter');
    }
  }

  function handleIncSalary() {
    setSalary(salary + 500);
  }
  function handleDecSalary() {
    setSalary(salary - 500);
  }

  return (
    <div style={yourStyle}>
      <h2>Player Name:{props.name}</h2>
      <h2>Category:  {state}</h2>
      <h2>Realease Cost:  {salary} USD</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'auto 200px auto', gridGap: '10px' }}>
        <button onClick={handleDecSalary} style={{ backgroundColor: 'red' }} >Decrease Salary</button>
        <button onClick={handleCC} style={{ backgroundColor: 'blue' }} >Change Category</button>
        <button onClick={handleIncSalary} style={{ backgroundColor: 'green' }} >Increase Salary</button>
      </div>
    </div>
  );
}

export default App;
