import { useState, useSyncExternalStore } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [personalDetailsData, setPersonalDetailsData] = useState({
    fullName: "Jack",
    email: "email@",
    phone: "047",
  });

  const handlePersonalChange = (fieldName, value) => {
    setPersonalDetailsData(() => ({
      [fieldName]: value,
    }));
  };

  return (
    <>
      <div className="big-container">
        <Sidebar setNameContent={handlePersonalChange} />
        <DisplayCV personalDetailsContent={personalDetailsData} />
      </div>
    </>
  );
}

export default App;
