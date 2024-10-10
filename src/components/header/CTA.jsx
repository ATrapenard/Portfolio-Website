import React from "react";
import Resume from "../../assets/Resume.pdf";

const CTA = () => {
  return (
    <div className="cta">
      <a href={Resume} target="_blank" className="btn btn-download">
        My Resume
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
