/**
 * @file Effect Hook
 * 
 * 数据获取，设置订阅以及手动更改 React 组件中的 DOM 都属于副作用。
 * 
 * 在 React 组件中有两种常见副作用操作：需要清除的和不需要清除的。
 * 
 * 性能优化：
 * 给useEffect添加第二个参数, 会通知React只有在特定值发生变化时才执行Effect
 *    useEffect(() => { ... }, [count])
 * 
 * 注意： 
 * 如果你要使用此优化方式，请确保数组中包含了所有 *外部作用域中会随时间变化* 并且 *在 effect 中使用* 的变量，
 * 否则你的代码会引用到先前渲染中的旧变量。
 * 
 * 如果想执行只运行一次的 effect（仅在组件挂载和卸载时执行），可以传递一个空数组（[]）作为第二个参数。
 * 如果你传入了一个空数组（[]），effect 内部的 props 和 state 就会一直拥有其初始值。
 * 
 * React 会等待浏览器完成画面渲染之后才会延迟调用 useEffect，因此会使得额外操作很方便
 */

import React, { useState, useEffect } from 'react'

function Example() {
  const [count, setCount] = useState(0);
  const [num, setNum] = useState(0);

  useEffect(() => {
    document.title = `You clicked ${count} times`;
    console.log('count just changed')

    /* effect 返回一个函数， React将会在执行清除操作时调用它 */
    return () => {
      document.title = `React App`
    }
  }, [count]);

  /* 上一个Effect Hook 只有在count发生变化时才执行Effect, 这个Effect Hook会在
  任何数据发生变化重新渲染页面时调用 */
  useEffect(() => { console.log('another effect hook') })

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>click-count</button>
      <button onClick={() => setNum(num + 1)}>click-num-{num}</button>
    </div>
  )
}

function EffectHook() {
  const [show, switchShow] = useState(true);
  return (
    <fieldset>
      <legend><h2>Effect Hook</h2></legend>
      {show && <Example />}
      <br/>
      <button onClick={() => switchShow(!show)}>
        {show ? 'hidden' : 'show'}
      </button>
    </fieldset>
  )
}

export default EffectHook;