import React, { Component } from 'react'

class Movie extends Component {
  render() {
    return (
      <div>
        <h1>Lord of the Rings: { this.props.title }</h1>
        <p>{ this.props.hours }h { this.props.minutes }m</p>
      </div>
    )
  }
}

export default Movie
