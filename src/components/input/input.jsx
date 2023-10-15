import DisplayCV from "../cv-display/cv-display";
import "./input.css";

export default function Inputs({ setHeadCont }) {
  const placeholder = "hell0o";

  const handleClick = (value) => {
    setHeadCont(value);
  };

  return (
    <div className="input-field">
      <input
        onChange={(e) => handleClick(e.target.value)}
        type="text"
        name=""
        id=""
        placeholder={placeholder}
      />
      <input type="text" name="" id="" placeholder="hello" />
      <input type="text" name="" id="" placeholder="hello" />
      <button type="submit">Submit</button>
      <button onClick={handleClick} type="">
        Edit
      </button>
    </div>
  );
}
