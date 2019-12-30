/**
 * @file 高阶组件
 * 
 * 高阶组件是参数为组件，返回值为新组件的函数
 * 
 * 注意：
 * 1. 不要在HOC中修改原始组件，使用组合
 * 2. 不要在render方法中使用HOC
 * 3. 务必复制静态方法
 * 4. Refs不会被传递
 */

import React, { useState, useEffect } from 'react'

function hocDemo(WrappedComponent) {
  return function (props) {
    let [data, setData] = useState(1);

    useEffect(() => {
      console.log('HOC, useEffect' + props.name);

      return () => {
        console.log('HOC clear Effect' + props.name)
      }
    })

    return (
      <WrappedComponent data={data} {...props} />
    )
  }
}

function OList(props) {
  const { list, data } = props;

  return (
    <>
      <h3>{data}</h3>
      <ol>
        { list.map(item => <li key={item.id}>{item.name}</li>) }
      </ol>
    </>    
  )
}

function UList(props) {
  const { list } = props;
  return (
    <ul>
      { list.map(item => <li key={item.id}>{item.name}</li>) }
    </ul>
  )
}

const LocOl = hocDemo(OList);
const LocUl = hocDemo(UList);

const list = [{name: 1, id: '1'}, {name: 2, id: '2'}, {name: 3, id: '3'}];
export default function () {
  return (
    <fieldset>
      <legend><h2>高阶组件</h2></legend>
      <LocOl list={list} name="loc-ol" />
      <LocUl list={list} name="loc-ul"/>
    </fieldset>
  )
}
