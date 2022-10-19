import "./Styles/App.css";
import "./Styles/CompiledCss/globalstyles.css";
import { useState, useRef } from "react";
import ChapterHomePage from "./Components/ChapterHomePage";
const App = () => {
  return (
    <div className="homepage">
      <header>
        <div className="project-titles">
          <h1 className="book-title">
            Practices of Looking: An Introduction to Visual Culture
          </h1>
          <h2 className="book-subtitle">Table of Contents</h2>
        </div>
      </header>
      <section className="table-of-contents-section">
        <nav className="toc-nav">
          <div className="parent-chapter-box">
            <p className="number">1</p>
            <p className="chapter-title"> Images, Power, and Politics</p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">2</p>
            <p className="chapter-title">Viewers Make Meaning</p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">3</p>
            <p className="chapter-title">Modernity, the Gaze, and Power</p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">4</p>
            <p className="chapter-title">
              Realism and Perspective From Renaissance Painting To Digital Media{" "}
            </p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">5</p>
            <p className="chapter-title">
              Visual Technologies, Reproduction, and the Copy
            </p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">6</p>
            <p className="chapter-title"> Media in Everday Life</p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">7</p>
            <p className="chapter-title">
              Brand Culture: The Images and Space of Consumption
            </p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">8</p>
            <p className="chapter-title">
              Postmodernism: Irony, Parody, and Pastiche
            </p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">9</p>
            <p className="chapter-title">
              Scientific Looking, Looking at Science
            </p>
          </div>
          <div className="parent-chapter-box">
            <p className="number">10</p>
            <p className="chapter-title">The Global Flow of Visual Culture</p>
          </div>
        </nav>
      </section>
    </div>
  );
};

export default App;

// const TenPointOneRef = useRef();
// const TenPointTwoRef = useRef();
// const [page, setPage] = useState(0);
// const [subChapter, setSubChapter] = useState("");

// const handleArcClick = (ref) => {
//   if (ref === TenPointOneRef) {
//     setSubChapter("10.1");
//     setPage(page + 1);
//   }
//   if (ref === TenPointTwoRef) {
//     setSubChapter("10.2");
//     setPage(page + 1);
//   }
//};
// const handlePageChange = (direction) => {
//   if (direction === "next") {
//     setPage(page + 1);
//     return;
//   }
//   if (direction === "back") {
//     setPage(page - 1);
//     return;
//   }
//   if (direction === "home") {
//     setPage(0);
//   }
// };

// return (
//   <div className="App">
//     {page === 0 ? (
//       <section className="homepage-wrapper">
//         <header className="chapter-header">
//           Chapter 10: The Global Flow of Visual Culture
//         </header>
//         <div className="top-row">
//           <div
//             className="square"
//             onClick={() => handleArcClick(TenPointOneRef)}
//             ref={TenPointOneRef}
//           >
//             <p> 1. Top down infrastructure</p>
//           </div>
//           <div
//             className="square"
//             onClick={() => handleArcClick(TenPointTwoRef)}
//             ref={TenPointTwoRef}
//           >
//             <p>2. Where is the human? </p>
//           </div>
//         </div>
//         <div className="bottom-row">
//           <p className="square" onClick={handleArcClick}>
//             Arc 3
//           </p>
//           <p className="square" onClick={handleArcClick}>
//             Arc 4
//           </p>
//         </div>
//       </section>
//     ) : (
//       <StageHandler
//         page={page}
//         handlePageChange={handlePageChange}
//         subChapter={subChapter}
//       />
//     )}
//   </div>
