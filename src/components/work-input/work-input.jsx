import Buttons from "../input-buttons/buttons";

import { useState } from "react";

export default function WorkInputs({ workDetailsData, setWorkDetailsData }) {
  const [companyValue, setCompanyValue] = useState("");
  const [jobValue, setJobValue] = useState("");
  const [datesWorkedValue, setDatesWorkedValue] = useState("");

  const parentValues = {
    valueOne: companyValue,
    valueTwo: jobValue,
    valueThree: datesWorkedValue,
  };

  const parentKeys = {
    keyOne: "company",
    keyTwo: "job",
    keyThree: "datesWorked",
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
              d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
            />
          </svg>
        </svg>
        <h2>Work Experience</h2>
      </div>
      <form autoComplete="off" action="" className="form">
        <div className="form-pair">
          <label htmlFor="company">Company</label>
          <input
            className="text-input"
            type="text"
            name="company"
            id="company"
            value={!workDetailsData.submitted ? companyValue : ""}
            onChange={(e) => {
              setCompanyValue(e.target.value);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor="job">Job Titles</label>
          <input
            className="text-input"
            type="text"
            name="job"
            id="job"
            value={!workDetailsData.submitted ? jobValue : ""}
            onChange={(e) => {
              setJobValue(e.target.value);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor="dates-worked">Dates Worked</label>
          <input
            className="text-input"
            type="text"
            name="dates-worked"
            id="dates-worked"
            value={!workDetailsData.submitted ? datesWorkedValue : ""}
            onChange={(e) => {
              setDatesWorkedValue(e.target.value);
            }}
          />
        </div>
      </form>
      <Buttons
        {...parentValues}
        {...parentKeys}
        dataOnParent={workDetailsData}
        setParentData={setWorkDetailsData}
      />
    </div>
  );
}
