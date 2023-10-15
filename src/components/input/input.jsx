import DisplayCV from "../cv-display/cv-display";
import "./input.css";

export default function Inputs() {
  const placeholder = "hell0o";
  return (
    <div className="input-field">
      <input type="text" name="" id="" placeholder={placeholder} />
      <input type="text" name="" id="" placeholder="hello" />
      <input type="text" name="" id="" placeholder="hello" />
      <button type="submit">Submit</button>
      <button type="">Edit</button>
    </div>
  );
}
