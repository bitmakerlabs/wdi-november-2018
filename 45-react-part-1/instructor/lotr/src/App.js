import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Movie from './Movie'

class App extends Component {
  render() {

    let allMovies = this.props.movies.map( (movie, index) =>
      <Movie
        key={ index }
        title={ movie.title }
        hours={ movie.hours }
        minutes={ movie.minutes }
      />
    )

    return (
      <div className="App">
        { allMovies }
      </div>
    );
  }
}

export default App;
