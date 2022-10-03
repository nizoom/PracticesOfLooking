import React from "react";
import ArcStage from "./ArcStage";
import { gatherContent } from "../GatherContent";
const StageHandler = (props) => {
  const content = gatherContent(props.page);
  console.log(props.subChapter + "Image" + props.page);
  return (
    <ArcStage
      page={props.page}
      handlePageChange={props.handlePageChange}
      // imgName={props.subChapter + "Image" + props.page}
      citation={""}
      existingNotes={""}
      maxPage={4}
      subChapter={props.subChapter}
    />
  );
};

export default StageHandler;

// <ArcStage page={page} handlePageChange={handlePageChange} />
