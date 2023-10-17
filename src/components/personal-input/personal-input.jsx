import Buttons from "../input-buttons/buttons";
import "./personal-input.css";
import { useState } from "react";

export default function PersonalInputs({
  handlePersonalChange,
  personalDetailsData,
  setPersonalDetailsData,
}) {
  const [nameValue, setNameValue] = useState("");
  const [emailValue, setEmailValue] = useState("");
  const [phoneValue, setPhoneValue] = useState("");

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
        <h2>Personal Information</h2>
      </div>
      <form autoComplete="off" action="" className="form">
        <div className="form-pair">
          <label htmlFor="fullName">Full Name</label>
          <input
            className="text-input"
            type="text"
            name="fullName"
            id="fullName"
            value={!personalDetailsData.submitted ? nameValue : ""}
            onChange={(e) => {
              setNameValue(e.target.value);
              console.log(nameValue);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor="email">Email</label>
          <input
            className="text-input"
            type="text"
            name="email"
            id="email"
            value={!personalDetailsData.submitted ? emailValue : ""}
            onChange={(e) => {
              setEmailValue(e.target.value);
              console.log(emailValue);
            }}
          />
        </div>

        <div className="form-pair">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            className="text-input"
            type="text"
            name="phone-number"
            id="phone-number"
            value={!personalDetailsData.submitted ? phoneValue : ""}
            onChange={(e) => {
              setPhoneValue(e.target.value);
              console.log(phoneValue);
            }}
          />
        </div>
      </form>
      <Buttons
        valueOne={nameValue}
        valueTwo={emailValue}
        valueThree={phoneValue}
        handleDataChange={handlePersonalChange}
        dataOnParent={personalDetailsData}
        setParentData={setPersonalDetailsData}
      />
    </div>
  );
}
