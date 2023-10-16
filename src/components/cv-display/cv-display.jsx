import "./cv-display.css";

export default function DisplayCV({ headerContent }) {
  return (
    <>
      <div className="cv-container">
        <div className="cv-header">
          <h1>{headerContent.name}</h1>
          <div className="email-phone-container">
            <p className="email-address">{headerContent.email}</p>
            <p className="phone-number">{headerContent.phone}</p>
          </div>
        </div>
        <div className="cv-body">Body</div>
      </div>
    </>
  );
}
