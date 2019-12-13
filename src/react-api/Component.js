/**
 * @file 组件 & props
 * 
 * Props:
 * 所有 React 组件都必须像纯函数一样保护它们的 props 不被更改。
 */
import React from 'react'

/**
 * @function 函数组件
 * @param {Object} props
 */
function Welcome(props) {
  return <h1>Hello, {props.name}</h1>
}

// /**
//  * @class 类组件
//  */
// class WelcomeC extends React.component{
//   render() {
//     return <h1>Hello, {this.props.name}</h1>
//   } 
// }

function Greet() {
  return (
    <div>
      <Welcome name="Jack"/>
      <Welcome name="Kobe"/>
      <Welcome name="Curry"/>
    </div>
  )
}

export default Greet;
