import "./buttons.css";

export default function Buttons({
  nameValue,
  setNameValue,
  emailValue,
  setEmailValue,
  phoneValue,
  setPhoneValue,
  handlePersonalChange,
  personalDetailsData,
}) {
  function onSubmitButtonClick() {
    console.log(nameValue);
    handlePersonalChange(nameValue, emailValue, phoneValue);
    setNameValue("");
    setEmailValue("");
    setPhoneValue("");
  }

  function onEditButtonClick() {
    setNameValue(personalDetailsData.fullName);
    setEmailValue(personalDetailsData.email);
    setPhoneValue(personalDetailsData.phone);
    handlePersonalChange("", "", "");
  }

  return (
    <div className="button-container">
      <button onClick={onEditButtonClick} className="form-button">
        Edit
      </button>
      <button onClick={onSubmitButtonClick} className="form-button">
        Submit
      </button>
    </div>
  );
}
