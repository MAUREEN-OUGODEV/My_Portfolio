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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

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
            <div className="hover-text">"Elevate your identity with "DreadLocks Palour": where skilled artisans craft dreadlocks
             that celebrate your unique story, merging cultural heritage and individuality into a masterpiece of self-expression."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/DreadLocks-_palour'>
            <div className='project-description'>
            
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Food} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Welcome to Food Fiesta – a tantalizing voyage for your taste buds! Indulge in a symphony 
            of flavors and aromas as we curate a culinary extravaganza that transcends borders.
             Join us in savoring the world on a plate, where every dish tells a story and every bite is a passport to a new culinary adventure."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/FoodieFiesta'>
            <div className='project-description'>
              
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Movie} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Dive into the Cinematic Universe: Your Ultimate Movie Destination. 
            Trailers, showtimes, and more – experience the magic today!"</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Movie_App_Project'>
            <div className='project-description'>
              {/* ... */}
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Score} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"Stay Ahead with our Scoreboard: Real-time Updates, Unmissable Moments. Your hub for live scores, stats, and game-changing plays."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/scoreBoard'>
            <div className='project-description'>
            
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        <div className="project-card p-4">
          <div className="Project_img">
            <img src={Doctor} className="rounded-lg h-80 w-90 object-cover" alt='' />
            <div className="hover-text">"The website is a compassionate resource providing information, support, and hope for individuals and families dealing with dementia. Together, we illuminate the path forward."</div>
          </div>
          <a href='https://github.com/MAUREEN-OUGODEV/Demensia'>
            <div className='project-description'>
              {/* ... */}
            </div>
            <button className="rounded-full bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50 mt-8 rounded-full text-white">Read more</button>
          </a>
        </div>
        
      </div>
    </div>
  );
}

export default Project;





