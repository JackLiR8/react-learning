/**
 * @file Forwarding Refs
 * 
 * Ref转发是一个可选特性，其允许某些组件接受ref, 并将其向下传递给子组件
 */

import React, { useRef } from 'react'

/**
 * 第二个参数ref只在使用React.forwardRef定义组件时存在
 */
const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref} className="FancyButton">
    {props.children}
  </button>
));

function ForwardingRefs(params) {
  const ref = useRef(null);

  return (
    <fieldset>
      <legend><h2>Forwarding Refs</h2></legend>
      <FancyButton ref={ref}>Click Me</FancyButton>
    </fieldset>
  )
}

export default ForwardingRefs;