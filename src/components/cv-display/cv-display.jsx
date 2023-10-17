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
          <h1>{personalSubmitted ? fullName : null}</h1>
          <div className="email-phone-container">
            <p className="email-address">
              Email: {personalSubmitted ? email : null}
            </p>
            <p className="phone-number">
              Phone Number: {personalSubmitted ? phone : null}
            </p>
          </div>
        </div>
        <div className="cv-body">
          <h2>Education</h2>
          <p>University: {educationSubmitted ? university : null}</p>
          <p>Degree Title: {educationSubmitted ? degree : null}</p>
          <p>Dates Studied: {educationSubmitted ? dates : null}</p>
        </div>
      </div>
    </>
  );
}
