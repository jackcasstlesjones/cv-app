import "./cv-display.css";
import { useState } from "react";

export default function DisplayCV({ headerContent }) {
  return (
    <>
      <div className="container">
        <div className="cv-header">{headerContent}</div>
        <div className="cv-body">Body</div>
        <div className="cv-footer">Footer</div>
      </div>
    </>
  );
}
