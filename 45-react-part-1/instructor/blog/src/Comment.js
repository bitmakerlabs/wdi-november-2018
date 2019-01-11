import React, { Component } from 'react'

class Comment extends Component {
  render() {
    return (
      <p>{ this.props.body }</p>
    )
  }
}

export default Comment
