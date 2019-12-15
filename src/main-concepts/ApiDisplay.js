import React from 'react'
import Greet from './Component'
import Clock from './State'
import Event from './Event'
import ConditionalRender from './ConditionalRender'
import List from './List'
import Forms from './Form'
import LiftingState from './LiftingState'

function Main() {
  return (
    <div>
      <Greet/><hr/>
      <Clock/><hr/>
      <Event/><hr/>
      <ConditionalRender/><hr/>
      <List/><hr/>
      <Forms/><hr/>
      <LiftingState/>
    </div>
  )
}

export default Main;