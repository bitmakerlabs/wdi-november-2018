import React, { Component } from 'react'

class Calculator extends Component {
  state = {
    val1: 0,
    val2: 0,
    result: 0
  }

  handleChange = (event) => {
    // // Easy Solution
    // const val1 = document.getElementById("val1").value
    // const val2 = document.getElementById("val2").value
    // const result = (parseInt(val1) || 0) + (parseInt(val2) || 0)
    // this.setState({ result: result })

    // Advanced solution with a "computed property name"
    this.setState({
      [event.target.name]: (parseInt(event.target.value) || 0)
    }, () => {
      this.setState({
        result: this.state.val1 + this.state.val2
      })
    })
  }

  render() {
    return (
      <div className="container">
        <h1>Add with React</h1>

        <div className="add">
          <input name="val1" type="text" onChange={ this.handleChange } />
          <span>+</span>
          <input name="val2" type="text" onChange={ this.handleChange } />
          <span>=</span>
          <h3>{ this.state.result }</h3>
        </div>
      </div>
    )
  }
}

export default Calculator
