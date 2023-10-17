import "./buttons.css";

export default function Buttons({
  valueOne,

  valueTwo,

  valueThree,

  handleDataChange,

  dataOnParent,

  setParentData,
}) {
  function onSubmitButtonClick() {
    if (valueOne === "") {
      return;
    }
    handleDataChange(valueOne, valueTwo, valueThree);

    setParentData((prevState) => ({
      ...prevState,
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
