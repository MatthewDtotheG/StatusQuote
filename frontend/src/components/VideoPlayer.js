import React, {Component} from 'react'
import Popup from './Popup';

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
      title: 'Sup',
      link: 'https://drive.google.com/uc?id=1PpV-1H3CSrs3ewHuOkEvIQLIWVHctWhH',
      quote: 'there\'s no crying in baseball',
      time: 10
    }
  ],
    index: 0,
    pause: false,
    firstPause: false
}

  next = () => {
    if (this.state.index + 1 < this.state.clips.length) {
      this.setState({index: this.state.index + 1, firstPause: false})
    } else {
      alert('game ended')
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
    return (
      <div className={this.state.pause ? "shadowed" : "Player"}>
        <video id='vid' onEnded={this.next}
        onTimeUpdate={this.quoteTime}
       controls
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

export default VideoPlayer;
