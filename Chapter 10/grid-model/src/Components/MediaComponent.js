import React from "react";
import ChapterPointOneImage1 from "../Chapters/10.1/image1.png";

const MediaComponent = (props) => {
  return (
    <div className="media-component-wrapper">
      <img
        className="image-square"
        src={require(`../Chapters/${props.subChapter}/image${props.page}.png`)}
        height="450"
        width="450"
      />
    </div>
  );
};

export default MediaComponent;
