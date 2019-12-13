/**
 * @file 事件处理
 * 1. React 事件的命名采用小驼峰式（camelCase），而不是纯小写
 * 2. 使用 JSX 语法时你需要传入一个函数作为事件处理函数，而不是一个字符串
 */
import React from 'react'

/**
 * 在 React 中不能通过返回 false 的方式阻止默认行为。
 * 你必须显式的使用 preventDefault 。
 */
function ActionLink() {
  function handleClick(e) {
    e.preventDefault();
    console.log('The link was clicked')
  }

  return (
    <a href="#" onClick={handleClick}>
      Click me
    </a>
  )
}

/**
 * 必须谨慎对待 JSX 回调函数中的 this，在 JavaScript 中，class 的方法默认不会绑定 this。
 * 如果你忘记绑定 this.handleClick 并把它传入了 onClick，当你调用这个函数的时候 this 的值为 undefined
 * 
 * 通常情况下，如果你没有在方法后面添加 ()，例如 onClick={this.handleClick}，你应该为这个方法绑定 this。
 */
class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // 为了在回调中使用 `this`，这个绑定是必不可少的
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }))
  }

  /* 
  如果觉得使用bind麻烦，有两种解决方案：
  1. 此语法确保 `handleClick` 内的 `this` 已被绑定。 注意: 这是 *实验性* 语法。
      handleClick = () => {
        this.setState(state => ({
          isToggleOn: !state.isToggleOn,
        }))
      } 

  2. 在回调中使用箭头函数：
      此语法问题在于每次渲染 LoggingButton 时都会创建不同的回调函数。在大多数情况下，这没什么问题，
      但如果该回调函数作为 prop 传入子组件时，这些组件可能会进行额外的重新渲染。我们通常建议在构造器
      中绑定或使用 class fields 语法来避免这类性能问题。

      render() {
        // 此语法确保 `handleClick` 内的 `this` 已被绑定。
        return (
          <button onClick={(e) => this.handleClick(e)}>
            {this.state.isToggleOn ? 'ON' : 'OFF'}
          </button>
        )
      }
  */

  render() {
    return (
      <button onClick={this.handleClick}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    )
  }
}

/**
 * 向事件处理程序传递参数
 * 1. onClick={(e) => this.handleClick(v, e)}
 * 2. onClick={this.handleClick.bind(this, v)}
 * 
 * 在这两种情况下，React 的事件对象 e 会被作为第二个参数传递。如果通过箭头函数的方式，
 * 事件对象必须显式的进行传递，而通过 bind 的方式，事件对象以及更多的参数将会被隐式的进行传递。
 */
class ClickRow extends React.Component {
  constructor(props) {
    super(props);
    this.state = {current: 1}
  }

  handleClick = (i) => {
    this.setState({
      current: i
    })
  }

  render() {
    const btns = [1, 2, 3].map((v, i) => {
      return (
        <button key={i} onClick={(e) => this.handleClick(v, e)}>
          -{v}-
        </button>
      )
      /* return (
        <button onClick={this.handleClick.bind(this, v)}>
          -{v}-
        </button>
      ) */
    })
    return (
      <div>
        <h3>You just clicked Btn{this.state.current}</h3>
        {btns}
      </div>
    )
  }
}

function Event() {
  return (
    <div>
      <h2>Event</h2>
      <ActionLink />&nbsp;&nbsp;
      <Toggle />
      <ClickRow />
    </div>
  )
}

export default Event;