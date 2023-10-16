import Inputs from "../input/input";
import "./sidebar.css";

export default function Sidebar({ setNameContent }) {
  class Details {
    constructor(title, firstField, secondField, thirdField) {
      this.title = title;
      this.firstField = firstField;
      this.secondField = secondField;
      this.thirdField = thirdField;
    }
  }

  const personalDetailsInput = new Details(
    "Personal Details",
    "Full Name",
    "Email Address",
    "Phone Number"
  );
  const educationDetailsInput = new Details(
    "Education",
    "University",
    "Degree",
    "Dates Studied"
  );

  const workDetailsInput = new Details(
    "Work Experience",
    "Job Title",
    "Company Name",
    "Dates Worked"
  );

  return (
    <>
      <div className="sidebar">
        <Inputs {...personalDetailsInput} setNameContent={setNameContent} />

        <Inputs {...educationDetailsInput} />

        <Inputs {...workDetailsInput} />
      </div>
    </>
  );
}
