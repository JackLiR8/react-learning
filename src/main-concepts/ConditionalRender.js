/**
 * @file 条件渲染
 */
import React from 'react'

function UserGreeting() {
  return <h3>Welcome back!</h3>
}

function GuestGreeting() {
  return <h3>Please sign up</h3>
}

function Greeting(props) {
  const { isLoggedIn } = props;
  if (isLoggedIn) {
    return <UserGreeting />;
  }
  return <GuestGreeting />;
}

class ConRender extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: false
    }
  }

  handleClick = (e) => {
    this.setState(state => ({
      isLoggedIn: !state.isLoggedIn,
    }))
  }

  render() {
    return (
      <div>
        <h2>Conditional Rendering</h2>
        <Greeting isLoggedIn={this.state.isLoggedIn}/>
        <button onClick={this.handleClick}>
          {this.state.isLoggedIn ? 'Log Out' : 'Log In'}
        </button>
      </div>
    )
  }
}

export default ConRender;