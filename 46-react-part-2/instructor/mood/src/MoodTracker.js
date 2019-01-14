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
    moodPoints: 1
  }

  increaseMood = () => {
    const newMoodPoints = this.state.moodPoints + 1

    // NOT: this.state.moodPoints = newMoodPoints
    // MUST use the setState method
    this.setState({
      moodPoints: newMoodPoints
    })
  }

  render() {
    return (
      <div>
        <p>On a scale of 1-10</p>
        <p>You are this happy: { this.state.moodPoints }</p>

        <button onClick={ this.increaseMood }>Cheer up!</button>
      </div>
    )
  }
}

export default MoodTracker
