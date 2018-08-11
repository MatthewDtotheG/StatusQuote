import React, {Component} from 'react'
import VideoPlayer from '../components/VideoPlayer'
import Scores from '../components/Scores'
class GameContainer extends Component {
  render(){
    return (
      <div id="game-container">
        <VideoPlayer />
        <Scores/>
      </div>
    )
  }
}

export default GameContainer
