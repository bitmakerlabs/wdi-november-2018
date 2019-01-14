import React, { Component } from 'react'

import WeatherIcon from './WeatherIcon'

class WeatherIcons extends Component {
  render() {

    const allWeatherIcons = this.props.data.map( (data, index) =>
      <WeatherIcon key={ index } data={ data } />
    )

    return(
      <section>
        { allWeatherIcons }
      </section>
    )
  }
}

export default WeatherIcons
