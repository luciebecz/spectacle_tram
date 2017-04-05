import React from 'react';

class Counter extends React.Component {
  state = { value: 0 }

  inc = () => {
    this.setState({ value: this.state.value + 1 })
  }

  dec = () => {
    this.setState({ value: this.state.value - 1 })
  }

  render() {
    return(
      <div>
        <h1 style={{ color: "white" }}>Counter</h1>
        <button onClick={this.inc}>+</button>
        <button onClick={this.dec}>-</button>
        <h1 style={{ color: "white", textAlign: "center"}}>{this.state.value}</h1>
      </div>
    )
  }
}

export default Counter;