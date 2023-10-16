import { useState } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [headConter, setHeaderContent] = useState("placeholder");

  const handleHeaderChange = (newHeader) => {
    setHeaderContent(newHeader);
  };

  return (
    <>
      <div className="big-container">
        <Sidebar setHeaderContent={handleHeaderChange} />
        <DisplayCV headerContent={headConter} />
      </div>
    </>
  );
}

export default App;
