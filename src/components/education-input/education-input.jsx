import Buttons from "../input-buttons/buttons";
import "./education-input.css";
import { useState } from "react";

export default function EducationInputs({
  handleEducationChange,
  educationDetailsData,

  setEducationDetailsData,
}) {
  const [universityValue, setUniversityValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [datesStudiedValue, setDatesStudiedValue] = useState("");

  const parentValues = {
    valueOne: universityValue,
    valueTwo: degreeValue,
    valueThree: datesStudiedValue,
  };

  return (
    <div className="input-container">
      <div className="title-svg-div">
        <svg className="title-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
            />
          </svg>
        </svg>
        <h2>Education</h2>
      </div>
      <form autoComplete="off" action="" className="form">
        <div className="form-pair">
          <label htmlFor="university">University</label>
          <input
            className="text-input"
            type="text"
            name="university"
            id="university"
            value={!educationDetailsData.submitted ? universityValue : ""}
            onChange={(e) => {
              setUniversityValue(e.target.value);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor="degree">Degree</label>
          <input
            className="text-input"
            type="degree"
            name="degree"
            id="degree"
            value={!educationDetailsData.submitted ? degreeValue : ""}
            onChange={(e) => {
              setDegreeValue(e.target.value);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor="dates-studied">Dates Studied</label>
          <input
            className="text-input"
            type="text"
            name="dates-studied"
            id="dates-studied"
            value={!educationDetailsData.submitted ? datesStudiedValue : ""}
            onChange={(e) => {
              setDatesStudiedValue(e.target.value);
            }}
          />
        </div>
      </form>
      <Buttons
        {...parentValues}
        handleDataChange={handleEducationChange}
        dataOnParent={educationDetailsData}
        setParentData={setEducationDetailsData}
      />
    </div>
  );
}
