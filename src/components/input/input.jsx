import DisplayCV from "../cv-display/cv-display";
import "./input.css";

export default function Inputs({ setHeadCont, changeFunction, inputValue }) {
  const handleClick = (value) => {
    setHeadCont(inputValue);
  };

  return (
    <div className="input-field">
      <label htmlFor="cv-name">Name</label>
      <input
        onChange={changeFunction}
        type="text"
        name=""
        id="cv-name"
        placeholder="Joe Bloggs..."
      />
      <input type="text" name="" id="" placeholder="hello" />
      <input type="text" name="" id="" placeholder="hello" />
      <button onClick={handleClick} type="submit">
        Submit
      </button>
      <button onClick={handleClick} type="">
        Edit
      </button>
    </div>
  );
}
