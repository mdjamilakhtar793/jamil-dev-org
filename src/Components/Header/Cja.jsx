/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import CV from "../../assets/images/cv.pdf";
import { Link } from "react-router-dom";
const Cja = () => {
  return (
    <div className="cta">
      <a href={CV} download className="btn">
        Resume
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
