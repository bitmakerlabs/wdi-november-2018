import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Comment from './Comment'

class App extends Component {
  render() {

    // const allComments= [
    //   <Comment body={ this.props.post.comments[0] }/>,
    //   <Comment body={ this.props.post.comments[1] }/>,
    //   <Comment body={ this.props.post.comments[2] }/>
    // ]

    const allComments = this.props.post.comments.map( (comment, index) =>
      <Comment body={ comment } key={ index } />
    )

    return (
      <div className="post">
        <h1>{ this.props.post.title }</h1>
        <h2>by: { this.props.post.author }</h2>
        <p>{ this.props.post.body }</p>

        <h3>Comments</h3>
        { allComments }
      </div>
    );
  }
}

export default App;
