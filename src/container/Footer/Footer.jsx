import React, { useState } from "react";

import { images } from "../../constants";
import { AppWrap, MotionWrap } from "../../wrapper";
import { client } from "../../client";
import "./Footer.scss";

const Footer = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isFormSubmitted, setIsFormSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const { name, email, message } = formData;

  const handleChangeInput = (e) => {
    const { name, value } = e.target;

    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = () => {
    setLoading(true);

    const contact = {
      _type: "contact",
      name,
      email,
      message,
    };

    client.create(contact).then((data) => {
      setLoading(false);
      setIsFormSubmitted(true);
    });
  };

  return (
    <>
      <h2 className="head-text">Take a coffee & chat with me</h2>
      <div className="app__footer-cards">
        <div className="app__footer-card">
          <img src={images.email} alt="Email" />
          <a href="mailto:ndurwankur14@gmail.com" className="p-text">
            ndurwankur14@gmail.com
          </a>
        </div>

        <div className="app__footer-card">
          <img src={images.mobile} alt="Mobile" />
          <a href="tel: +918275775683" className="p-text">
            +918275775683
          </a>
        </div>
      </div>

      {!isFormSubmitted ? (
        <div className="app__footer-form app__flex">
          <div className="app__flex">
            <input
              type="text"
              className="p-text"
              placeholder="Your name"
              name="name"
              value={name}
              onChange={handleChangeInput}
            />
          </div>

          <div className="app__flex">
            <input
              type="email"
              className="p-text"
              placeholder="Your email"
              name="email"
              value={email}
              onChange={handleChangeInput}
            />
          </div>

          <div>
            <textarea
              className="p-text"
              placeholder="Your message"
              value={message}
              name="message"
              onChange={handleChangeInput}
            ></textarea>
          </div>

          <button className="p-text" onClick={handleSubmit}>
            {loading ? "Sending" : "Send Message"}
          </button>
        </div>
      ) : (
        <div className="head-text">Thank you for getting in touch</div>
      )}
    </>
  );
};

export default AppWrap(
  MotionWrap(Footer, "app__footer"),
  "contact",
);
