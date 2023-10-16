import Buttons from "../input-buttons/buttons";
import "./input.css";
import { useState } from "react";

export default function Inputs({
  title,
  firstField,
  secondField,
  thirdField,
  handlePersonalChange,
}) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

  return (
    <div className="input-container">
      <h2>{title}</h2>
      <form autoComplete="off" action="" className="form">
        <div className="form-pair">
          <label htmlFor={firstField}>{firstField}</label>
          <input
            className="text-input"
            type="text"
            name={firstField}
            id={firstField}
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
            onChange={(e) => {
              setPhoneValue(e.target.value);
              console.log(phoneValue);
            }}
          />
        </div>
      </form>
      <Buttons
        nameValue={nameValue}
        emailValue={emailValue}
        phoneValue={phoneValue}
        handlePersonalChange={handlePersonalChange}
      />
    </div>
  );
}
