import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comment from './Comment'

class App extends Component {

  state = {
    body: 'Body from state'
  }

  updateBody = (body) => {
    this.setState({ body })
  }

  changeBodyFromButton = () => {
    let newBody = prompt('What should the new body be?')
    this.updateBody(newBody)
  }

  changeBodyFromInput = (event) => {
    let newBody = event.target.value
    this.updateBody(newBody)
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let newBody = event.target.elements["body_input"].value
    this.updateBody(newBody)
  }

  render() {

    const allComments = this.props.post.comments.map( (comment, index) =>
      <Comment body={ comment } key={ index } />
    )

    return (
      <div className="post">
        <h1>{ this.props.post.title }</h1>
        <h2>by: { this.props.post.author }</h2>
        <p>{ this.state.body }</p>

        <button onClick={ this.changeBodyFromButton }>Edit Body</button>

        <form onSubmit={ this.handleSubmit }>
          <input name="body_input" type="text" onChange={ this.changeBodyFromInput } />
          <input type="submit" value="Submit" />
        </form>

        <h3>Comments</h3>
        { allComments }
      </div>
    );
  }
}

export default App;
