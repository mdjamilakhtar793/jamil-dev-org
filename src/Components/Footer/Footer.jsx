/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./Footer.css";
import { Link } from "react-router-dom";
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <footer>
      <Link to="/">
        <a href="" className="footer-logo">
          @mdjamilakhtar786
        </a>
      </Link>
      <ul className="permalinks">
        <li>
          <Link to="/">
            <a href="">Home</a>
          </Link>
        </li>
        <li>
          <Link to="/about">
            <a href="">About</a>
          </Link>
        </li>
        <li>
          <Link to="/expercience">
            <a href="">Experience</a>
          </Link>
        </li>
        <li>
          <Link to="/services">
            <a href="">Service</a>
          </Link>
        </li>
        <li>
          <Link to="/portfolio">
            <a href="">Projects</a>
          </Link>
        </li>

        <li>
          <Link to="/testimonials">
            <a href="">Testimonial</a>
          </Link>
        </li>

        <li>
          <Link to="/contact">
            <a href="">Contact</a>
          </Link>
        </li>
      </ul>
      <div className="social-footer">
        <a href="https://facebook.com">
          <FaFacebook />
        </a>
        <a href="https://instagram.com">
          <FaInstagram />
        </a>
        <a href="https://linkedin.com">
          <FaLinkedin />
        </a>
        <a href="https://twitter.com">
          <FaTwitter />
        </a>
      </div>
      <div className="footer-copyright">
        <small>&copy; Md Jamil Akhtar. All rights reserved.</small>
      </div>
    </footer>
  );
};

export default Footer;
