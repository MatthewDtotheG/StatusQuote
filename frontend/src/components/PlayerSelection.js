import React from 'react'
import {pressStartGame} from '../actions'
import {connect} from 'react-redux'

const PlayerSelection = (props) => {
  return (
    <div>
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
