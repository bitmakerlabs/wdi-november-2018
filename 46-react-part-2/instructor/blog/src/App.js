import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comment from './Comment'

class App extends Component {

  state = {
    body: 'Body from state'
  }

  changeBody = () => {
    let newBody = prompt('What should the new body be?')

    this.setState({
      body: newBody  
    })
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

        <button onClick={ this.changeBody }>Edit Body</button>

        <h3>Comments</h3>
        { allComments }
      </div>
    );
  }
}

export default App;
