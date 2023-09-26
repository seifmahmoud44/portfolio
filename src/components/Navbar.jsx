import React, { useState } from "react";
import { AiFillLinkedin } from "react-icons/ai";
import { AiFillGithub } from "react-icons/ai";
import { NavLink } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { AiOutlineClose } from "react-icons/ai";
import { ImWhatsapp } from "react-icons/im";

const Navbar = () => {
  const [oMenu, setOMenu] = useState(false);
  const open = () => {
    setOMenu(!oMenu);
  };
  return (
    <div className="navbar">
      <h1 className="logo">
        SEIF<span>ELDEEN</span>
      </h1>
      <ul className="social">
        <li>
          <a
            href="https://www.linkedin.com/in/seifmahmoud97/"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillLinkedin />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/seifmahmoud44"
            target="_blank"
            rel="noreferrer"
          >
            <AiFillGithub />
          </a>
        </li>
        <li>
          <a
            href="https://wa.me/+201024404781"
            target="_blank"
            rel="noreferrer"
          >
            <ImWhatsapp />
          </a>
        </li>
      </ul>
      <div className="links">
        <NavLink to={"/"}>Home</NavLink>
        <NavLink to={"/about"}>About</NavLink>
        <NavLink to={"/projects"}>Projects</NavLink>
        <NavLink to={"/contact"}>Contact</NavLink>
      </div>

      {!oMenu ? (
        <RxHamburgerMenu className="toggel" onClick={open} />
      ) : (
        <AiOutlineClose className="toggel" onClick={open} />
      )}
      <div className={oMenu ? "menu active" : "menu"}>
        <AiOutlineClose onClick={open} className="toggel-btn" />
        <div className="menu-item">
          <NavLink to={"/"} onClick={() => setOMenu(false)}>
            Home
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to={"/about"} onClick={() => setOMenu(false)}>
            About
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to={"/projects"} onClick={() => setOMenu(false)}>
            Projects
          </NavLink>
        </div>
        <div className="menu-item">
          <NavLink to={"/contact"} onClick={() => setOMenu(false)}>
            Contact
          </NavLink>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
