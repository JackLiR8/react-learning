import React from 'react'
import Greet from './Component'
import Clock from './State'
import Event from './Event'
import ConditionalRender from './ConditionalRender'
import List from './List'
import Forms from './Form'
import LiftingState from './LiftingState'
import Composition from './Composition'

function Main() {
  return (
    <div>
      <Greet/><hr/>
      <Clock/><hr/>
      <Event/><hr/>
      <ConditionalRender/><hr/>
      <List/><hr/>
      <Forms/><hr/>
      <LiftingState/><hr/>
      <Composition />
    </div>
  )
}

export default Main;