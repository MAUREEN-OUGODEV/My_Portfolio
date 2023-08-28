import React from 'react';
import Profile from '../../images/Profile.jpg';
import Wave from '../../images/wave.png';
import './style.css';

const Display = () => {
  return (
    <div className='Display-home'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4'>
        <div className='display-words text-white md:align-items-flex-start md:mt-48 md:ml-32 text-center md:text-left ml-8'>
          <div className='word'>
            <img className="h-8" src={Wave} alt="profilepicture" />
            <h1 className='text-white font-semibold text-4xl md:text-5xl mt-4'>Hello, It's Me</h1>
          </div>
          <h1 className='text-white font-bold text-7xl md:text-8xl mt-4'>Maureen Akinyi Ougo</h1>
          <h1 className="text-white text-4xl md:text-5xl mt-6">I am a <span className="text-sky-400/100 text-4xl md:text-5xl mt-4 block">Software Developer</span></h1>
          <p className='mt-6 md:text-lg lg:text-xl'>A dedicated software developer with a passion for crafting elegant and efficient solutions. Through a blend of creativity and technical prowess, I transform complex challenges into streamlined software applications.</p>
          <div className="mt-6 md:mt-8">
            <a href="https://github.com/MAUREEN-OUGODEV" className="mr-6 text-4xl md:text-5xl text-teal-400">
              <i className="bi bi-github"></i>
            </a>
            <a href="https://github.com/MAUREEN-OUGODEV" className="mr-6 text-4xl md:text-5xl text-teal-400">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="https://twitter.com/maureen_ou45643" className="text-4xl md:text-5xl text-teal-400">
              <i className="bi bi-twitter"></i>
            </a>
          </div>
          <div className='mt-6 md:mt-8'>
            <a href="https://www.figma.com/proto/wHzoja6spLF732COLeeZsS/Untitled?type=design&node-id=121-3&t=tIYefQKHmaNxaL8S-0&scaling=min-zoom&page-id=0%3A1">
              <button className="rounded-lg bg-sky-500/75 p-4 md:p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 rounded-full">Download CV</button>
            </a>
          </div>
        </div>
        <div className="image">
          <img src={Profile} alt="profilepicture" />
        </div>
      </div>
    </div>
  );
};

export default Display;
