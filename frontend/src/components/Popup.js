import React from 'react'

class Popup extends React.Component {

  state = {time: 5}

  componentDidMount() {
    this.interval = setInterval(() => {
        if (this.state.time === 0){
          this.props.pause();
        } else {
        this.setState({time: this.state.time - 1})}
      }, 1000)
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render () {
    return (
      <div className='popup' style={{position: 'absolute'}}>
        <h1>Guess the line</h1>
        <h1>time left: {this.state.time}</h1>
      </div>
    )
  }
}

export default Popup;
