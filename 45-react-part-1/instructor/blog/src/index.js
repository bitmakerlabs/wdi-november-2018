import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const post = {
  title: "Dinosaurs are great!!!!!!!",
  author: "Dave",
  body: "Blah blah3",
  comments: ["First!", "Second!", "Hire this author now!"]
}

ReactDOM.render(
  <App post={ post } />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
