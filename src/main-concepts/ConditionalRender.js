/**
 * @file 条件渲染
 */
import React from 'react'
import './ConditionalRender.css'

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

function LoginButton(props) {
  return (
    <button onClick={props.onClick}>
      Login
    </button>
  )
}

function LogoutButton(props) {
  return (
    <button onClick={props.onClick}>
      Logout
    </button>
  )
}

/**
 * 元素变量
 * 你可以使用变量来储存元素。它可以帮助你有条件地渲染组件的一部分，而其他的渲染部分
 * 并不会因此而改变。(如：button)
 */
class LoginControl extends React.Component {
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
    const { isLoggedIn } = this.state;
    let button;

    if (isLoggedIn) {
      button = <LogoutButton onClick={this.handleClick} />
    } else {
      button = <LoginButton onClick={this.handleClick} />
    }

    return (
      <div>
        <Greeting isLoggedIn={isLoggedIn}/>
        {button}
      </div>
    )
  }
}

/**
 * 条件渲染中&&运算符的应用
 */
function Mailbox(props) {
  const { unreadMessages } = props;
  return (
    <div>
      <h3>Hello</h3>
      {unreadMessages.length > 0 &&
        <p>
          You have <strong>{unreadMessages.length}</strong> unread messages.
        </p>
      }
    </div>
  )
}

/**
 * 阻止组件渲染(render方法返回null)
 */
function WarningBanner(props) {
  if (!props.warn) {
    return null;
  }

  return (
    <div className="warning">
      Warning
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { showWarning: true };
  }

  handleToggleClick = () => {
    this.setState(state => ({
      showWarning: !state.showWarning,
    }));
  }

  render() {
    return (
      <div>
        <WarningBanner warn={this.state.showWarning} />
        <button onClick={this.handleToggleClick}>
          {this.state.showWarning ? 'Hide' : 'Show'}
        </button>
      </div>
    )
  }
}

function ConRender() {
  const messages = ['ha', 'foo', 'bar'];
  return (
    <div>
      <h2>Conditional Rendering</h2>
      <LoginControl />
      <Mailbox unreadMessages={messages} />
      <Page />
    </div>
  )
}

export default ConRender;