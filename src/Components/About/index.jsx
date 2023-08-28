import React from 'react';
import Profile from '../../images/Profile.jpg';
import './style.css';

const About = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="image-about">
        <img src={Profile} alt="profilepicture" />
      </div>
      <div className="display-words text-white text-center md:text-left mt-8 md:mt-0 md:mr-16">
        <h1 className="text-white font-bold text-6xl md:text-8xl mt-4">About <span className="text-sky-400/100 text-6xl md:text-7xl mt-8 block">Me</span></h1>
        <span className="text-sky-400/100 text-xl md:text-2xl mt-8 block">Software Developer</span>
        <p className="text-white text-lg md:text-xl mt-8">
          As a software developer, I am fueled by a genuine passion for problem-solving and an unquenchable curiosity for mastering new technologies. With a solid foundation in programming and a commitment to continuous learning, I thrive on challenges that encourage growth. Through collaborative teamwork and a strong attention to detail, I am dedicated to crafting efficient and elegant solutions that contribute to the ever-evolving world of software development. My enthusiasm to contribute, coupled with my eagerness to learn from experienced professionals, drives me to continuously refine my skills and create meaningful contributions to innovative projects.
        </p>
      </div>
    </div>
  );
};

export default About;
