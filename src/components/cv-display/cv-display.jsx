import "./cv-display.css";

export default function DisplayCV({
  personalDetailsContent,

  educationDetailsContent,

  workDetailsContent,
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

  const {
    company,
    job,
    datesWorked,
    submitted: workSubmitted,
  } = workDetailsContent;

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
          <h2>Work Experience</h2>
          <p>Company Name: {workSubmitted ? company : null}</p>
          <p>Job Title: {workSubmitted ? job : null}</p>
          <p>Dates Worked: {workSubmitted ? datesWorked : null}</p>
          <p></p>
          <p></p>
        </div>
      </div>
    </>
  );
}
