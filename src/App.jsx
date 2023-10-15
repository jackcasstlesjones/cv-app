import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./components/input/input";
import DisplayCV from "./components/cv-display/cv-display";

function App() {
  const [headCont, setheadCont] = useState("placeholder");

  const handleHeaderChange = (newHeader) => {
    setheadCont(newHeader);
  };

  return (
    <>
      <head>
        <meta charset="UTF-8"></meta>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <title>Your React App</title>
      </head>
      <div className="big-container">
        <Inputs setHeadCont={handleHeaderChange} />
        <DisplayCV headerContent={headCont} />
      </div>
    </>
  );
}

export default App;
