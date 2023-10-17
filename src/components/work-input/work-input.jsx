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
              d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"
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
