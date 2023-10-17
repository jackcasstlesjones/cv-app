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

  const [workDetailsData, setWorkDetailsData] = useState({
    company: "",
    job: "",
    datesWorked: "",
    submitted: false,
  });

  // const handlePersonalChange = (userName, userEmail, userPhone) => {
  //   setPersonalDetailsData(() => ({
  //     fullName: userName,
  //     email: userEmail,
  //     phone: userPhone,
  //   }));
  // };

  // const handleEducationChange = (userUniversity, userDegree, userDates) => {
  //   setEducationDetailsData(() => ({
  //     university: userUniversity,
  //     degree: userDegree,
  //     dates: userDates,
  //   }));
  // };

  return (
    <>
      <div className="big-container">
        <Sidebar
          personalDetailsData={personalDetailsData}
          educationDetailsData={educationDetailsData}
          setPersonalDetailsData={setPersonalDetailsData}
          setEducationDetailsData={setEducationDetailsData}
          workDetailsData={workDetailsData}
          setWorkDetailsData={setWorkDetailsData}
        />
        <DisplayCV
          personalDetailsContent={personalDetailsData}
          educationDetailsContent={educationDetailsData}
          workDetailsContent={workDetailsData}
        />
      </div>
    </>
  );
}

export default App;
