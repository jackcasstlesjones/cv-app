import "./buttons.css";

export default function Buttons({
  valueOne,

  valueTwo,

  valueThree,

  handleDataChange,

  dataOnParent,

  setParentData,

  keyOne,
  keyTwo,
  keyThree,
}) {
  function onSubmitButtonClick() {
    if (valueOne === "") {
      return;
    }
    handleDataChange(valueOne, valueTwo, valueThree);

    setParentData((prevState) => ({
      [keyOne]: valueOne,
      [keyTwo]: valueTwo,
      [keyThree]: valueThree,
      submitted: true,
    }));

    console.log(dataOnParent);
  }

  function onEditButtonClick() {
    setParentData((prevState) => ({
      ...prevState,
      submitted: false,
    }));
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
