import PersonalInputs from "../personal-input/personal-input";
import EducationInputs from "../education-input/education-input";
import "./sidebar.css";

export default function Sidebar({
  handlePersonalChange,
  personalDetailsData,
  setPersonalDetailsData,

  setEducationDetailsData,
  handleEducationChange,
  educationDetailsData,
}) {
  return (
    <>
      <div className="sidebar">
        <PersonalInputs
          handlePersonalChange={handlePersonalChange}
          personalDetailsData={personalDetailsData}
          setPersonalDetailsData={setPersonalDetailsData}
        />

        <EducationInputs
          handleEducationChange={handleEducationChange}
          educationDetailsData={educationDetailsData}
          setEducationDetailsData={setEducationDetailsData}
        />
      </div>
    </>
  );
}
