/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { Link } from "react-router-dom";
const Cja = () => {
  return (
    <div className="cta">
      <a
        href="mailto:mdjamilakhtar793@gmail.com"
        target="_blank"
        rel="noreferrer"
        className="btn"
      >
        Hire Me
      </a>

      <Link to="/contact">
        <a href="" className="btn btn-primary ">
          Let's Talk
        </a>
      </Link>
    </div>
  );
};

export default Cja;
