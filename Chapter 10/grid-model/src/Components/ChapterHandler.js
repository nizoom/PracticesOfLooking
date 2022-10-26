import React, { useState } from "react";
import ChapterHomePage from "./ChapterHomePage";
import StageHandler from "./ArcPageHandler";
const ChapterHandler = (props) => {
  const [showParentChapter, setShowParentChapter] = useState(true);
  const [currentSubChapName, setcurrentSubChapName] = useState("");
  const handleSubChapterSelection = (subChapName) => {
    setShowParentChapter(false);
    setcurrentSubChapName(subChapName);
  };
  return (
    <div>
      {showParentChapter ? (
        <ChapterHomePage
          chapterNumber={props.chapterNumber}
          chapterName={props.chapterName}
          handleSubChapterSelection={handleSubChapterSelection}
        />
      ) : (
        <StageHandler
          chapterName={currentSubChapName}
          backToTOC={props.backToTOC}
        />
      )}
    </div>
  );
};

export default ChapterHandler;
