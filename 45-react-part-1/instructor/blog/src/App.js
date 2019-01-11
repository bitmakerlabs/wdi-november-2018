import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="post">
        <h1>{ this.props.post.title }</h1>
        <h2>by: { this.props.post.author }</h2>
        <p>{ this.props.post.body }</p>

        <h3>Comments</h3>
        <p>{ this.props.post.comments[0] }</p>
        <p>{ this.props.post.comments[1] }</p>
        <p>{ this.props.post.comments[2] }</p>
      </div>
    );
  }
}

export default App;
