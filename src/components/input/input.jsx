import Buttons from "../input-buttons/buttons";
import "./input.css";
import { useState } from "react";

export default function Inputs({
  title,
  firstField,
  secondField,
  thirdField,
  setHeaderContent,
}) {
  const [nameValue, setNameValue] = useState("");

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
          />
        </div>

        <div className="form-pair">
          <label htmlFor={thirdField}>{thirdField}</label>
          <input
            className="text-input"
            type="text"
            name={thirdField}
            id={thirdField}
          />
        </div>
      </form>
      <Buttons nameValue={nameValue} setHeaderContent={setHeaderContent} />
    </div>
  );
}
