import React from "react";
import AboutBackground from "../Assets/about-background.png";
import AboutBackgroundImage from "../Assets/wed.png";
import { BsFillPlayCircleFill } from "react-icons/bs";

const About = () => {
  return (
    <div className="about-section-container">
      <div className="about-background-image-container">
        <img src={AboutBackground} alt="" />
      </div>
      <div className="about-section-image-container">
        <img src={AboutBackgroundImage} alt="" />
      </div>
      <div className="about-section-text-container">
        <p className="primary-subheading"></p>
        <h1 className="primary-heading">
          Who are we?
        </h1>
        <p className="primary-text">
        We are a social media marketing agency dedicated to supporting the event planning industry by generating high-quality, ready-to-convert leads through strategic advertising on popular social media platforms. 
        </p>
        <p className="primary-text">
        Our focused, precise approach not only allows you to concentrate on your core work but also guarantees that your business expansion is fueled by genuinely interested clients, facilitating a seamless and efficient growth trajectory for your company.
        </p>
        
        <div className="about-buttons-container">
          <button className="secondary-button">Learn More</button>
          <button className="watch-video-button">
            <BsFillPlayCircleFill /> Watch Video
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
