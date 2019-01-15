import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    val1: 0,
    val2: 0,
    operation: "+",
    result: 0
  }

  calculate = () => {
    const val1 = this.state.val1
    const val2 = this.state.val2
    let result = 0

    switch(this.state.operation) {
      case "+": {
        result = val1 + val2
        break
      }
      case "-": {
        result = val1 - val2
        break
      }
      case "*": {
        result = val1 * val2
        break
      }
      case "/": {
        result = val1 / val2
        break
      }
      default: {
        console.log("Invalid operation!")
        break
      }
    }

    this.setState({ result })
  }

  handleValChange = (event) => {
    // Advanced solution with a "computed property name"
    this.setState({
      [event.target.name]: (parseInt(event.target.value) || 0)
    }, this.calculate)
  }

  handleOperationChange = (event) => {
    this.setState({
      operation: event.target.value
    }, this.calculate)
  }

  render() {
    return (
      <div className="container">
        <h1>Calculate with React</h1>

        <div className="add">
          <input name="val1" type="text" onChange={ this.handleValChange } />
          <select name="operation" onChange={ this.handleOperationChange } >
            <option value="+">+</option>
            <option value="-">-</option>
            <option value="*">*</option>
            <option value="/">/</option>
          </select>
          <input name="val2" type="text" onChange={ this.handleValChange } />
          <span>=</span>
          <h3>{ this.state.result }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
