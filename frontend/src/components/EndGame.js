import React from 'react'
import cageNic from '../cageNic.png'
import {connect} from 'react-redux'

const EndGame = ({player1, player2}) => {
  console.log(player1, player2, player1 === player2 && "It's a tie!" || "truthy value" );
  return (
    <div id="player-selection">
      <div id="end-game">
      <h1>{player1 === player2 && "It's a tie!" || player1 > player2 && "Player One Wins!" || "Player Two Wins!" }</h1>
      </div>
      <iframe src="https://giphy.com/embed/3ohhwMfw0rU0LQfFeg" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
      <iframe src="https://giphy.com/embed/MUlt1JtQrTZXSfeZYN" width="480" height="480" frameBorder="0" allowFullScreen></iframe>
    </div>
  )
}

const mapStateToProps = (store) => {
  player1: store.player1
  player2: store.player2
}

export default connect(mapStateToProps)(EndGame);
