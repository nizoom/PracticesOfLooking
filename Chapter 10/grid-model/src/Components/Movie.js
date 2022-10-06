import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import movie from "../SubChapters/10.1/movie/tulpan.mp4";
export const VideoPlayer = (props) => {
  // try adding movie to build folder instead
  return (
    <div>
      <ReactPlayer url={movie} width="100%" height="100%" controls={true} />
    </div>
  );
};
