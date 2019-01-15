import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    result: 0
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React</h1>

        <div className="add">
          <input type="text" />
          <span>+</span>
          <input type="text" />
          <span>=</span>
          <h3>{ this.state.result }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
