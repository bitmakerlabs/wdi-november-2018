// import React, { Component } from 'react'
//
// class ListItem extends Component {
//   render() {
//     return (
//       <li>{ this.props.item }</li>
//     )
//   }
// }
//
// export default ListItem

import React from 'react'

// Functional Component
const ListItem = props =>
  <li>{ props.item }</li>

export default ListItem
