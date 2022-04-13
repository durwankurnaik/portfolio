import React from "react";
import { BsTwitter, BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa";

const SocialMedia = () => {
  return (
    <div className="app__social">
      <div>
        <a
          href="https://twitter.com/NaikDurwankur"
          target="_blank"
          rel="noreferrer"
        >
          <BsTwitter />
        </a>
      </div>
      <div>
        <a
          href="https://www.linkedin.com/in/durwankur-naik-58301b203/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedinIn />
        </a>
      </div>
      <div>
        <a
          href="https://github.com/durwankurnaik"
          target="_blank"
          rel="noreferrer"
        >
          <BsGithub />
        </a>
      </div>
    </div>
  );
};

export default SocialMedia;
