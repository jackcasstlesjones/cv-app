import "./cv-display.css";

export default function DisplayCV({ headerContent }) {
  return (
    <>
      <div className="cv-container">
        <div className="cv-header">{headerContent}</div>
        <div className="cv-body">Body</div>
      </div>
    </>
  );
}
