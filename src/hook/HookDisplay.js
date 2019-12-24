import React from 'react'
import StateHook from './StateHook'
import EffectHook from './EffectHook'
import Board from './useContext'
import ReducerBox from './useReducer'

function HookDisplay() {
  return (
    <div>
      <h1>Hook</h1>
      <StateHook />
      <EffectHook />
      <Board />
      <ReducerBox />
    </div>
  )
}

export default HookDisplay;