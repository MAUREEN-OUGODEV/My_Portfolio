import React from 'react';

const Footer = () => {
  return (
    <footer className=" text-white py-6">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} <span className="text-sky-400/100 text-xl mt-8">Maureen Akinyi Ougo</span>. All rights reserved.</p>
        <p className="mt-2">Designed and built with ❤️ using React and Tailwind CSS.</p>
      </div>
    </footer>
  );
}

export default Footer;
