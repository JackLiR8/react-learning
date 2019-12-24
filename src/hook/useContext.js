import React, { useState, useContext } from 'react'

const themes = {
  light: {
    background: 'white',
    color: 'blue'
  },
  dark: {
    background: 'black',
    color: 'white'
  }
}

const ThemeContext = React.createContext(themes.light)

function Board() {
  const [theme, setTheme] = useState(themes.dark)
  const switchTheme = () => {
    setTheme(theme => {
      return theme === themes.dark ? themes.light : themes.dark
    })
  }

  return (
    <fieldset>
      <legend><h2>useContext</h2></legend>
      <ThemeContext.Provider value={theme}>
        <Toolbar switchTheme={switchTheme} />
      </ThemeContext.Provider>
    </fieldset>
  )
}

function Toolbar(props) {
  const { switchTheme } = props;
  return (
    <div>
      <TButton onClick={switchTheme}>
        switchTheme
      </TButton>
    </div>
  )
}

/**
 * 注意<button {...props}></button> 中的{...props}非常重要
 * 把写在组件上的props绑定到组件内部的button上，包括onClick={...}
 */
function TButton(props) {
  const theme = useContext(ThemeContext)
  return (
    <button 
      {...props}
      style={{
        background: theme.background, 
        color: theme.color,
        width: '50px',
        height: '30px'
      }}>
    </button>
  )
}

export default Board