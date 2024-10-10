import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="../../assets/Resume.pdf"
        target="_blank"
        download
        className="btn btn-download">
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
