import React, {Component} from 'react'
import Popup from './Popup';
import {connect} from 'react-redux'
import {sendVideo} from '../actions.js'
import EndGame from './EndGame'

class VideoPlayer extends Component {

  state = {
  clips: [
    {
      title: 'A League of Their Own',
      link: 'https://drive.google.com/uc?id=1PpV-1H3CSrs3ewHuOkEvIQLIWVHctWhH',
      quote: 'there\'s no crying in baseball',
      time: 10
    },
    {
      title: 'Back to the Future 2',
      link: 'https://drive.google.com/uc?id=1cE5TpS70IzZAbaM4T6mD7nUVrSW5pkOM',
      quote: 'where we\'re going we don\'t need roads',
      time: 9
    },
    {
      title: 'A Few Good Men',
      link: 'https://drive.google.com/uc?id=11_00hlcxRkB_wcgfvJ1rN50noaHN7YIN',
      quote: 'you can\'t handle the truth',
      hint: 'truth',
      time: 5
    },
    {
      title: 'Star Wars: The Empire Strikes Back',
      link: 'https://drive.google.com/uc?id=1QEBSxyChMLigatKLYerrfj4b-6jFxCoI',
      quote: 'try not do or do not there is no try',
      hint: 'Try',
      time: 8
    }
  ],
    index: 0,
    pause: false,
    firstPause: false,
    end: false
}

  next = () => {
    if (this.state.index + 1 < this.state.clips.length) {
      this.setState((prevState) => {
        return {
          index: prevState.index + 1,
          firstPause: false
        }
      })
    } else {
      this.setState({end: true})
    }
  }

  quoteTime = () => {
    let vid = document.getElementById('vid')
    if(this.state.clips[this.state.index].time <= vid.currentTime && !this.state.firstPause){
      vid.pause();
      this.setState({firstPause: true, pause: true})
    }
  }

  unPause = () => {
    let vid = document.getElementById('vid')
    this.setState({pause: false})
    vid.play();
  }

  // getPopup = () => {
  //   if (this.state.pause){
  //     return <Popup pause={this.unPause}/>
  //   }
  // }

  render() {
    if (this.state.end){
      return <EndGame/>
    }
    return (
      <div className="Player">
        <video id='vid' onPlay={() => this.props.sendVideo(this.state.clips[this.state.index])} onEnded={this.next}
        onTimeUpdate={this.quoteTime}
       
       autoPlay="autoplay"
       src={this.state.clips[this.state.index].link}
       width="300"
       height="200">
       Sorry, your browser doesn{"'"}t support embedded videos.
        </video>
        {this.state.pause && <Popup pause={this.unPause}/>}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    sendVideo: (video) => dispatch(sendVideo(video))
  }
}

export default connect(null, mapDispatchToProps)(VideoPlayer);
