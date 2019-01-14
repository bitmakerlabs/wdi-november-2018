import React, { Component } from 'react'

import ListItem from './ListItem'

class MyList extends Component {
  render() {
    const allListItems = this.props.theList.map( (item, index) =>
      <ListItem key={ index } item={ item } />
    )

    return (
      <div>
        <h1>Things I should stop procrastinating on:</h1>
        <ul>
          { allListItems }
        </ul>
      </div>
    )
  }
}

export default MyList
