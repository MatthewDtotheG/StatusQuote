import React, { Component } from 'react'
import PropTypes from 'prop-types'
import SpeechRecognition from 'react-speech-recognition'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  browserSupportsSpeechRecognition: PropTypes.bool
}

class Dictaphone extends Component {
  
  state = {
    record: false
  }

  toggleClick = () => {
    this.setState((prevState) => {
      return {
        record: !prevState.record
      }
    })
  }

  render() {
    const { transcript, startListening, stopListening, browserSupportsSpeechRecognition } = this.props
    console.log(transcript);
    if (!browserSupportsSpeechRecognition) {
      return null
    }

    return (
      <div>
        <button onClick={startListening}>Record</button>
        <button onClick={stopListening}>Stop</button>
        <span>{transcript}</span>
      </div>
    )
  }
}
//
// Dictaphone.propTypes = propTypes

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Dictaphone)
