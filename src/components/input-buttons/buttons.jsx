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
  setIsSubmitted,
}) {
  function onSubmitButtonClick() {
    handlePersonalChange(nameValue, emailValue, phoneValue);
    setIsSubmitted(true);
  }

  function onEditButtonClick() {
    setIsSubmitted(false);
    setNameValue(personalDetailsData.fullName);
    setEmailValue(personalDetailsData.email);
    setPhoneValue(personalDetailsData.phone);
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
