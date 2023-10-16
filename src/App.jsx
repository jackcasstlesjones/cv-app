import { useState } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [headCont, setheadCont] = useState("placeholder");

  const handleHeaderChange = (newHeader) => {
    setheadCont(newHeader);
  };

  return (
    <>
      <div className="big-container">
        <Sidebar handleHeaderChange={handleHeaderChange} />
        <DisplayCV headerContent={headCont} />
      </div>
    </>
  );
}

export default App;
