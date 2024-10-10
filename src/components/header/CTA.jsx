import React from "react";

const CTA = () => {
  return (
    <div className="cta">
      <a
        href="https://docs.google.com/document/d/1wkv7dNfodfobP9AjuQ2FosgmAkU0SewV/edit?usp=sharing&ouid=101114177116630609129&rtpof=true&sd=true"
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
