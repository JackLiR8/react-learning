import React from 'react'
import Greet from './Component'
import Clock from './State'
import Event from './Event'
import ConditionalRender from './ConditionalRender'
import List from './List'
import Forms from './Form'

function Main() {
  return (
    <div>
      <Greet/><hr/>
      <Clock/><hr/>
      <Event/><hr/>
      <ConditionalRender/><hr/>
      <List/><hr/>
      <Forms/>
    </div>
  )
}

export default Main;