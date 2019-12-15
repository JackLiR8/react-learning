/**
 * @file 状态提升
 */

 import React from 'react'

function BoilingVerdict(props) {
  if (props.celsius >= 100) {
    return <p>The Water would boil</p>;
  }
  return <p>The water would not boil</p>;
}

const scaleNames = {
  c: 'Celsius',
  f: 'Fahrenheit'
}
class TemperatureInput extends React.Component {
  constructor(props) {
    super(props);
    this.state = { temperature: '' };
  }

  handleChange = (e) => {
    this.setState({ temperature: e.target.value });
  }

  render() {
    const { temperature, scale } = this.props;
    return (
      <fieldset>
        <legend>Enter temperature in {scaleNames[scale]}:</legend>
        <input
          value={this.state.temperature}
          onChange={this.handleChange} />
      </fieldset>
    )
  }
}

class Calculator extends React.Component {
  render() {
    return (
      <div>
        <TemperatureInput scale="c" />
        <TemperatureInput scale="f" />
      </div>
    )
  }
}

function LiftingState() {
  return (
    <div>
      <Calculator />
    </div>
  )
}

export default LiftingState;