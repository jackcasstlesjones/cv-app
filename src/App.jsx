import { useState, useSyncExternalStore } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [nameValue, setNameValue] = useState("Jack CJ");
  const [emailvalue, setEmailValue] = useState("jackcasstles@gmail.com");
  const [phoneValue, setPhoneValue] = useState("0493673312");

  const setNameContent = (newName) => {
    setNameValue(newName);
  };

  const setEmailContent = (newEmail) => {
    setEmailValue(newEmail);
  };

  return (
    <>
      <div className="big-container">
        <Sidebar setNameContent={setNameContent} />
        <DisplayCV nameContent={nameValue} />
      </div>
    </>
  );
}

export default App;
