import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import MoodTracker from './MoodTracker'

class App extends Component {
  render() {
    return (
      <div className="App">
        <MoodTracker />
      </div>
    );
  }
}

export default App;
