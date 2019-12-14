/**
 * @file List and Key
 * 
 * Key: 
 * 1. 一个元素的 key 最好是这个元素在列表中拥有的一个独一无二的字符串
 * 2. 如果列表项目的顺序可能会变化，我们不建议使用索引来用作 key 值，因为这样
 *    做会导致性能变差，还可能引起组件状态的问题
 * 3. key 只需在兄弟节点之间必须唯一
 * 
 * 注意：
 *    如果一个 map() 嵌套了太多层级，那可能就是你提取组件的一个好时机。
 */

import React from 'react'

function NumberList(props) {
  const { numbers } = props;
  const listItems = numbers.map(num => {
    return (
      <li key={num.toString()}>{num}</li>
    )
  })
  return (
    <ul>{listItems}</ul>
  )
}

/**
 * 在JSX中嵌入map()
 */
function NumList(props) {
  const { numbers } = props;
  return (
    <ul>
      {numbers.map(num => <li key={num.toString()}>{num}</li>)}
    </ul>
  )
}


function List() {
  const numbers = [2, 3, 5];
  return (
    <div>
      <NumberList numbers={numbers} />
      <NumList numbers={numbers} />
    </div>
  )
}

export default List;
