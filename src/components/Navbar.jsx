import React, { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-white bg-opacity-10 backdrop-blur-lg shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
        <h1 className="text-2xl font-extrabold text-indigo-700">Whitecircle Group</h1>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="relative text-gray-700 hover:text-indigo-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Home</a>
          <a href="#services" className="relative text-gray-700 hover:text-indigo-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Services</a>
          <a href="#tech" className="relative text-gray-700 hover:text-indigo-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Tech Stack</a>
          <a href="#contact" className="relative text-gray-700 hover:text-indigo-600 after:content-[''] after:absolute after:w-0 after:h-[2px] after:bottom-[-2px] after:left-0 after:bg-indigo-600 after:transition-all after:duration-300 hover:after:w-full">Contact</a>
          {/* <a href="#get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 transition-transform duration-200 hover:scale-105">Get Started</a> */}
        </nav>
        <button className="md:hidden text-gray-700 focus:outline-none" onClick={toggleMenu}>
          <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
        </button>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-white bg-opacity-95 px-6 py-4 shadow-lg`}>
        <nav className="flex flex-col space-y-4">
          <a href="#home" className="text-gray-700 hover:text-indigo-600">Home</a>
          <a href="#services" className="text-gray-700 hover:text-indigo-600">Services</a>
          <a href="#tech" className="text-gray-700 hover:text-indigo-600">Tech Stack</a>
          <a href="#contact" className="text-gray-700 hover:text-indigo-600">Contact</a>
          <a href="#get-started" className="bg-indigo-600 text-white px-4 py-2 rounded-full hover:bg-indigo-700 text-center">Get Started</a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;