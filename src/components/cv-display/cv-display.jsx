import "./cv-display.css";

export default function DisplayCV({ nameContent }) {
  return (
    <>
      <div className="cv-container">
        <div className="cv-header">
          <h1>{nameContent}</h1>
          <div className="email-phone-container">
            <p className="email-address"></p>
            <p className="phone-number"></p>
          </div>
        </div>
        <div className="cv-body">Body</div>
      </div>
    </>
  );
}
