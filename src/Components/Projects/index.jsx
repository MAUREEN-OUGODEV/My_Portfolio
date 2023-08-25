// Project.js
import React from 'react';
import Dread from '../../images/Dread_Palour.png';
import Food from '../../images/FoodFiesta.png';
import Movie from '../../images/movie_app.png';
import Score from '../../images/scoreboard.png';
import Ting from '../../images/TingTang.png';
import Doctor from '../../images/doctor.png'
import './style.css';

const Project = () => {
  return (
    <div className='project-container'>
      <h1 className='text-white font-bold text-7xl mt-4'>
        My <span className="text-sky-400/100 text-7xl mt-8">Projects</span>
      </h1>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">

        {/* Repeat this block for each project */}
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Ting} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Harvest Your Dreams: Discover a World of Agricultural Excellence with Our 
            Ecommerce Platform! Explore the Finest Seeds,
             Tools, and Expertise to Cultivate Your Success."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Farm_project'>
            <div className='project-description'>
              {/* ... */}
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Dread} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Embrace Your Unique Style at Our Dreadlocks Parlour! Unleash Your Authenticity with Expert Care
             and Craftsmanship for Your Dreads."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Farm_project'>
            <div className='project-description'>
              
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Food} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Fuel Your Innovation with Flavors: Join the Ultimate Hackathon E-Commerce Food Festival!
             Unleash Culinary Creativity and Tech Brilliance to Redefine the Future of Food."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Farm_project'>
            <div className='project-description'>
              
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Movie} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Dive into a World of Emotion and Imagination: Experience the Magic of Cinema with Our Handpicked Selection of Movies. 
            From Heartwarming Stories to Pulse-Pounding Action, There's Something for Every Film Enthusiast."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Farm_project'>
            <div className='project-description'>
          
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Score} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Stay Ahead of the Game with Real-time Insights: Check Out Our Interactive Scoreboard for the Latest Updates, Statistics, and Results.
             Your Ultimate Destination for Staying Informed and Engaged!"</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Farm_project'>
            <div className='project-description'>
             
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Doctor} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Stay Ahead of the Game with Real-time Insights: Check Out Our Interactive Scoreboard for the Latest Updates, Statistics, and Results.
             Your Ultimate Destination for Staying Informed and Engaged!"</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Demensia'>
            <div className='project-description'>
             
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Project;
