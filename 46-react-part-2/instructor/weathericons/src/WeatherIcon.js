import React, { Component } from 'react'

class WeatherIcon extends Component {
  render() {
    return(
      <div className="weather">
        <img src={ this.props.data.img } alt="" />
        <p><span>conditions:</span> { this.props.data.conditions }</p>
        <p><span>time:</span> { this.props.data.time }</p>
      </div>
    )
  }
}

export default WeatherIcon
