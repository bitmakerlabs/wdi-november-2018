import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const movies = [
  {
    title: "Fellowship of the Ring",
    hours: 2,
    minutes: 58
  },
  {
    title: "The Two Towers",
    hours: 2,
    minutes: 59
  },
  {
    title: "The Return of the King",
    hours: 3,
    minutes: 21
  }
]

ReactDOM.render(
  <App movies={ movies } />, 
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
