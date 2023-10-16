import { useState } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [headCont, setheaderContent] = useState("placeholder");

  const handleHeaderChange = (newHeader) => {
    setheaderContent(newHeader);
  };

  return (
    <>
      <div className="big-container">
        <Sidebar setHeaderContent={handleHeaderChange} />
        <DisplayCV headerContent={headCont} />
      </div>
    </>
  );
}

export default App;
