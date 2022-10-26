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
      console.log(arcContent);
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
    if (direction === "home") {
      // setCurrentPage(0);
      // go back to ChapterHomePage
    }
  };

  return (
    <div>
      {arcContentArr ? (
        <ArcStage
          handlePageChange={handlePageChange}
          citation={arcContentArr[currentPage].Citation}
          existingNotes={""}
          maxPage={arcContentArr.length}
          text={arcContentArr[currentPage].slideText}
          imgSrcData={arcContentArr[currentPage].image}
          audioUrl={arcContentArr[currentPage].audio.asset.url}
        />
      ) : null}
    </div>
  );
};
// notes={content.notes}
// movieStatus={content.movieStatus}
export default StageHandler;

// <ArcStage page={page} handlePageChange={handlePageChange} />
