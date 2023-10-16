export default function Buttons({ nameValue, setHeaderContent }) {
  function onButtonClick() {
    console.log(nameValue);
    setHeaderContent(nameValue);
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
