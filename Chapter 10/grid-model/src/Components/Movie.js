import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
export const VideoPlayer = (props) => {
  // try adding movie to build folder instead
  return (
    <div className="movie-player-wrapper">
      <ReactPlayer
        url={"https://www.youtube.com/watch?v=g5GMJcE-3eE"}
        width="400"
        height="400"
        controls={true}
      />
    </div>
  );
};
