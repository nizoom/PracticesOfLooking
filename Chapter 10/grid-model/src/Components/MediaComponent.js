import React, { useEffect, useState } from "react";
import PlayBtn from "../SubChapters/10.1/misc/play-button.png";
import PauseBtn from "../SubChapters/10.1/misc/pause-button.png";

const MediaComponent = (props) => {
  const [img, setImg] = useState();
  const [play, setPlay] = useState(false);

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
