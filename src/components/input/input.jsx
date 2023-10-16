import DisplayCV from "../cv-display/cv-display";
import "./input.css";

export default function Inputs({ title, setHeadCont, handleHeaderChange }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleClick = (e) => {
    e.preventDefault();
    setHeadCont(inputValue);
  };

  return (
    <div className="input-container">
      <h2>{title}</h2>
      <form autoComplete="off" action="" className="form">
        <div className="form-pair">
          <label htmlFor="cv-name">Full Name</label>
          <input
            className="text-input"
            onChange={handleInputChange}
            type="text"
            name=""
            id="cv-name"
            placeholder="Joe Bloggs..."
          />
        </div>

        <div className="form-pair">
          <label htmlFor="email">Email Address</label>
          <input
            className="text-input"
            type="text"
            name=""
            id=""
            placeholder="hello"
          />
        </div>

        <div className="form-pair">
          <label htmlFor="phone-number">Phone Number</label>
          <input
            className="text-input"
            type="text"
            name=""
            id=""
            placeholder="hello"
          />
        </div>
        <div className="button-container">
          <button className="form-button" onClick={handleClick}>
            Edit
          </button>
          <button className="form-button" onClick={handleHeaderChange}>
            Submit
          </button>
        </div>
      </form>
    </div>
  );
}
