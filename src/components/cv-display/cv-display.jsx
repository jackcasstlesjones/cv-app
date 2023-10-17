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
          <p>{isSubmitted ? university : ""}</p>
          <p>{isSubmitted ? degree : ""}</p>
          <p>{isSubmitted ? dates : ""}</p>
        </div>
      </div>
    </>
  );
}
