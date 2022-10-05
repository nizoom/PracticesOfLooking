import React, { useEffect, useState } from "react";
import PlayBtn from "../SubChapters/10.1/misc/play-button.png";
import PauseBtn from "../SubChapters/10.1/misc/pause-button.png";
import ReactHowler from "react-howler";
// import audioFile from "../SubChapters/10.1/audio/audio1.mp3";

const MediaComponent = (props) => {
  const [img, setImg] = useState();
  // const [audio, setAudio] = useState();
  const [play, setPlay] = useState(true);

  useEffect(() => {
    const imageSrc = require(`../SubChapters/${props.subChapter}/images/image${props.page}.png`);
    setImg(imageSrc);
  }, [props.page]);

  const togglePlay = () => {
    setPlay(!play);
  };

  return (
    <div className="media-component-wrapper">
      <div className="audio-player-wrapper">
        <button className="play-btn" onClick={togglePlay}>
          {play ? (
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
          <ReactHowler
            src={require(`../SubChapters/${props.subChapter}/audio/audio${props.page}.mp3`)}
            playing={!play}
          />
        </button>
      </div>
      <div className="image-wrapper">
        <img
          className="image-square"
          src={img}
          alt=""
          width="200"
          height="400"
        />
      </div>
    </div>
  );
};

export default MediaComponent;
