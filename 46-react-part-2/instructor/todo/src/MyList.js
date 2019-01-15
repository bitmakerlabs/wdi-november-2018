import React, { Component } from 'react'

import ListItem from './ListItem'

class MyList extends Component {

  state = {
    list: ["Buy ice cream", "Eat ice cream", "Go to the gym"],
    newItem: ''
  }

  clearList = () => {
    this.setState({ list: [] })
  }

  addItem = (event) => {
    event.preventDefault()

    const newList = [...this.state.list]
    newList.push(this.state.newItem)

    this.setState({
      list: newList,
      newItem: ''
    })
  }

  handleChange = (event) => {
    this.setState({ newItem: event.target.value })
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

        <form>
          <input
            type="text"
            placeholder="Type an item here"
            onChange={ this.handleChange }
          />
          <button onClick={ this.addItem }>Add it!</button>
        </form>

        <button onClick={ this.clearList } >Finished everything!</button>
      </div>
    )
  }
}

export default MyList
