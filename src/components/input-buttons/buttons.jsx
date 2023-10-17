import "./buttons.css";

export default function Buttons({
  valueOne,
  setValueOne,
  valueTwo,
  setValueTwo,
  valueThree,
  setValueThree,
  handlePersonalChange,
  dataOnCV,
  setIsSubmitted,
}) {
  function onSubmitButtonClick() {
    if (valueOne === "") {
      return;
    }
    handlePersonalChange(valueOne, valueTwo, valueThree);
    setIsSubmitted(true);
  }

  function onEditButtonClick() {
    setIsSubmitted(false);
    setValueOne(dataOnCV.fullName);
    setValueTwo(dataOnCV.email);
    setValueThree(dataOnCV.phone);
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
