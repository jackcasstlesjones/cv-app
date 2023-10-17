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

  const [isSubmitted, setIsSubmitted] = useState(false);

  const reverseSubmittedBoolean = (value) => {
    setIsSubmitted(value);
    console.log(isSubmitted);
  };

  const handlePersonalChange = (userName, userEmail, userPhone) => {
    setPersonalDetailsData(() => ({
      fullName: userName,
      email: userEmail,
      phone: userPhone,
    }));
  };

  return (
    <>
      <div className="big-container">
        <Sidebar
          isSubmitted={isSubmitted}
          setIsSubmitted={reverseSubmittedBoolean}
          personalDetailsData={personalDetailsData}
          handlePersonalChange={handlePersonalChange}
        />
        <DisplayCV
          isSubmitted={isSubmitted}
          personalDetailsContent={personalDetailsData}
        />
      </div>
    </>
  );
}

export default App;
