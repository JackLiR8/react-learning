/**
 * @file State Hook
 * 
 * Hook 在 class 内部是不起作用的。但你可以使用它们来取代 class 。
 * 
 * 你不必使用多个 state 变量。State 变量可以很好地存储对象和数组，因此，你仍然可以将相关数据分为一组。
 * 然而，不像 class 中的 this.setState，更新 state 变量总是替换它而不是合并它
 */

import React, { useState } from 'react'

function Example() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click</button>
    </div>
  )
}

function StateHook() {
  return (
    <fieldset>
      <legend><h2>State Hook</h2></legend>
      <Example />
    </fieldset>
  )
}

export default StateHook;