/**
 * @file useReducer
 * 
 * 应用场景
 * 1. state逻辑复杂且包含多个值
 * 2. state依赖之前的state
 * 3. 给触发深更新的组件做性能优化
 * 
 * 指定初始state
 * 1. 将初始值作为第二个参数
 * 2. 惰性初始化
 *    将init函数作为useReducer的第三个参数
 */

import React, { useReducer } from 'react'

function init(initialCount) {
  return {count: initialCount}
}

function reducer(state, action) {
  switch (action.type) {
    case 'increment':
      return {count: state.count + 1}
    case 'decrement':
      return {count: state.count - 1}
    case 'reset':
      return init(action.payload)
    default:
      throw new Error()
  }
}

function Counter({initialCount}) {
  const [state, dispatch] = useReducer(reducer, initialCount, init)

  return (
    <div>
      Count: {state.count}
      <br/>
      <button onClick={() => dispatch({type: 'reset', payload: initialCount})}>
        reset
      </button>
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
      <Counter initialCount={4} />
    </fieldset>
  )
}

export default ReducerBox