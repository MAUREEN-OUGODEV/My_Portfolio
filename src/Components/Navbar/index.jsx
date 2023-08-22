// src/components/MyComponent.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between ">
          <div>
            <h1 className="text-white font-semibold text-4xl ">.PortFolio</h1>
          </div>
          <div className="flex space-x-4 ">
            <a
              href="/home"
              className="text-white hover:text-blue-300 transition duration-300 "
            >
              Home
            </a>
            <a
              href="/home"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About
            </a>
            <a
              href="/ome"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Services
            </a>
            <a
              href="/home"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Contact
            </a>
          </div>
          
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
