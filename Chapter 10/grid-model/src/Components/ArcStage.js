import React from "react";
import "../Styles/CompiledCss/arcstage.css";
const ArcStage = (props) => {
  return (
    <div className="arc-stage-page-wrapper">
      <section className="stage-grid">
        <div className="top-row">
          <p className="image-square"> Image {props.page}</p>
        </div>
        <div className="bottom-row">
          <p className="image-description"> Image Description</p>
          <p className="note-pad"> Notepad </p>
        </div>
      </section>
      <div className="buttons-section">
        <div className="back-btns-div">
          <button>Back</button>
          <button>Home</button>
        </div>
        <button>Next</button>
      </div>
    </div>
  );
};

export default ArcStage;
