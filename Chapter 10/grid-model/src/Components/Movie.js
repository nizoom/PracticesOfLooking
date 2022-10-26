import React from "react";
import ReactPlayer from "react-player/lazy";
export const VideoPlayer = (props) => {
  // try adding movie to build folder instead
  return (
    <div className="movie-player-wrapper">
      <ReactPlayer
        url={props.path}
        width="400"
        height="400"
        controls={false}
        config={{
          youtube: {
            playerVars: { showinfo: 0 },
          },
        }}
      />
    </div>
  );
};
