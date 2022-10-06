import React from "react";
import ArcStage from "./ArcStage";
import { gatherContent } from "../Content";
const StageHandler = (props) => {
  const [content, maxPage] = gatherContent(props.subChapter, props.page);
  // console.log(content.movieStatus);
  return (
    <ArcStage
      page={props.page}
      handlePageChange={props.handlePageChange}
      citation={content.citation}
      existingNotes={""}
      maxPage={maxPage}
      subChapter={props.subChapter}
      text={content.text}
      notes={content.notes}
      movieStatus={content.movieStatus}
    />
  );
};

export default StageHandler;

// <ArcStage page={page} handlePageChange={handlePageChange} />
