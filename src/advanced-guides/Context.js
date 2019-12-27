/**
 * @file Context
 * 
 * Context 主要应用场景在于很多不同层级的组件需要访问同样一些的数据。
 * 请谨慎使用，因为这会使得组件的复用性变差。
 * 
 * 如果你只是想避免层层传递一些属性，组件组合（component composition）有时候是一个比 context 更好的解决
 * 方案。但是，这并不适用于每一个场景：这种将逻辑提升到组件树的更高层次来处理，会使得这些高层组件变得更复杂，
 * 并且会强行将低层组件适应这样的形式，这可能不会是你想要的。
 * 
 * 有的时候在组件树中很多不同层级的组件需要访问同样的一批数据。Context 能让你将这些数据向组件树下所有的
 * 组件进行“广播”，所有的组件都能访问到这些数据，也能访问到后续的数据更新。使用 context 的通用的场景包
 * 括管理当前的 locale，theme，或者一些缓存数据，这比替代方案要简单的多。
 * 
 * 如果两个或者更多的 context 值经常被 *一起* 使用，那你可能要考虑一下另外创建你自己的渲染组件，以提供这些值
 * 
 * API
 * 1. React.createContext
 *      const MyContext = React.createContext(defaultValue);
 * 
 * 2. Context.Provider
 *      <MyContext.Provider value={ 某个值 }>
 * 
 *      每个 Context 对象都会返回一个 Provider React 组件，它允许消费组件订阅 context 的变化。
 * 
 *      Provider 接收一个 value 属性，传递给消费组件。一个 Provider 可以和多个消费组件有对应关系。
 *      多个 Provider 也可以嵌套使用，里层的会覆盖外层的数据。
 * 
 * 3. Class.contextType
 *      挂载在 class 上的 contextType 属性会被重赋值为一个由 React.createContext() 创建的 
 *      Context 对象。这能让你使用 this.context 来消费最近 Context 上的那个值。你可以在任何
 *      生命周期中访问到它，包括 render 函数中。
 * 
 * 4. Context.consumer
 *      <MyContext.Consumer>
 *        {value =>  基于 context 值进行渲染}
 *      </MyContext.Consumer>
 * 
 *      传递给函数的 value 值等同于往上组件树离这个 context 最近的 Provider 提供的 value 值。
 *      如果没有对应的 Provider，value 参数等同于传递给 createContext() 的 defaultValue。
 */

import React from 'react'
import { ThemeContext, themes } from './context/ThemeContext'
import ThemedButton from './context/ThemedButton'

function Toolbar(props) {
  return (
    <div>
      <ThemedButton onClick={props.changeTheme} >
        change theme
      </ThemedButton>
    </div>
  )
}

class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      theme: themes.light,
    };
  }

  toggleTheme = () => {
    this.setState(state => ({
      theme: state.theme === themes.dark ? themes.light : themes.dark,
    }));
  }

  render() {
    // 在 ThemeProvider 内部的 ThemedButton 按钮组件使用 state 中的 theme 值，
    // 而外部的组件使用默认的 theme 值
    return (
      <div>
        <ThemeContext.Provider value={this.state.theme} >
          <Toolbar changeTheme={this.toggleTheme} />
        </ThemeContext.Provider>

        <section>
          <ThemedButton />
        </section>
      </div>
    )
  }
}


function Context() {
  return (
    <fieldset>
      <legend><h2>Context</h2></legend>
      <Page />
    </fieldset>
  )
}

export default Context;

/* 
  因为 context 会使用参考标识（reference identity）来决定何时进行渲染，这里可能会有一些陷阱，
  当 provider 的父组件进行重渲染时，可能会在 consumers 组件中触发意外的渲染。

  当每一次 Provider 重渲染时，以下的代码会重渲染所有下面的 consumers 组件，因为 value 属性
  总是被赋值为新的对象：

    <Provider value={{something: 'something'}}>
      <Toolbar />
    </Provider>

  为了防止这种情况，将 value 状态提升到父节点的 state 里:
    <Provider value={this.state.value}>
      <Toolbar />
    </Provider>
*/