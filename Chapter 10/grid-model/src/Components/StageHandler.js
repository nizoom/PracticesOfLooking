import React from "react";
import ArcStage from "./ArcStage";
import { gatherContent } from "../GatherContent";
const StageHandler = (props) => {
  const content = gatherContent(props.page);
  return (
    <ArcStage
      page={props.page}
      handlePageChange={props.handlePageChange}
      img={""}
      citation={""}
      existingNotes={""}
      maxPage={4}
    />
  );
};

export default StageHandler;

// <ArcStage page={page} handlePageChange={handlePageChange} />
