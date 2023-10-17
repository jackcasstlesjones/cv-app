import "./cv-display.css";

export default function DisplayCV({
  personalDetailsContent,
  isSubmitted,
  educationDetailsContent,
}) {
  const { fullName, email, phone } = personalDetailsContent;
  const { university, degree, dates } = educationDetailsContent;
  return (
    <>
      <div className="cv-container">
        <div className="cv-header">
          <h1>{isSubmitted ? fullName : ""}</h1>
          <div className="email-phone-container">
            <p className="email-address">Email: {isSubmitted ? email : ""}</p>
            <p className="phone-number">
              Phone Number: {isSubmitted ? phone : ""}
            </p>
          </div>
        </div>
        <div className="cv-body">
          <h2>Education</h2>
          <p>University: {isSubmitted ? university : ""}</p>
          <p>Degree Title: {isSubmitted ? degree : ""}</p>
          <p>Dates Studied: {isSubmitted ? dates : ""}</p>
        </div>
      </div>
    </>
  );
}
