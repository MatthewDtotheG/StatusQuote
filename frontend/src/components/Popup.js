import React from 'react'
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from 'prop-types'

const propTypes = {
  // Props injected by SpeechRecognition
  transcript: PropTypes.string,
  startListening: PropTypes.func,
  stopListening: PropTypes.func,
  resetTranscript: PropTypes.func
}

class Popup extends React.Component {
  state = {time: 5}

  componentDidMount() {
    this.interval = setInterval(() => {
        if (this.state.time === 0){
          this.props.pause();
        } else {
        this.setState({time: this.state.time - 1})}
      }, 1000)
    this.props.resetTranscript()
    this.props.startListening()
  }

  componentWillUnmount() {
    clearInterval(this.interval);
    this.props.stopListening()
  }

  render () {
    return (
      <div className='popup' style={{position: 'absolute'}}>
        <h1>Guess the line</h1>
        <h3>time left: {this.state.time}</h3>
        <h3>{this.props.transcript}</h3>
        <button onClick={this.props.resetTranscript}>Re-Record</button>
      </div>
    )
  }
}

const options = {
  autoStart: false
}

export default SpeechRecognition(options)(Popup);
