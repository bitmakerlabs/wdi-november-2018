import React, { Component } from 'react'

class ListItem extends Component {
  render() {
    return (
      <li>{ this.props.item }</li>
    )
  }
}

export default ListItem
