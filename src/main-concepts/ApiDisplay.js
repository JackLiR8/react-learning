import React from 'react'
import Greet from './Component'
import Clock from './State'
import Event from './Event'
import ConditionalRender from './ConditionalRender'

function Main() {
  return (
    <div>
      <Greet /><hr/>
      <Clock /><hr/>
      <Event /><hr/>
      <ConditionalRender />
    </div>
  )
}

export default Main;