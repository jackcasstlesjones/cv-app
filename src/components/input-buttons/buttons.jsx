import "./buttons.css";

export default function Buttons({
  valueOne,
  setValueOne,
  valueTwo,
  setValueTwo,
  valueThree,
  setValueThree,
  handleDataChange,
  dataOnCV,
  setIsSubmitted,
  subValueOne,
  subValueTwo,
  subValueThree,
}) {
  function onSubmitButtonClick() {
    if (valueOne === "") {
      return;
    }
    handleDataChange(valueOne, valueTwo, valueThree);
    setIsSubmitted(true);
  }

  function onEditButtonClick() {
    setIsSubmitted(false);
    // setValueOne(dataOnCV[subValueOne]);
    // setValueTwo(dataOnCV[subValueTwo]);
    // setValueThree(dataOnCV[subValueThree]);
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
