import Buttons from "../input-buttons/buttons";
import "./personal-input.css";
import { useState } from "react";

export default function Inputs({
  title,
  firstField,
  secondField,
  thirdField,
  svg,
  handlePersonalChange,
  personalDetailsData,
  setIsSubmitted,
  isSubmitted,
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
            value={!isSubmitted ? universityValue : ""}
            onChange={(e) => {
              setUniversityValue(e.target.value);
              console.log(nameValue);
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
            value={!isSubmitted ? degreeValue : ""}
            onChange={(e) => {
              setDegreeValue(e.target.value);
              console.log(emailValue);
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
            value={!isSubmitted ? setDatesStudiedValue : ""}
            onChange={(e) => {
              setDatesStudiedValue(e.target.value);
              console.log(phoneValue);
            }}
          />
        </div>
      </form>
      <Buttons
        valueOne={nameValue}
        setValueOne={setNameValue}
        valueTwo={emailValue}
        setValueTwo={setEmailValue}
        valueThree={phoneValue}
        setValueThree={setPhoneValue}
        handlePersonalChange={handlePersonalChange}
        personalDetailsData={personalDetailsData}
        setIsSubmitted={setIsSubmitted}
      />
    </div>
  );
}
