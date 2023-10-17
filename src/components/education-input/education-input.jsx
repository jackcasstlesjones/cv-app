import Buttons from "../input-buttons/buttons";
import "./education-input.css";
import { useState } from "react";

export default function EducationInputs({
  title,
  firstField,
  secondField,
  thirdField,
  svg,

  handleEducationChange,
  educationDetailsData,

  setEducationDetailsData,
}) {
  const [universityValue, setUniversityValue] = useState("");
  const [degreeValue, setDegreeValue] = useState("");
  const [datesStudiedValue, setDatesStudiedValue] = useState("");

  return (
    <div className="input-container">
      <div className="title-svg-div">
        <svg className="title-svg">{svg}</svg>
        <h2>{title}</h2>
      </div>
      <form autoComplete="off" action="" className="form">
        <div className="form-pair">
          <label htmlFor={firstField}>{firstField}</label>
          <input
            className="text-input"
            type="text"
            name={firstField}
            id={firstField}
            value={!educationDetailsData.submitted ? universityValue : ""}
            onChange={(e) => {
              setUniversityValue(e.target.value);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor={secondField}>{secondField}</label>
          <input
            className="text-input"
            type={secondField}
            name={secondField}
            id={secondField}
            value={!educationDetailsData.submitted ? degreeValue : ""}
            onChange={(e) => {
              setDegreeValue(e.target.value);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor={thirdField}>{thirdField}</label>
          <input
            className="text-input"
            type="text"
            name={thirdField}
            id={thirdField}
            value={!educationDetailsData.submitted ? datesStudiedValue : ""}
            onChange={(e) => {
              setDatesStudiedValue(e.target.value);
            }}
          />
        </div>
      </form>
      <Buttons
        valueOne={universityValue}
        valueTwo={degreeValue}
        valueThree={datesStudiedValue}
        handleDataChange={handleEducationChange}
        dataOnParent={educationDetailsData}
        setParentData={setEducationDetailsData}
      />
    </div>
  );
}
