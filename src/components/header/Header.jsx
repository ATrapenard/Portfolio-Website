import React from "react";
import "./header.css";
import CTA from "./CTA";
import ME from "../../assets/portfolio_pic.jpg";
import HeaderSocials from "./HeaderSocials";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Alan Trapenard</h1>
        <h5 className="text-light">
          Machine Learning Engineer/Frontend Developer
        </h5>
        <CTA />
        <div className="header__bio">
          <div className="me">
            <img src={ME} alt="me" />
          </div>
          <div className="header__bio-content">
            <h2>
              I'm a San Diego-based Frontend Developer specializing in building
              responsive, user-friendly interfaces using modern JavaScript
              frameworks like React. I focus on creating visually engaging and
              efficient web applications, translating business needs into
              seamless user experiences through clean, maintainable code and
              attention to design details.
            </h2>
          </div>
        </div>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
