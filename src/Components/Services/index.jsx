import React from 'react';

const Services = () => {
  return (
    <div className='services'>
      <h1 className='text-white font-bold text-5xl md:text-7xl mt-8 md:mt-16'>My <span className="text-sky-400/100 text-5xl md:text-6xl mt-8 block">Skills</span></h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:m-16 text-white rounded-md">
        <div className="bg-slate-800 p-4 bg-blur flex flex-col items-center justify-center">
          <i className="bi bi-filetype-jsx text-6xl md:text-8xl mb-4 text-teal-400"></i>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Front-End Development</h1>
          <p className="text-sm md:text-base">
            User-centered applications and websites, leveraging React and Next.js for dynamic interfaces.
            This includes optimizing design workflows with Bootstrap's components and responsive layouts, and Tailwind CSS's utility-based styling.
            This synergy delivers engaging, responsive user experiences across various platforms.
          </p>
        </div>
        <div className="bg-slate-800 p-4 bg-blur flex flex-col items-center justify-center">
          <i className="bi bi-filetype-py text-6xl md:text-8xl mb-4 text-teal-400"></i>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Back-End Development</h1>
          <p className="text-sm md:text-base">
            Backend development utilizes Django framework to establish robust application bases, integrating databases
            for efficient data management and crafting APIs to facilitate seamless front-end to back-end communication.
          </p>
        </div>
        <div className="bg-slate-800 p-4 bg-blur flex flex-col items-center justify-center">
          <i className="bi bi-filetype-xml text-6xl md:text-8xl mb-4 text-teal-400"></i>
          <h1 className="text-xl md:text-2xl font-bold mb-2">Mobile Development</h1>
          <p className="text-sm md:text-base">
            In mobile development, dependencies are key to crafting efficient apps. Kotlin's power empowers developers to create robust,
            high-performance apps with optimal maintainability.
            Leveraging Kotlin's capabilities and managing dependencies enhances the development process, resulting in quality applications across platforms.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
