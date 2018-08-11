import React from 'react'
import SpeechRecognition from 'react-speech-recognition'
import PropTypes from 'prop-types'
import {connect} from 'react-redux'
import {updatePlayer1, updatePlayer2} from '../actions'

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
    this.props.stopListening()

    if(this.props.transcript === this.props.video.quote){
      if(this.props.video.title === 'A League of Their Own'){
        this.props.updatePlayer1()
      }
      else if (this.props.video.title === 'Back to the Future 2') {
        this.props.updatePlayer2()
      }
    }
    clearInterval(this.interval);
  }

  render () {
    return (
      <div className='popup' style={{position: 'absolute'}}>
        <h1>Guess the line</h1>
        <h2>time left: {this.state.time}</h2>
        <h3>{this.props.transcript}</h3>
        <button className='start-btn' onClick={this.props.resetTranscript}>Re-Record</button>
      </div>
    )
  }
}

const options = {
  autoStart: false
}

const mapStateToProps = (store) => {
  return {
    video: store.video
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    updatePlayer1: () => {
      dispatch(updatePlayer1)},
    updatePlayer2: () => dispatch(updatePlayer2)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SpeechRecognition(options)(Popup));
