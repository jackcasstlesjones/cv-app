import PersonalInputs from "../personal-input/personal-input";
import EducationInputs from "../education-input/education-input";
import WorkInputs from "../work-input/work-input";
import "./sidebar.css";

export default function Sidebar({
  personalDetailsData,
  setPersonalDetailsData,

  setEducationDetailsData,
  educationDetailsData,

  workDetailsData,
  setWorkDetailsData,
}) {
  return (
    <>
      <div className="sidebar">
        <PersonalInputs
          personalDetailsData={personalDetailsData}
          setPersonalDetailsData={setPersonalDetailsData}
        />

        <EducationInputs
          educationDetailsData={educationDetailsData}
          setEducationDetailsData={setEducationDetailsData}
        />

        <WorkInputs
          workDetailsData={workDetailsData}
          setWorkDetailsData={setWorkDetailsData}
        />
      </div>
    </>
  );
}
