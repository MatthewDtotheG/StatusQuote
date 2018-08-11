import React from 'react'

class Scores extends React.Component {
  state = {
    player1: 0,
    player2: 0
  }
  render () {
    return (
      <div className="player-container" style={{position: 'absolute', width: '100%'}}>
        <ul>
          <li style={{float: 'left'}}>
            <div className="player1">
              <h2>P1</h2>
              <h2>{this.state.player1}</h2>
            </div>
          </li>
          <li style={{float: 'right'}}>
            <div className="player2">
              <h2>P2</h2>
              <h2>{this.state.player2}</h2>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

export default Scores;
