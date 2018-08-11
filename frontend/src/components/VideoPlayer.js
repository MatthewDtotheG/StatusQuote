import React, {Component} from 'react'
import Popup from './Popup';
import {connect} from 'react-redux'
import {sendVideo} from '../actions.js'

class VideoPlayer extends Component {

  state = {
  clips: [
    {
      title: 'A League of Their Own',
      link: 'https://drive.google.com/uc?id=1PpV-1H3CSrs3ewHuOkEvIQLIWVHctWhH',
      quote: 'There\'s no crying in baseball',
      hint: 'baseball',
      time: 10
    },
    {
      title: 'Back to the Future 2',
      link: 'https://drive.google.com/uc?id=1cE5TpS70IzZAbaM4T6mD7nUVrSW5pkOM',
      quote: 'Where we\'re going we don\'t need roads',
      hint: 'roads',
      time: 9
    },
    {
      title: 'A Few Good Men',
      link: 'https://drive.google.com/uc?id=11_00hlcxRkB_wcgfvJ1rN50noaHN7YIN',
      quote: 'You can\'t handle the truth',
      hint: 'truth',
      time: 5
    },
    {
      title: 'Star Wars: The Empire Strikes Back',
      link: 'https://drive.google.com/uc?id=1QEBSxyChMLigatKLYerrfj4b-6jFxCoI',
      quote: 'Try not Do or do not There is no try',
      hint: 'Try',
      time: 8
    }
  ],
    index: 0,
    pause: false,
    firstPause: false,
    hintClicked: false
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

  getPopup = () => {
    if (this.state.pause){
      return <Popup pause={this.unPause}/>
    }
  }

  hintyClicked = (time) => {
    this.setState({
      hintClicked: !this.state.hintClicked
    })

    console.log('time match', this.state.clips.find((obj) => obj.time == time))
  }


  render() {
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
        {this.getPopup()}
        <button onClick={() => this.hintyClicked(this.state.clips[this.state.index].time)} className='hint-btn'>Hint</button>
        {this.state.hintClicked ? <h1></h1> : console.log('this aint')}
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
