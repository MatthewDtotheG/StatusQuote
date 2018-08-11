import React from 'react'
import {pressStartGame} from '../actions'
import {connect} from 'react-redux'

const PlayerSelection = (props) => {
  return (
    <div id="player-selection">
      <div id="content-selection">
        <h1 className='title'>Status Quote</h1>
        <p>Select Number of Players: <select className='select-box'><option>2</option></select></p>
        <br/>
        <button onClick={props.handleClick} className='start-btn'>Start Game</button>
      </div>
    </div>
  )
}

const mapDispatchToProps = (dispatch) => {
  return {
    handleClick: () => dispatch(pressStartGame)
  }
}

export default connect(null, mapDispatchToProps)(PlayerSelection)
