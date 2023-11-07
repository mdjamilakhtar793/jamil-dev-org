import React from "react";
import "./Services.css";
import { BiCheck } from "react-icons/bi";
const Services = () => {
  return (
    <section id="services">
      <h5>What i Offer</h5>
      <h2>Services</h2>
      <div className="container services__container">
        <article className="service">
          <div className="servicehead">
            <h3>UI/UX Design</h3>
          </div>
          <ul className="servicelist">
            <li>
              <BiCheck className="service-icon" />
              <p>
                Identify target user groups and carry out interviews or other
                types of inquiry to help understand user needs
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Ensure the creation and implementation of customized experiences
                for the digital user
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Produce high-quality solutions through flow diagrams, graphic
                designs, storyboards and site maps
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Provide guidance on the implementation of UX research techniques
                and testing activities to assess user behavior
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Maintain a competitive edge against competitor products and
                industry trends
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Perform tests on user interface elements such as CTAs, layouts,
                target links, landing pages and banners
              </p>
            </li>
          </ul>
        </article>
        {/* End UIUX */}
        <article className="service">
          <div className="servicehead">
            <h3>Software Development</h3>
          </div>
          <ul className="servicelist">
            <li>
              <BiCheck className="service-icon" />
              <p>
                Developing and maintaining Mobile applications and Web Websites
                Using Tranding technologies.
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Collaborating with cross-functional to create high-quality ,
                Scalablity, Flexibility,Featuristics products.
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Implementing responsive design and ensuring cross-browser
                compatibility to All Devices.
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Our Goal is Build Productive Software according to the clients
                Requirements.
              </p>
            </li>

            <li>
              <BiCheck className="service-icon" />
              <p>
                web development providers due to its wide range of highly
                beneficial service,
              </p>
            </li>

            <li>
              <BiCheck className="service-icon" />
              <p>
                Web Development is the most important one which includes web
                design, client liaison, web Development.
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Software Devlopement :- Planning , Analysis , Development ,
                Testing , Release , Maintenance.
              </p>
            </li>
          </ul>
        </article>
        {/* End WDD */}
        <article className="service">
          <div className="servicehead">
            <h3>Graphic Designer</h3>
          </div>
          <ul className="servicelist">
            <li>
              <BiCheck className="service-icon" />
              <p>
                Designing logos, illustrations, packaging visuals, book covers
                and magazine copy
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Understanding the design process and creating representations
                that match the project's tone
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Dolores, omnis.
              </p>
            </li>
            <li>
              <BiCheck className="service-icon" />
              <p>
                Collaborating with copywriters and developers regarding the
                design process
              </p>
            </li>
          </ul>
        </article>
      </div>
    </section>
  );
};

export default Services;
