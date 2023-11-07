/* eslint-disable react/jsx-no-target-blank */
import React from "react";
import { BsLinkedin, BsGithub, BsTwitter, BsWhatsapp } from "react-icons/bs";

const SocialHeader = () => {
  return (
    <div className="header__social">
      <a href="https://www.linkedin.com/in/mdjamilakhtar786/" target="_blank">
        <BsLinkedin />
      </a>
      <a href="https://github.com/mdjamilakhtar793" target="_blank">
        <BsGithub />
      </a>
      <a
        href="https://api.whatsapp.com/send?phone=917033246878"
        target="_blank"
        rel="noreferrer"
      >
        <BsWhatsapp />
      </a>
      <a href="https://twitter.com" target="_blank">
        <BsTwitter />
      </a>
    </div>
  );
};

export default SocialHeader;
