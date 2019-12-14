/**
 * @file Forms
 */

import React from 'react';
import './Form.css'

/**
 * 在 HTML 中，表单元素（如<input>、 <textarea> 和 <select>）之类的表单元素通常自己
 * 维护 state，并根据用户输入进行更新。而在 React 中，可变状态（mutable state）通常保
 * 存在组件的 state 属性中，并且只能通过使用 setState()来更新。
 * 
 * 把两者结合起来，使 React 的 state 成为“唯一数据源”。渲染表单的 React 组件还控制着用
 * 户输入过程中表单发生的操作。被 React 以这种方式控制取值的表单输入元素就叫做“受控组件”。
 */
class NameForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: ''}
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    alert(`提交的名字: ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          名字:
          <input type="text" value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

/**
 * textarea
 */
class EssayForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: '这里是文本' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    alert(`提交的文本: ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          文章:
          <textarea value={this.state.value} onChange={this.handleChange} />
        </label>
        <input type="submit" value="提交" />
      </form>
    )
  }
}

/**
 * select
 * 总的来说，这使得 <input type="text">, <textarea> 和 <select> 之类的标签都
 * 非常相似—它们都接受一个 value 属性，你可以使用它来实现受控组件。
 * 
 * 注意：
 * 你可以将数组传递到 value 属性中，以支持在 select 标签中选择多个选项：
 * <select multiple={true} value={['B', 'C']}>
 */
class FlavorForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: 'coconut' };
  }

  handleChange = (e) => {
    this.setState({ value: e.target.value });
  }

  handleSubmit = (e) => {
    alert(`你喜欢的风味: ${this.state.value}`);
    e.preventDefault();
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          选择你稀罕的风味：
          <select value={this.state.value} onChange={this.handleChange}>
            <option value="grape">葡萄</option>
            <option value="apple">苹果</option>
            <option value="banana">香蕉</option>
          </select>
        </label>
      </form>
    )
  }
}

/**
 * 处理多个输入
 * 需要处理多个 input 元素时，我们可以给每个元素添加 name 属性，并让处理函数根据 
 * event.target.name 的值选择要执行的操作。
 */
class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 6,
    };
  }

  handleInputChange = (e) => {
    const { target } = e;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    )
  }
}

function Forms() {
  return (
    <div>
      <NameForm />
      <br />
      <EssayForm />
      <br />
      <FlavorForm />
      <br />
      <Reservation />
    </div>
  )
}

export default Forms;