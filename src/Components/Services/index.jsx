import React from 'react';


const Services =()=>{
    return (
        <div className='services'>
            
        <h1 className='text-white  font-bold text-7xl mt-4'>My <span className="text-sky-400/100 text-7xl mt-8">SKills</span> </h1>
        <div class="grid grid-cols-3 gap-4 m-16 text-white rounded-md">
  <div class="bg-slate-800 p-4 bg-blur flex flex-col items-center justify-center ">
    <i class="bi bi-filetype-jsx text-8xl mb-4 text-teal-400"></i>
    <h1 class="text-xl font-bold mb-2">Front-End Development</h1>
    <p class="text-sm">
       User-centered applications and websites, leveraging React and Next.js for dynamic interfaces.
      This includes optimizing design workflows with Bootstrap's components and responsive layouts, and Tailwind CSS's utility-based styling.
      This synergy delivers engaging, responsive user experiences across various platforms.
    </p>
  </div>
  <div class="bg-slate-800 p-4 bg-blur flex flex-col items-center justify-center">
    <i class="bi bi-filetype-py text-8xl mb-4 text-teal-400"></i>
    <h1 class="text-xl font-bold mb-2">Back-End Development</h1>
    <p class="text-sm">
      Backend development utilizes Django framework to establish robust application bases, integrating databases
      for efficient data management and crafting APIs to facilitate seamless front-end to back-end communication.
      
    </p>
  </div>
  <div class="bg-slate-800 p-4 bg-blur flex flex-col items-center justify-center">
    <i class="bi bi-filetype-xml text-8xl mb-4 text-teal-400"></i>
    <h1 class="text-xl font-bold mb-2">Mobile Development</h1>
    <p class="text-sm">
      In mobile development, dependencies are key to crafting efficient apps. Kotlin's power empowers developers to create robust,
      high-performance apps with optimal maintainability.
      Leveraging Kotlin's capabilities and managing dependencies enhances the development process, resulting in quality applications across platforms.
    </p>
  </div>
</div>

</div>
    )
}
export default Services;