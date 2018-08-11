import React from 'react'
import cageNic from '../cageNic.png'
class EndGame extends React.Component {
  render() {
    return (
      <div id="player-selection">
        <div id="end-game">
        <h1>Game Over</h1>
        </div>
        <iframe src="https://giphy.com/embed/3ohhwMfw0rU0LQfFeg" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
        <iframe src="https://giphy.com/embed/MUlt1JtQrTZXSfeZYN" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
      </div>
    )
  }
}

export default EndGame;
