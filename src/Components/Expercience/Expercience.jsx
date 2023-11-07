import React from "react";
import "./Expercience.css";
import { BsGithub } from "react-icons/bs";
import { BiLogoHtml5, BiLogoCss3 } from "react-icons/bi";
import {
  SiTailwindcss,
  SiGuilded,
  SiRedux,
  SiMongodb,
  SiExpress,
  SiMysql,
} from "react-icons/si";
import { RiJavascriptFill } from "react-icons/ri";
import { FaReact, FaJava, FaNodeJs } from "react-icons/fa";
import { TbBrandVscode } from "react-icons/tb";

const Expercience = () => {
  return (
    <section id="expercience">
      <h5>What Skills I Have</h5>
      <h2>My Project Expercience</h2>
      <div className="container expercience__container">
        <div className="expercience__frontend">
          <h3>Frontend Development</h3>
          <div className="expercience__content">
            <article className="expercience__details">
              <BiLogoHtml5 className="expercience_icons" />
              <div>
                <h4>HTML</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expercience__details">
              <BiLogoCss3 className="expercience_icons" />
              <div>
                <h4>CSS</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expercience__details">
              <RiJavascriptFill className="expercience_icons" />
              <div>
                <h4>JavaScript</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expercience__details">
              <SiGuilded className="expercience_icons" />
              <div>
                <h4>Material-UI</h4>
                <small className="text-light">Beginners</small>
              </div>
            </article>
            <article className="expercience__details">
              <SiTailwindcss className="expercience_icons" />
              <div>
                <h4>Tailwind CSS</h4>
                <small className="text-light">Beginners</small>
              </div>
            </article>
            <article className="expercience__details">
              <FaReact className="expercience_icons" />
              <div>
                <h4>ReactJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>

            <article className="expercience__details">
              <SiRedux className="expercience_icons" />
              <div>
                <h4>React-Redux/Toolkit</h4>
                <small className="text-light">Beginners</small>
              </div>
            </article>

            <article className="expercience__details">
              <FaJava className="expercience_icons" />
              <div>
                <h4>Core Java + DSA</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
        <div className="expercience__backend">
          <h3>Backend Development</h3>
          <div className="expercience__content">
            <article className="expercience__details">
              <FaNodeJs className="expercience_icons" />
              <div>
                <h4>NodeJs</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expercience__details">
              <SiExpress className="expercience_icons" />
              <div>
                <h4>Express</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expercience__details">
              <SiMongodb className="expercience_icons" />
              <div>
                <h4>MongoDB</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
            <article className="expercience__details">
              <SiMysql className="expercience_icons" />
              <div>
                <h4>MySql</h4>
                <small className="text-light">Beginners</small>
              </div>
            </article>
            <article className="expercience__details">
              <BsGithub className="expercience_icons" />
              <div>
                <h4>GitHub</h4>
                <small className="text-light">Beginners</small>
              </div>
            </article>

            <article className="expercience__details">
              <TbBrandVscode className="expercience_icons" />
              <div>
                <h4>VsCode</h4>
                <small className="text-light">Intermediate</small>
              </div>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Expercience;
