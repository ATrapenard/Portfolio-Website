import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { DiGithubFull } from "react-icons/di";
import { FaInstagramSquare } from "react-icons/fa";

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        style={{ color: "white" }}
        href="https://www.linkedin.com/in/alan-trapenard-790670199/"
        target="_blank">
        <BsLinkedin />
      </a>
      <a
        style={{ color: "white" }}
        href="https://github.com/ATrapenard"
        target="_blank">
        <DiGithubFull />
      </a>
      <a
        style={{ color: "white" }}
        href="https://instagram.com/alan.trapezoid/"
        target="blank">
        <FaInstagramSquare />
      </a>
    </div>
  );
};

export default HeaderSocials;
