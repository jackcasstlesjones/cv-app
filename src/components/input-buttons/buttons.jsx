export default function Buttons({ inputValue, setHeaderContent }) {
  function onButtonClick() {
    console.log(inputValue);
    setHeaderContent(inputValue);
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
