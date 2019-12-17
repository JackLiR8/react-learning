import React from 'react';
import Game from './demo/TicTacToe';
import Main from './main-concepts/ApiDisplay';
import Advanced from './advanced-guides/AdvancedDemo';
import HookDisplay from './hook/HookDisplay'
import './App.css';

function App() {
  return (
    <div className="App">
      <Game /><hr/>
      <Main/><hr />
      <Advanced /><hr />
      <HookDisplay />
    </div>
  );
}

export default App;
