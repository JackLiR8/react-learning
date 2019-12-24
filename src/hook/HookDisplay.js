import React from 'react'
import StateHook from './StateHook'
import EffectHook from './EffectHook'
import Board from './useContext'

function HookDisplay() {
  return (
    <div>
      <h1>Hook</h1>
      <StateHook />
      <EffectHook />
      <Board />
    </div>
  )
}

export default HookDisplay;