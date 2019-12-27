/**
 * @file Error Boundaries
 * 错误边界是一种react组件，它可以捕获并打印发生在其自组件树任何位置的js错误，
 * 而且它会渲染备用UI
 * 
 * 如果一个class组件中定义了static getDerivedStateFromError() 或者 componentDidCatch() 这两个生命周期方法中的任何一个或两个，那它就是一个错误边界
 * 
 * 注意，错误边界无法捕获以下场景中的错误
 * 1. 事件处理
 * 2. 异步代码
 * 3. 服务端渲染
 * 4. 自身抛出的错误
 */

import React from "react";

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props)
    this.state = { hasError: true }
  }

  static getDerivedStateFromError(error) {
    // 更新state, 下次渲染时降级显示
    return { hasError: true }
  }

  componentDidCatch(error, errorInfo) {
    // ...
  }

  render() {
    if (this.state.error) {
      return <h1>Something went wrong</h1>
    }

    return this.props.children
  }
}