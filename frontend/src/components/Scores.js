import React from 'react'
import {connect} from 'react-redux'

class Scores extends React.Component {

  render () {
    return (
      <div className="player-container" style={{position: 'absolute', width: '100%'}}>
        <ul>
          <li style={{float: 'left'}}>
            <div className="player1">
              <h2>P1</h2>
              <h2>{this.props.player1}</h2>
            </div>
          </li>
          <li style={{float: 'right'}}>
            <div className="player2">
              <h2>P2</h2>
              <h2>{this.props.player2}</h2>
            </div>
          </li>
        </ul>
      </div>
    )
  }
}

const mapStateToProps = (store) => {
  return {
    player1: store.player1,
    player2: store.player2
  }
}

export default connect(mapStateToProps)(Scores);
