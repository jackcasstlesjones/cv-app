import { useState } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [headerContent, setHeaderContent] = useState({
    name: "Jack Casstles-Jones",
    email: "jackcasstlesjones@gmail.com",
    phone: "0493673312",
  });

  const handleHeaderChange = (newHeader) => {
    setHeaderContent(newHeader);
  };

  return (
    <>
      <div className="big-container">
        <Sidebar setHeaderContent={handleHeaderChange} />
        <DisplayCV headerContent={headerContent} />
      </div>
    </>
  );
}

export default App;
