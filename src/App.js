import React, { Suspense, lazy } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom'

const Game = lazy(() => import('./demo/TicTacToe'));
const Main = lazy(() => import('./main-concepts/ApiDisplay'));
const Advanced = lazy(() => import('./advanced-guides/AdvancedDemo'));
const HookDisplay = lazy(() => import('./hook/HookDisplay'));
const AntdDemo = lazy(() => import('./antd/index'))

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
            <Link className="link" to="/antd">antd</Link>&nbsp;
          </fieldset>
        </nav>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/antd">
              <AntdDemo />
            </Route>
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
        </Suspense>
      </div>
    </Router>
  )
}

export default App;
