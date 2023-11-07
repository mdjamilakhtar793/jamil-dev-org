/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import "./About.css";
import Me from "../../assets/images/about_me.jpg";
import { FaAward } from "react-icons/fa";
import { FiUser } from "react-icons/fi";
import { VscFolderLibrary } from "react-icons/vsc";
import { Link } from "react-router-dom";
const About = () => {
  return (
    <section id="about">
      <h5>Get To Know</h5>
      <h2>About Me</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={Me} alt="About Images" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__carts">
            <article className="about__cart">
              <FaAward className="about__icon" />
              <h5>Expercience</h5>
              <small>0+ Year Working</small>
            </article>

            <article className="about__cart">
              <FiUser className="about__icon" />
              <h5>Clients</h5>
              <small>0+ Worldwide</small>
            </article>

            <article className="about__cart">
              <VscFolderLibrary className="about__icon" />
              <h5>Project</h5>
              <small>3+Completed</small>
            </article>
          </div>
          <p>
            I'm a Skilled Software developer with JavaScript,Java,MySql and
            Expertise in Frameworks like ReactJs,NextJs, NodeJs,Express,
            MongoDb. I'm a quick Learner and collaborate closely with clients to
            create Efficient , Scalable and user-friendly solution that solve
            real-world problems. Let's together to bring your Idea's to Life.{" "}
          </p>
          <Link to="/contact">
            <a className="btn btn-primary"> Let's Talk</a>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default About;
