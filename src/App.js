import React from 'react';
import Game from './demo/TicTacToe';
import Main from './main-concepts/ApiDisplay';
import './App.css';

function App() {
  return (
    <div className="App">
      <Game /><hr/>
      <Main/>
    </div>
  );
}

export default App;
