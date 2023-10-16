import "./cv-display.css";

export default function DisplayCV({ personalDetailsContent }) {
  const { fullName, email, phone } = personalDetailsContent;
  return (
    <>
      <div className="cv-container">
        <div className="cv-header">
          <h1>{fullName}</h1>
          <div className="email-phone-container">
            <p className="email-address">Email: {email}</p>
            <p className="phone-number">Phone Number: {phone}</p>
          </div>
        </div>
        <div className="cv-body">Body</div>
      </div>
    </>
  );
}
