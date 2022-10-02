import "./Styles/App.css";
import "./Styles/CompiledCss/globalstyles.css";
import ArcStage from "./Components/ArcStage";
import { useState } from "react";
const App = () => {
  // Manage state props in seperate function
  const [page, setPage] = useState(0);

  const handleArcClick = () => {
    setPage(page + 1);
  };
  return (
    <div className="App">
      {page === 0 ? (
        <section className="homepage-wrapper">
          <header className="chapter-header">
            Chapter 10.1: Top-down infrastructure
          </header>
          <div className="top-row">
            <p className="square" onClick={handleArcClick}>
              {" "}
              Arc 1
            </p>
            <p className="square" onClick={handleArcClick}>
              {" "}
              Arc 2
            </p>
          </div>
          <div className="bottom-row">
            <p className="square"> Arc 3</p>
            <p className="square"> Arc 4</p>
          </div>
        </section>
      ) : (
        <ArcStage page={page} />
      )}
    </div>
  );
};

export default App;
