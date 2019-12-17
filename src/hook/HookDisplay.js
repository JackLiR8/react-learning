import React from 'react'
import StateHook from './StateHook'
import EffectHook from './EffectHook'

function HookDisplay() {
  return (
    <div>
      <h1>Hook</h1>
      <StateHook />
      <EffectHook />
    </div>
  )
}

export default HookDisplay;