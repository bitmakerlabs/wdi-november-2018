import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    result: 0
  }

  handleChange = (event) => {
    // Easy Solution
    const val1 = document.getElementById("val1").value
    const val2 = document.getElementById("val2").value
    const result = (parseInt(val1) || 0) + (parseInt(val2) || 0)
    this.setState({ result: result })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React</h1>

        <div className="add">
          <input id="val1" type="text" onChange={ this.handleChange } />
          <span>+</span>
          <input id="val2" type="text" onChange={ this.handleChange } />
          <span>=</span>
          <h3>{ this.state.result }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
