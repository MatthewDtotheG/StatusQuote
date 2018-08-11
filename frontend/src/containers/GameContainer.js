import React, {Component} from 'react'
import VideoPlayer from '../components/VideoPlayer'

class GameContainer extends Component {

  render(){
    return (
      <div id="game-container">
        <VideoPlayer />
      </div>
    )
  }
}

export default GameContainer
