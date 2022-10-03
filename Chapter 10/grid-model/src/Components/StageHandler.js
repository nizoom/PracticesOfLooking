import React from "react";
import ArcStage from "./ArcStage";
import { gatherContent } from "../Content";
const StageHandler = (props) => {
  const [content, maxPage] = gatherContent(props.subChapter, props.page);
  console.log(content);
  return (
    <ArcStage
      page={props.page}
      handlePageChange={props.handlePageChange}
      citation={content.citation}
      existingNotes={""}
      maxPage={maxPage}
      subChapter={props.subChapter}
      text={content.text}
    />
  );
};

export default StageHandler;

// <ArcStage page={page} handlePageChange={handlePageChange} />
