import React, {Component} from 'react'


class VideoPlayer extends Component {
  
  render() {
    return (
      <div className="Player">
        <video controls
       autoplay="autoplay"
       src='https://drive.google.com/uc?id=1PpV-1H3CSrs3ewHuOkEvIQLIWVHctWhH'
       width="300"
       height="200">
       Sorry, your browser doesn{"'"}t support embedded videos.
        </video>
      </div>
    );
  }
}

export default VideoPlayer;
