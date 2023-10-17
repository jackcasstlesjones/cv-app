import { useState, useSyncExternalStore } from "react";

import "./App.css";

import DisplayCV from "./components/cv-display/cv-display";
import Sidebar from "./components/sidebar/sidebar";

function App() {
  const [personalDetailsData, setPersonalDetailsData] = useState({
    fullName: "",
    email: "",
    phone: "",
    submitted: false,
  });

  const [educationDetailsData, setEducationDetailsData] = useState({
    university: "",
    degree: "",
    dates: "",
    submitted: false,
  });

  const handlePersonalChange = (userName, userEmail, userPhone) => {
    setPersonalDetailsData(() => ({
      fullName: userName,
      email: userEmail,
      phone: userPhone,
    }));
  };

  const handleEducationChange = (userUniversity, userDegree, userDates) => {
    setEducationDetailsData(() => ({
      university: userUniversity,
      degree: userDegree,
      dates: userDates,
    }));
  };

  return (
    <>
      <div className="big-container">
        <Sidebar
          personalDetailsData={personalDetailsData}
          handlePersonalChange={handlePersonalChange}
          educationDetailsData={educationDetailsData}
          handleEducationChange={handleEducationChange}
          setPersonalDetailsData={setPersonalDetailsData}
          setEducationDetailsData={setEducationDetailsData}
        />
        <DisplayCV
          personalDetailsContent={personalDetailsData}
          educationDetailsContent={educationDetailsData}
        />
      </div>
    </>
  );
}

export default App;
