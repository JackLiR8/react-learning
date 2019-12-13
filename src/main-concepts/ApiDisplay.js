import React from 'react'
import Greet from './Component'
import Clock from './State'
import Event from './Event'

function Main() {
  return (
    <div>
      <Greet /><hr/>
      <Clock /><hr/>
      <Event />
    </div>
  )
}

export default Main;