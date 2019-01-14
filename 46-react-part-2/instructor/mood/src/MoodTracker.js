import React, { Component } from 'react'

class MoodTracker extends Component {

  // react <v16 syntax
  // constructor() {
  //   super()
  //
  //   this.state = {
  //     moodPoints: 2
  //   }
  // }

  // react v16 syntax
  state = {
    moodPoints: 8
  }

  render() {
    return (
      <div>
        <p>On a scale of 1-10</p>
        <p>You are this happy: { this.state.moodPoints }</p>
      </div>
    )
  }
}

export default MoodTracker
