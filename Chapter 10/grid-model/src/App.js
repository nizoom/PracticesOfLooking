import "./Styles/App.css";
import "./Styles/CompiledCss/globalstyles.css";
import ArcStage from "./Components/ArcStage";
import StageHandler from "./Components/StageHandler";
import { useState } from "react";
const App = () => {
  // Manage state props in seperate function
  const [page, setPage] = useState(0);

  const handleArcClick = () => {
    setPage(page + 1);
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

  // useEffect(() => {
  //   console.log(page);
  // });
  return (
    <div className="App">
      {page === 0 ? (
        <section className="homepage-wrapper">
          <header className="chapter-header">
            Chapter 10.1: Top-down infrastructure
          </header>
          <div className="top-row">
            <p className="square" onClick={handleArcClick}>
              Arc 1
            </p>
            <p className="square" onClick={handleArcClick}>
              Arc 2
            </p>
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
        // <ArcStage page={page} handlePageChange={handlePageChange} />
        <StageHandler page={page} handlePageChange={handlePageChange} />
      )}
    </div>
  );
};

export default App;
