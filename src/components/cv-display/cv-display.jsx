import "./cv-display.css";

export default function DisplayCV({ personalDetailsContent, isSubmitted }) {
  const { fullName, email, phone } = personalDetailsContent;
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
        <div className="cv-body">Body</div>
      </div>
    </>
  );
}
