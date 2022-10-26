import React, { useEffect, useState } from "react";
import PlayBtn from "../SubChapters/10.1/misc/play-button.png";
import PauseBtn from "../SubChapters/10.1/misc/pause-button.png";
import ReactHowler from "react-howler";
import { VideoPlayer } from "./Movie";
import { srcImage } from "../Content";

const MediaComponent = (props) => {
  const [play, setPlay] = useState(false);
  const togglePlay = () => {
    setPlay(!play);
  };
  return (
    <div className="media-component-wrapper">
      {props.audioUrl ? (
        <div className="audio-player-wrapper">
          <button className="play-btn" onClick={togglePlay}>
            {!play ? (
              <img
                src={PlayBtn}
                height="50"
                weight="50"
                alt="play-audio"
                style={{ marginLeft: "2px" }}
              />
            ) : (
              <img src={PauseBtn} height="50" weight="50" alt="play-audio" />
            )}
            <ReactHowler src={props.audioUrl} playing={play} />
          </button>
        </div>
      ) : null}

      <div className="image-wrapper">
        {props.movieStatus ? (
          <VideoPlayer path={props.videoURL} />
        ) : (
          <img
            className="image-square"
            src={srcImage(props.imgSrcData)}
            alt={props.imgDescription}
            width="200"
            height="400"
          />
        )}
      </div>
    </div>
  );
};

export default MediaComponent;

// useEffect(() => {
//   if (!props.movieStatus) {
//     const imageSrc = require(`../SubChapters/${props.subChapter}/images/image${props.page}.png`);
//     setImg(imageSrc);
//   }
//   setPlay(false);
// }, [props.page]);

//{require(`../SubChapters/${props.subChapter}/audio/audio${props.page}.mp3`)}
