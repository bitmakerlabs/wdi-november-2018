import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import WeatherIcons from './WeatherIcons'

let weatherData =[
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/day.svg",
    conditions: "clear",
    time: "day"
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/night.svg",
    conditions: "partly clear",
    time: "night"
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/stormy.svg",
    conditions: "stormy",
    time: "day"
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-day_t7ckxp.svg",
    conditions: "partly clear",
    time: "night"
  },
  {
    img: "http://res.cloudinary.com/jkeohan/image/upload/v1535732381/cloudy-night.svg",
    conditions: "partly cloudy",
    time: "day"
  }
]

ReactDOM.render(
  <WeatherIcons data={ weatherData } />,
  document.getElementById('root')
)
