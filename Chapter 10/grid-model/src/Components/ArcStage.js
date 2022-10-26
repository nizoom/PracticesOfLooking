import React, { useState, useEffect } from "react";
import MediaComponent from "./MediaComponent";
import "../Styles/CompiledCss/arcstage.css";
import { updateNotes } from "../Content";

const ArcStage = (props) => {
  const [textAreaState, setTextAreaState] = useState(props.notes);
  const handleTextChange = (event) => {
    setTextAreaState(event.target.value);
  };
  const changePage = (direction) => {
    // updateNotes(props.subChapter, props.page, textAreaState);
    props.handlePageChange(direction);
  };

  useEffect(() => {
    setTextAreaState(props.notes);
  }, [props.page]);
  return (
    <div className="arc-stage-page-wrapper">
      <section className="stage-grid">
        <div className="top-stage-row">
          <MediaComponent
            imgDescription={props.description}
            imgSrcData={props.imgSrcData}
            audioUrl={props.audioUrl}
            movieStatus={props.videoBoolean}
            videoTitle={props.videoTitle}
            videoURL={props.videoURL}
          />
        </div>

        <div className="bottom-stage-row">
          <p className="citation"> {props.citation} </p>
          <div className="description-and-notes-wrapper">
            <p className="image-description"> {props.text}</p>
            <textarea
              className="note-pad"
              value={textAreaState}
              onChange={handleTextChange}
            ></textarea>
          </div>
        </div>
      </section>
      <div className="buttons-section">
        <div className="back-btns-div">
          {props.page === 0 ? null : (
            <button onClick={() => changePage("back")}>Back</button>
          )}

          <button onClick={props.backToTOC}>Home</button>
        </div>
        {props.page + 1 === props.maxPage ? null : (
          <button className="next-btn" onClick={() => changePage("next")}>
            Next
          </button>
        )}
      </div>
    </div>
  );
};

export default ArcStage;

// Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
// eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
// ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
// aliquip ex ea commodo consequat. Duis aute irure dolor in
// reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
// pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
// culpa qui officia deserunt mollit anim id est laborum.
