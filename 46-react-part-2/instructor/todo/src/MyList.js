import React, { Component } from 'react'

import ListItem from './ListItem'

class MyList extends Component {

  state = {
    list: ["Buy ice cream", "Eat ice cream", "Go to the gym"]
  }

  clearList = () => {
    this.setState({ list: [] })
  }

  render() {
    const allListItems = this.state.list.map( (item, index) =>
      <ListItem key={ index } item={ item } />
    )

    return (
      <div>
        <h1>Things I should stop procrastinating on:</h1>
        <ul>
          { allListItems }
        </ul>

        <button onClick={ this.clearList } >Finished everything!</button>
      </div>
    )
  }
}

export default MyList
