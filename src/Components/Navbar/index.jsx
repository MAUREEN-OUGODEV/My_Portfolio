import React, { useState } from 'react';
import './style.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-6">
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <h1 className="text-white font-semibold text-4xl">.PortFolio</h1>
          </div>
          <div className="hidden md:flex space-x-4">
            <a
              href="/home"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Home
            </a>
            <a
              href="/about"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              About
            </a>
            <a
              href="/services"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Services
            </a>
            <a
              href="/contact"
              className="text-white hover:text-blue-300 transition duration-300"
            >
              Contact
            </a>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-white hover:text-blue-300 transition duration-300"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            {isOpen && (
              <div className="mt-2 space-y-2">
                <a
                  href="/home"
                  className="text-white hover:text-blue-300 transition duration-300 block"
                >
                  Home
                </a>
                <a
                  href="/about"
                  className="text-white hover:text-blue-300 transition duration-300 block"
                >
                  About
                </a>
                <a
                  href="/services"
                  className="text-white hover:text-blue-300 transition duration-300 block"
                >
                  Services
                </a>
                <a
                  href="/contact"
                  className="text-white hover:text-blue-300 transition duration-300 block"
                >
                  Contact
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
