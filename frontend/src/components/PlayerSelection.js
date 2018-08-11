import React from 'react'
import {pressStartGame} from '../actions'
import {connect} from 'react-redux'

const PlayerSelection = (props) => {
  return (
    <div id="player-selection">
      <h1>Status Quote</h1>
      <p>Select Number of Players: <select><option>2</option></select></p>
      <br/>
      <button onClick={props.handleClick}>Start Game</button>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(pressStartGame)
  }
}

export default connect(null, mapDispatchToProps)(PlayerSelection)
