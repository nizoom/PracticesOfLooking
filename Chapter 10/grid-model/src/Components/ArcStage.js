import React, { useState } from "react";
import "../Styles/CompiledCss/arcstage.css";

const ArcStage = (props) => {
  const [textAreaState, setTextAreaState] = useState();
  const handleTextChange = (event) => {
    setTextAreaState(event.target.value);
  };
  const changePage = (direction) => {
    console.log(direction);
    props.handlePageChange(direction);
  };
  return (
    <div className="arc-stage-page-wrapper">
      <section className="stage-grid">
        <div className="top-row">
          <p className="image-square"> Image {props.page}</p>
        </div>
        <div className="bottom-row">
          <p className="image-description"> Image Description</p>
          <textarea
            className="note-pad"
            value={textAreaState}
            onChange={handleTextChange}
            defaultValue="Take notes here!"
          ></textarea>
        </div>
      </section>
      <div className="buttons-section">
        <div className="back-btns-div">
          <button onClick={() => changePage("back")}>Back</button>
          <button onClick={() => changePage("home")}>Home</button>
        </div>
        <button className="next-btn" onClick={() => changePage("next")}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ArcStage;
