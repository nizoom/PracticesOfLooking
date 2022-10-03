import React, { useEffect, useState } from "react";

const MediaComponent = (props) => {
  const [img, setImg] = useState();

  useEffect(() => {
    const imageSrc = require(`../Chapters/${props.subChapter}/image${props.page}.png`);
    setImg(imageSrc);
  });

  return (
    <div className="media-component-wrapper">
      <div className="image-wrapper">
        <img className="image-square" src={img} />
      </div>
    </div>
  );
};

export default MediaComponent;
