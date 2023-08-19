import React from "react";
import CV from "../../assets/CV.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn btn-download">
        Download CV
      </a>
      <a
        href="#contact"
        className="btn btn-primary"
        style={{ background: "#d83f87" }}>
        Contact Me!
      </a>
    </div>
  );
};

export default CTA;
