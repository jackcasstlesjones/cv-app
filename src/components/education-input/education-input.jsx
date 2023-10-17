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
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

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
            value={!isSubmitted ? nameValue : ""}
            onChange={(e) => {
              setNameValue(e.target.value);
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
            value={!isSubmitted ? emailValue : ""}
            onChange={(e) => {
              setEmailValue(e.target.value);
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
            value={!isSubmitted ? phoneValue : ""}
            onChange={(e) => {
              setPhoneValue(e.target.value);
              console.log(phoneValue);
            }}
          />
        </div>
      </form>
      <Buttons
        nameValue={nameValue}
        setNameValue={setNameValue}
        emailValue={emailValue}
        setEmailValue={setEmailValue}
        phoneValue={phoneValue}
        setPhoneValue={setPhoneValue}
        handlePersonalChange={handlePersonalChange}
        personalDetailsData={personalDetailsData}
        setIsSubmitted={setIsSubmitted}
      />
    </div>
  );
}
