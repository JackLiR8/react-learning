/**
 * @file hook useRef
 */

import React, { useRef } from "react";

function InputWithFocusButton() {
  const inputEl = useRef(null)
  const onButtonClick = () => {
    inputEl.current.focus()
  }

  return (
    <>
      <input ref={inputEl} type="text" />
      <button onClick={onButtonClick}>Focus the input</button>
    </>
  )
}

function RefHook() {
  return (
    <fieldset>
      <legend><h2>useRef</h2></legend>
      <InputWithFocusButton />
    </fieldset>
  )
}

export default RefHook;