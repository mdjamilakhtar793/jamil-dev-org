import React from "react";
import "./Header.css";
import Cja from "./Cja";
import Me from "../../assets/images/me.png";
import SocialHeader from "./SocialHeader";
import { Link } from "react-router-dom";
import Typewriter from "typewriter-effect";
const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5>Hey I'm 👨‍💻👨‍💻</h5>
        <h1>Md Jamil Akhtar</h1>
        <h5 className="text-light">
          Full Stack Developer
          <p style={{ color: "blue", fontSize: "20px" }}>
            <Typewriter
              options={{
                strings: [
                  "A Developer",
                  "A Designer",
                  "Develop Productive Software",
                ],
                autoStart: true,
                loop: true,
                cursor: " ",
                wrapperClassName: "typewroyer",
              }}
            />
          </p>
        </h5>
        <Cja />
        <SocialHeader />
        <div className="me">
          <img src={Me} alt="" />
        </div>
        <Link to="/about">
          <a href="#about" className="scroll__down">
            Scroll Down
          </a>
        </Link>
      </div>
    </header>
  );
};

export default Header;
