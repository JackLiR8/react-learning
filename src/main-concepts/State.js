/**
 * @file 核心概念-State & 生命周期
 * 
 * State注意事项：
 * 1. 不要直接修改State， 用setState修改， 构造函数是唯一可以给 this.state 赋值的地方
 * 2. State的更新可能是异步的
 * 3. State的更新会被合并
 */

import React from 'react';

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    }
  }

  componentDidMount() {
    this.timerID = setInterval(
      () => this.tick(),
      1000
    );
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: new Date(),
    })
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
      </div>
    )
  }
}

export default Clock;