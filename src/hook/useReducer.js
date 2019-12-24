/**
 * @file useReducer
 */

import React, { useReducer } from 'react'

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    default:
      throw new Error()
  }
}

const initialState = { count: 0 }

function Counter() {
  const [state, dispatch] = useReducer(reducer, initialState)

  return (
    <div>
      Count: {state.count}
      <br/>
      <button onClick={() => dispatch({type: 'decrement'})}>
        -
      </button>
      <button onClick={() => dispatch({type: 'increment'})}>
        +
      </button>
    </div>
  )
}

function ReducerBox() {
  return (
    <fieldset>
      <legend><h2>useReducer</h2></legend>
      <Counter />
    </fieldset>
  )
}

export default ReducerBox