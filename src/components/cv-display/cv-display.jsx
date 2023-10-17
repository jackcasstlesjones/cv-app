import "./cv-display.css";

export default function DisplayCV({
  personalDetailsContent,
  isSubmitted,
  educationDetailsContent,
}) {
  const {
    fullName,
    email,
    phone,
    submitted: personalSubmitted,
  } = personalDetailsContent;
  const {
    university,
    degree,
    dates,
    submitted: educationSubmitted,
  } = educationDetailsContent;
  return (
    <>
      <div className="cv-container">
        <div className="cv-header">
          <h1>{personalSubmitted ? fullName : ""}</h1>
          <div className="email-phone-container">
            <p className="email-address">
              Email: {personalSubmitted ? email : ""}
            </p>
            <p className="phone-number">
              Phone Number: {personalSubmitted ? phone : ""}
            </p>
          </div>
        </div>
        <div className="cv-body">
          <h2>Education</h2>
          <p>University: {educationSubmitted ? university : ""}</p>
          <p>Degree Title: {educationSubmitted ? degree : ""}</p>
          <p>Dates Studied: {educationSubmitted ? dates : ""}</p>
        </div>
      </div>
    </>
  );
}
