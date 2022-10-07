import "./Styles/App.css";
import "./Styles/CompiledCss/globalstyles.css";
import StageHandler from "./Components/StageHandler";
import { useState, useRef } from "react";
const App = () => {
  // Manage state props in seperate function
  const TenPointOneRef = useRef();
  const TenPointTwoRef = useRef();
  const [page, setPage] = useState(0);
  const [subChapter, setSubChapter] = useState("");

  const handleArcClick = (ref) => {
    if (ref === TenPointOneRef) {
      setSubChapter("10.1");
      setPage(page + 1);
    }
    if (ref === TenPointTwoRef) {
      setSubChapter("10.2");
      setPage(page + 1);
    }
  };
  const handlePageChange = (direction) => {
    if (direction === "next") {
      setPage(page + 1);
      return;
    }
    if (direction === "back") {
      setPage(page - 1);
      return;
    }
    if (direction === "home") {
      setPage(0);
    }
  };

  return (
    <div className="App">
      {page === 0 ? (
        <section className="homepage-wrapper">
          <header className="chapter-header">
            Chapter 10: The Global Flow of Visual Culture
          </header>
          <div className="top-row">
            <div
              className="square"
              onClick={() => handleArcClick(TenPointOneRef)}
              ref={TenPointOneRef}
            >
              <p> 1. Top down infrastructure</p>
            </div>
            <div
              className="square"
              onClick={() => handleArcClick(TenPointTwoRef)}
              ref={TenPointTwoRef}
            >
              <p>2. Where is the human? </p>
            </div>
          </div>
          <div className="bottom-row">
            <p className="square" onClick={handleArcClick}>
              Arc 3
            </p>
            <p className="square" onClick={handleArcClick}>
              Arc 4
            </p>
          </div>
        </section>
      ) : (
        <StageHandler
          page={page}
          handlePageChange={handlePageChange}
          subChapter={subChapter}
        />
      )}
    </div>
  );
};

export default App;
