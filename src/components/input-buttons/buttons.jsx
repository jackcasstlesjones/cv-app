export default function Buttons({ nameValue, setNameContent }) {
  function onButtonClick() {
    console.log(nameValue);
    setNameContent(nameValue);
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
