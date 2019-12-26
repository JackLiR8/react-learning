import React from 'react'
import StateHook from './StateHook'
import EffectHook from './EffectHook'
import Board from './useContext'
import ReducerBox from './useReducer'
import RefHook from './useRef'

function HookDisplay() {
  return (
    <div>
      <h1>Hook</h1>
      <StateHook />
      <EffectHook />
      <Board />
      <ReducerBox />
      <RefHook />
    </div>
  )
}

export default HookDisplay;