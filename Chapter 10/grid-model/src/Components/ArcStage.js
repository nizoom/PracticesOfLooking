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
    updateNotes(props.subChapter, props.page, textAreaState);
    props.handlePageChange(direction);
  };

  useEffect(() => {
    setTextAreaState(props.notes);
  }, [props.page]);
  return (
    <div className="arc-stage-page-wrapper">
      <section className="stage-grid">
        <div className="top-row">
          <MediaComponent subChapter={props.subChapter} page={props.page} />
        </div>
        <p className="citation"> {props.citation} </p>
        <div className="bottom-stage-row">
          <p className="image-description"> {props.text}</p>
          <textarea
            className="note-pad"
            value={textAreaState}
            onChange={handleTextChange}
          ></textarea>
        </div>
      </section>
      <div className="buttons-section">
        <div className="back-btns-div">
          <button onClick={() => changePage("back")}>Back</button>
          <button onClick={() => changePage("home")}>Home</button>
        </div>
        {props.page === props.maxPage ? null : (
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
