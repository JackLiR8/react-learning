import React from 'react';
import Game from './demo/ticTacToe';
import Api from './react-api/ApiDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game /><hr/>
      <Api/>
    </div>
  );
}

export default App;
