import React from 'react';
import Profile from '../../images/Profile.jpg';
import './style.css'

const About =()=>{
    return(
        <div className="grid grid-cols-2 gap-4">
  <div  className="image-about">
                <img src={Profile} alt="profilepicture" />

            </div>
  <div className=" display-words text-white align-items: flex-start  text-left mr-16 mt-8">
    <h1 className='text-white  font-bold text-8xl mt-4'>About <span className="text-sky-400/100 text-7xl mt-8">Me</span> </h1>
    <span className="text-sky-400/100 text-2xl mt-8">Software Developer</span>
    <p className='text-white text-xl'>As a software developer, I am fueled by a genuine passion for problem-solving and an 
        unquenchable curiosity for mastering new technologies. With a solid foundation in programming and a 
        commitment to continuous learning, I thrive on challenges that encourage growth. Through collaborative teamwork and 
        a strong attention to detail, I am dedicated to crafting efficient and elegant solutions that contribute 
        to the ever-evolving world of software development. My enthusiasm to contribute, coupled with my eagerness to learn 
        from experienced professionals, drives me to continuously 
        refine my skills and create meaningful contributions to innovative projects.</p>
  </div>
</div>
    )
}
export default About;