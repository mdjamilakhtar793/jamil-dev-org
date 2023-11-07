/* eslint-disable jsx-a11y/anchor-has-content */
import React from "react";
import "./Portfolio.css";
import { data } from "../../data";
const Portfolio = () => {
  return (
    <section id="portfolio">
      <h5>My Recent Project</h5>
      <h2>Portfolio</h2>
      <div className="container container_portfolio">
        {data.map(({ id, image, title, techstack, desc, github, demo }) => (
          <article key={id} className="portfolio-item">
            <div className="portfolio-img">
              <img src={image} alt="" />
            </div>
            <h3>
              {title}
              <h5>
                {desc}
                <p>{techstack}</p>
              </h5>
            </h3>

            <div className="portfolio-item-cta">
              <a href={github} className="btn">
                GitHub
              </a>
              <a
                href={demo}
                className="btn btn-primary"
                target="_blank"
                rel="noreferrer"
              >
                Live Demo
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
