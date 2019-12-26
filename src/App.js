import React from 'react';
import Game from './demo/TicTacToe';
import Main from './main-concepts/ApiDisplay';
import Advanced from './advanced-guides/AdvancedDemo';
import HookDisplay from './hook/HookDisplay'
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

/* function App() {
  return (
    <div className="App">
      <Game /><hr/>
      <Main/><hr />
      <Advanced /><hr />
      <HookDisplay />
    </div>
  );
} */

function App() {
  return (
    <Router>
      <div>
        <nav>
          <fieldset>
            <legend><h2>Nav</h2></legend>
            <Link className="link" to="/" >Home</Link>&nbsp;
            <Link className="link" to="/advanced" >Advanced</Link>&nbsp;
            <Link className="link" to="/hooks">Hooks</Link>&nbsp;
          </fieldset>
        </nav>

        <Switch>
          <Route path="/advanced">
            <Advanced />
          </Route>
          <Route path="/hooks">
            <HookDisplay />
          </Route>
          <Route path="/">
            <Game />
            <Main />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App;
