import React from 'react';
import Profile from '../../images/Profile.jpg';
import Wave from '../../images/wave.png';
import './style.css';



const Display=()=>{
    return(
        <div className='Display-home'>
        <div className='grid grid-cols-2 gp-4'>
            <div className='display-words text-white align-items: flex-start mt-48 ml-32 text-left ml-8'>
              <div className='word'>
               <img className="h-8" src={Wave} alt="profilepicture" />
               <h1 className='text-white font-semibold text-4xl flex-start '> Hello,It's Me  </h1>
                
               </div>
                <h1 className='text-white  font-bold text-7xl mt-4' >Maureen Akinyi Ougo</h1>
                <h1 className="text-white text-4xl mt-8">I am a <span className="text-sky-400/100 text-4xl mt-8">Software Developer</span></h1>
                <p className='mt-8'>A dedicated software developer with a passion for crafting elegant and efficient solutions. Through a blend of 
                creativity and technical prowess,
                 I transform complex challenges into streamlined software applications. </p>
                 <div className="mt-8 ml-32">
                 <a href="https://github.com/MAUREEN-OUGODEV" className="mr-8 text-6xl text-teal-400">
                  <i className="bi bi-github"></i>
                  </a>
                 <a href="https://github.com/MAUREEN-OUGODEV" className="mr-8 text-6xl text-teal-400">
                 <i className="bi bi-linkedin"></i>
                  </a>
                 <a href="https://twitter.com/maureen_ou45643" className="text-6xl text-teal-400">
                    <i className="bi bi-twitter"></i>
                       </a>
                       </div>

                 <div className='mt-16 ml-16'>
                    <a href="https://www.figma.com/proto/wHzoja6spLF732COLeeZsS/Untitled?type=design&node-id=121-3&t=tIYefQKHmaNxaL8S-0&scaling=min-zoom&page-id=0%3A1">
                    <button className="rounded-lg bg-sky-500/75 p-5 bg-cyan-500 shadow-lg shadow-cyan-500/50  rounded-full ">DownLoad CV</button>

                    </a>
                   

                 </div>
                    

            </div>
            <div  className="image">
                <img src={Profile} alt="profilepicture" />

            </div>

        </div>


    </div>
    )

}
export default Display;