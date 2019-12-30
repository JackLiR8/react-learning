/**
 * @file 高阶组件
 * 
 * 高阶组件是参数为组件，返回值为新组件的函数
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
