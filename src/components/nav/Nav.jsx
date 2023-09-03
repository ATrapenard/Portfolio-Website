import React from "react";
import "./nav.css";
import { AiTwotoneHome } from "react-icons/ai";
import { SiAboutdotme, SiExpress } from "react-icons/si";
import { IoIosGitNetwork } from "react-icons/io";
import { MdOutlineRoomService } from "react-icons/md";
import { GiLockedChest } from "react-icons/gi";
import { useState } from "react";

const Nav = () => {
  const [activeNav, setActiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setActiveNav("#")}
        className={activeNav === "#" ? "active" : ""}>
        <AiTwotoneHome size={20} />
      </a>
      <a
        href="#experience"
        onClick={() => setActiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}>
        <SiExpress size={20} />
      </a>
      <a
        href="#services"
        onClick={() => setActiveNav("#services")}
        className={activeNav === "#services" ? "active" : ""}>
        <MdOutlineRoomService size={20} />
      </a>
      <a
        href="#about"
        onClick={() => setActiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}>
        <SiAboutdotme size={20} />
      </a>
      <a
        href="#portfolio"
        onClick={() => setActiveNav("#portfolio")}
        className={activeNav === "#portfolio" ? "active" : ""}>
        <GiLockedChest size={20} />
      </a>
      <a
        href="#contact"
        onClick={() => setActiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}>
        <IoIosGitNetwork size={20} />
      </a>
    </nav>
  );
};

export default Nav;
