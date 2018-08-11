import React, {Component} from 'react'


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
      title: 'Sup',
      link: 'https://drive.google.com/uc?id=1PpV-1H3CSrs3ewHuOkEvIQLIWVHctWhH',
      quote: 'There\'s no crying in baseball',
      time: 10
    }
  ],
    index: 0,
    pause: false
}

  next = () => {
    if (this.state.index + 1 < this.state.clips.length) {
      this.setState({index: this.state.index + 1, pause: false})
    } else {
      alert('game ended')
    }
  }

  quoteTime = () => {
    let vid = document.getElementById('vid')
    if(this.state.clips[this.state.index].time <= vid.currentTime && !this.state.pause){
      vid.pause();
      this.setState({pause: true})
    }
  }

  render() {
    return (
      <div className="Player">
        <video id='vid' onEnded={this.next}
        onTimeUpdate={this.quoteTime}
       controls
       autoPlay="autoplay"
       src={this.state.clips[this.state.index].link}
       width="300"
       height="200">
       Sorry, your browser doesn{"'"}t support embedded videos.
        </video>

      </div>
    );
  }
}

export default VideoPlayer;
