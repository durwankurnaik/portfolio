import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";

import { images } from "../../constants";
import "./About.scss";

const abouts = [
  {
    title: "Web Development",
    description: "I am a good Web Developer",
    imgUrl: images.about01,
  },
  {
    title: "DevOps",
    description: "I am passionate about DevOps",
    imgUrl: images.about02,
  },
  {
    title: "Data Structures & Algorithms",
    description: "I am good at DSA and problem solving",
    imgUrl: images.about03,
  },
  {
    title: "Cyber Security",
    description: "I aspire to become a Cyber Security Engineer",
    imgUrl: images.about04,
  },
];

const About = () => {
  return (
    <>
      <h2 className="head-text">
        I Know That <span>Good Apps </span>
        <br />means <span>Good Business</span>
      </h2>

      <div className="app__profiles">
        {abouts.map((about, idx) => (
          <motion.div
            key={about.title + idx}
            whileInView={{ opacity: 1 }}
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.5, type: "tween" }}
            className="app__profiles-item"
          >
            <img src={about.imgUrl} alt={about.title} />
            <h2 className="bold-text" style={{ marginTop: 20 }}>
              {about.title}
            </h2>
            <p className="p-text" style={{ marginTop: 10 }}>
              {about.description}
            </p>
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default About;
