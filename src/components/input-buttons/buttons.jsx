export default function Buttons({
  nameValue,
  emailValue,
  phoneValue,
  handlePersonalChange,
}) {
  function onButtonClick() {
    console.log(nameValue);
    handlePersonalChange(nameValue, emailValue, phoneValue);
  }
  return (
    <div className="button-container">
      <button className="form-button">Edit</button>
      <button onClick={onButtonClick} className="form-button">
        Submit
      </button>
    </div>
  );
}
