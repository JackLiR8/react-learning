/**
 * @file hooks: useCallback
 */

import React, { useState, useCallback } from 'react'
/* 
  callback ref 测量DOM节点
*/

function MeasureExample() {
  const [rect, ref] = useClientRect();
  return (
    <>
      <h1 ref={ref}>Hollo, world</h1>
      {rect !== null && 
        <h2>The above header is {Math.round(rect.height)}px tall</h2>
      }
    </>
  )
}

function useClientRect() {
  const [rect, setRect] = useState(null);
  const ref = useCallback(node => {
    if (node !== null) {
      setRect(node.getBoundingClientRect());
    }
  }, []);
  return [rect, ref];
}

function CallbackHook() {
  return (
    <fieldset>
      <legend><h2>useCallback</h2></legend>
      <MeasureExample />
    </fieldset>
  )
}

export default CallbackHook;