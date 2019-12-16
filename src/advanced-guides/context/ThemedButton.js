import React from 'react'
import { ThemeContext } from './ThemeContext'

class ThemedButton extends React.Component {
  static contextType = ThemeContext;

  render() {
    let { props, context: theme } = this;
    return (
      <button
        {...props}
        style={theme}>
      </button>
    )
  }
}

export default ThemedButton;