import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./components/input/input";
import DisplayCV from "./components/cv-display/cv-display";

function App() {
  const [headCont, setheadCont] = useState("placeholder");
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleHeaderChange = (newHeader) => {
    setheadCont(newHeader);
  };

  return (
    <>
      <div className="big-container">
        <Inputs
          changeFunction={handleInputChange}
          setHeadCont={handleHeaderChange}
          inputValue={inputValue}
        />
        <DisplayCV headerContent={headCont} />
      </div>
    </>
  );
}

export default App;
