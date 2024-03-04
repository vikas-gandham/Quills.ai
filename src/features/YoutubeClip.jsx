import React from "react";
import YouTube from "react-youtube";

class YoutubeClip extends React.Component {
  render() {
    const options = {
      width: "981",
      height: "766",
      playerVars: {
        autoplay: 1,
        controls: 1,
      },
    };

    return (
      <YouTube
        videoId="QUyPOEs90qQ"
        options={options}
        onReady={this._onReady}
        id="video"
      />
    );
  }

  _onReady(event) {
    event.target.pauseVideo();
  }
}

export default YoutubeClip;
