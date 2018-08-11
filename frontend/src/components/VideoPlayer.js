import React, {Component} from 'react'

class VideoPlayer extends Component {
  render() {
    return (
      <div className="Player">
        <video controls
       muted
       src="/media/examples/stream_of_water.webm"
       width="300"
       height="200">
      Sorry, your browser doesn{"'"}t support embedded videos.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
