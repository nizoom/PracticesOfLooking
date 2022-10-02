import React from "react";
import ArcStage from "./ArcStage";
const StageHandler = (props) => {
  const gatherContent = () => {};
  return (
    <ArcStage
      page={props.page}
      handlePageChange={props.handlePageChange}
      img={""}
      existingNotes={""}
    />
  );
};

export default StageHandler;

// <ArcStage page={page} handlePageChange={handlePageChange} />
