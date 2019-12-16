/**
 * @file Context
 */

import React from 'react'

const ThemeContext = React.createContext('light');

class Box extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value="dark" >
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

function Toolbar() {
  return (
    <div>
      <ThemedButton />
    </div>
  )
}

class ThemedButton extends React.Component {
  // 指定 contextType 读取当前的 theme context。
  // React 会往上找到最近的 theme Provider，然后使用它的值。
  // 在这个例子中，当前的 theme 值为 “dark”。
  static contextType = ThemeContext;
  render() {
  return <button theme={this.context} >{this.context}</button>
  }
}

function Context() {
  return (
    <div>
      <h2>Context</h2>
      <Box />
    </div>
  )
}

export default Context;