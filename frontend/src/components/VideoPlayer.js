import React, {Component} from 'react'
import Popup from './Popup';
import EndGame from './EndGame'

class VideoPlayer extends Component {

  state = {
  clips: [
    {
      title: 'A League of Their Own',
      link: 'https://drive.google.com/uc?id=1PpV-1H3CSrs3ewHuOkEvIQLIWVHctWhH',
      quote: 'There\'s no crying in baseball',
      time: 10
    },
    {
      title: 'Back to the Future 2',
      link: 'https://drive.google.com/uc?id=1cE5TpS70IzZAbaM4T6mD7nUVrSW5pkOM',
      quote: 'Where we\'re going we don\'t need roads',
      time: 9
    },
    {
      title: 'A Few Good Men',
      link: 'https://drive.google.com/uc?id=11_00hlcxRkB_wcgfvJ1rN50noaHN7YIN',
      quote: 'You can\'t handle the truth',
      time: 5
    },
    {
      title: 'Star Wars: The Empire Strikes Back',
      link: 'https://drive.google.com/uc?id=1QEBSxyChMLigatKLYerrfj4b-6jFxCoI',
      quote: 'Try not Do or do not There is no try',
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
      this.setState({index: this.state.index + 1, firstPause: false})
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

  getPopup = () => {
    if (this.state.pause){
      return <Popup pause={this.unPause}/>
    }
  }

  render() {
    if (this.state.end){
      return <EndGame/>
    }
    return (
      <div className="Player">
        <video id='vid' onEnded={this.next}
        onTimeUpdate={this.quoteTime}
        autoPlay="autoplay"
        src={this.state.clips[this.state.index].link}
        >
       Sorry, your browser doesn{"'"}t support embedded videos.
        </video>
        {this.getPopup()}
      </div>
    );
  }
}

export default VideoPlayer;
