/**
 * @file 组合 VS 继承
 * 
 * Props 和组合为你提供了清晰而安全地定制组件外观和行为的灵活方式。
 * 注意：组件可以接受任意 props，包括基本数据类型，React 元素以及函数。
 * 
 * 如果你想要在组件间复用非 UI 的功能，我们建议将其提取为一个单独的 JavaScript 模块，
 * 如函数、对象或者类。组件可以直接引入（import）而无需通过 extend 继承它们。
 */
import React from 'react'
import './Composition.css'

function Contacts() {
  return <div className="Contacts">Contacts</div>;
}

function Chat() {
  return <div className="Chat">Chat</div>
}

/**
 * 将所需内容传入 props，并使用相应的 prop. 这种方法可能使你想起别的库中“槽”（slot）的概念，
 * 但在 React 中没有“槽”这一概念的限制, 你可以将任何东西作为 props 进行传递。
 * 
 * props.children类似于默认插槽
 */
function SplitPane(props) {
  return (
    <div className="SplitPane">
      <div className="SplitPane-left">
        {props.left}
      </div>
      <div className="SplitPane-right">
        {props.right}
      </div>
    </div>
  )
}

function FancyBorder(props) {
  return (
    <div className={'FancyBorder FancyBorder-' + props.color}>
      {props.children}
    </div>
  );
}

function Dialog(props) {
  return (
    <FancyBorder color="blue">
      <h3 className="Dialog-title">
        {props.title}
      </h3>
      <p className="Dialog-message">
        {props.message}
      </p>
    </FancyBorder>
  )
}

/**
 * 在 React 中，我们也可以通过组合来实现特殊组件。“特殊”组件可以通过 props 定制并渲染“一般”组件：
 */
function WelcomeDialog() {
  return (
    <Dialog
      title="Welcome"
      message="Thank you for visiting" />
  )
}

function Composition() {
  return(
    <div>
      <h2>Composition</h2>

      <SplitPane
        left={ <Contacts /> }
        right={ <Chat /> } />

      <WelcomeDialog />
      
    </div>
  )
}

export default Composition;