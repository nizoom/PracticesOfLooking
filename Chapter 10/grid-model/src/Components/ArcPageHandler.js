import React, { useEffect, useState } from "react";
import ArcStage from "./ArcStage";
import { getArcContent } from "../Content";
const StageHandler = (props) => {
  // add field for movie url link in Sanity pageContent document

  const [arcContentArr, setArcContentArr] = useState();
  const [currentPage, setCurrentPage] = useState(0);
  useEffect(() => {
    const fetchArcContent = async () => {
      const arcContent = await getArcContent(props.chapterName);
      console.log(arcContent[0]);
      setArcContentArr(arcContent);
    };

    fetchArcContent();
  }, []);

  const handlePageChange = (direction) => {
    if (direction === "next") {
      setCurrentPage(currentPage + 1);
      return;
    }
    if (direction === "back") {
      setCurrentPage(currentPage - 1);
      return;
    }
  };

  return (
    <div>
      {arcContentArr ? (
        <ArcStage
          backToTOC={props.backToTOC}
          page={currentPage}
          handlePageChange={handlePageChange}
          citation={arcContentArr[currentPage].Citation}
          existingNotes={""}
          maxPage={arcContentArr.length}
          text={arcContentArr[currentPage].slideText}
          description={arcContentArr[currentPage].Description}
          imgSrcData={arcContentArr[currentPage].image}
          audioUrl={arcContentArr[currentPage].audio.asset.url}
          videoBoolean={arcContentArr[currentPage].videoBoolean}
          videoTitle={arcContentArr[currentPage].videoTitle}
          videoURL={arcContentArr[currentPage].videoURL}
        />
      ) : null}
    </div>
  );
};

export default StageHandler;
