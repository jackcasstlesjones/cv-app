import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Inputs from "./components/input/input";
import DisplayCV from "./components/cv-display/cv-display";

function App() {
  return (
    <div className="big-container">
      <Inputs />
      <DisplayCV headerContent="boop" />
    </div>
  );
}

export default App;
