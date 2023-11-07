/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./Navbar.css";
import { AiOutlineHome, AiOutlineUser } from "react-icons/ai";
import { BiBook } from "react-icons/bi";
import { RiServiceLine } from "react-icons/ri";
import { BiSolidContact } from "react-icons/bi";
import { RiFolder5Fill } from "react-icons/ri";
import { FaCommentAlt } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [active, setActive] = useState(false);
  return (
    <nav>
      <Link
        to="/"
        onClick={() => setActive("/")}
        className={active === "/" ? "active" : ""}
      >
        <a>
          <AiOutlineHome />
        </a>
      </Link>
      <Link
        to="/about"
        onClick={() => setActive("/about")}
        className={active === "/about" ? "active" : ""}
      >
        <a>
          <AiOutlineUser />
        </a>
      </Link>
      <Link
        to="/expercience"
        onClick={() => setActive("/expercience")}
        className={active === "/expercience" ? "active" : ""}
      >
        <a>
          <BiBook />
        </a>
      </Link>
      <Link
        to="/services"
        onClick={() => setActive("/services")}
        className={active === "/services" ? "active" : ""}
      >
        <a>
          <RiServiceLine />
        </a>
      </Link>
      <Link
        to="/portfolio"
        onClick={() => setActive("/portfolio")}
        className={active === "/portfolio" ? "active" : ""}
      >
        <a>
          <RiFolder5Fill />
        </a>
      </Link>

      <Link
        to="/testimonials"
        onClick={() => setActive("/testimonials")}
        className={active === "/testimonials" ? "active" : ""}
      >
        <a>
          <FaCommentAlt />
        </a>
      </Link>

      <Link
        to="/contact"
        onClick={() => setActive("/contact")}
        className={active === "/contact" ? "active" : ""}
      >
        <a>
          <BiSolidContact />
        </a>
      </Link>
    </nav>
  );
};

export default Navbar;
