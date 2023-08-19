import React from "react";
import "./footer.css";
import { BsFacebook } from "react-icons/bs";
import { AiFillInstagram } from "react-icons/ai";
import { BsTwitter, BsLinkedin } from "react-icons/bs";
import { DiGithubFull } from "react-icons/di";

const Footer = () => {
  return (
    <footer>
      <a href="#" className="footer__logo">
        ALAN TRAPENARD
      </a>
      <ul className="permalinks">
        <li>
          <a href="#">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#experience">Experience</a>
        </li>
        <li>
          <a href="#portfolio">Portfolio</a>
        </li>
        <li>
          <a href="#services">Services</a>
        </li>
        <li>
          <a href="#testimonials">Testimonials</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>

      <div className="footer__socials">
        <a href="https://facebook.com">
          <BsFacebook />
        </a>
        <a href="https://instagram.com">
          <AiFillInstagram />
        </a>
        <a href="https://twitter.com">
          <BsTwitter />
        </a>
        <a href="https://www.linkedin.com/in/alan-trapenard-790670199/">
          <BsLinkedin />
        </a>
        <a href="github.com/ATrapenard">
          <DiGithubFull />
        </a>
      </div>

      <div className="footer__copyright">
        <small>&copy; Alan Trapenard. All rights reserved. </small>
      </div>
    </footer>
  );
};

export default Footer;
