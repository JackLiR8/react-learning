import React from 'react'
import StateHook from './StateHook'
import EffectHook from './EffectHook'
import Board from './useContext'
import ReducerBox from './useReducer'
import RefHook from './useRef'
import CallbackHook from './useCallback'

function HookDisplay() {
  return (
    <div>
      <h1>Hook</h1>
      <StateHook />
      <EffectHook />
      <Board />
      <ReducerBox />
      <RefHook />
      <CallbackHook />
    </div>
  )
}

export default HookDisplay;