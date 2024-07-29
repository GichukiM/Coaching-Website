import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import 'flowbite';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    if (isDropdownOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
    };
  }, [isDropdownOpen]);

  return (
    <>
      <nav className="bg-gray-900 left-0 w-full z-50 shadow-md">
        <div className="max-w-screen-xl mx-auto p-4 flex items-center justify-between">
          {/* Name on the left */}
          <Link to="/" className="flex items-center space-x-3">
            <span className="self-center text-2xl font-bold italic font-chopin whitespace-nowrap text-white">EVE MUCHIRI</span>
          </Link>

          {/* Button on the right (mobile menu toggle) */}
          <button 
            type="button" 
            className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-200 md:hidden bg-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-700 dark:text-gray-300 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-dropdown" 
            aria-expanded={isDropdownOpen ? "true" : "false"} 
            onClick={toggleDropdown}
          >
            <span className="sr-only">Toggle main menu</span>
            {isDropdownOpen ? (
              <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 2l12 12M14 2L2 14" />
              </svg>
            ) : (
              <svg className="w-5 h-5 text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex md:items-center md:space-x-4 md:ml-auto">
            <Link to="/" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Home</Link>
            <Link to="/about" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">About</Link>
            <Link to="/services" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Services</Link>
            <Link to="/products" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Products</Link>
            <Link to="/contact" className="text-white hover:text-gray-300 px-3 py-2 rounded-md">Contact</Link>
            <button id='book-eve' className='p-2 bg-blue-600 text-white hover:bg-blue-700 rounded-md'>
              <Link to="/booking">BOOK EVE</Link>
            </button>
          </div>
        </div>
      </nav>

      {/* Dropdown menu */}
      <div className={`fixed left-0 w-full h-[calc(100vh-4rem)] bg-gray-900 z-40 transition-transform duration-300 ${isDropdownOpen ? "translate-y-0" : "translate-y-full"} overflow-y-auto md:hidden`}>
        <ul className="flex flex-col items-center font-medium space-y-4 p-4">
          <li className='w-full'>
            <Link to="/" className="flex items-center justify-center w-full py-4 px-4 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors" aria-current="page">Home</Link>
          </li>

          <li className='w-full'>
            <Link to="/about" className="flex items-center justify-center w-full py-4 px-4 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors" aria-current="page">About</Link>
          </li>

          <li className='w-full'>
            <Link to="/services" className="flex items-center justify-center w-full py-4 px-4 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors" aria-current="page">Services</Link>
          </li>

          <li className='w-full'>
            <Link to="/products" className="flex items-center justify-center w-full py-4 px-4 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors" aria-current="page">Products</Link>
          </li>

          <li className='w-full'>
            <Link to="/contact" className="flex items-center justify-center w-full py-4 px-4 text-white bg-gray-700 hover:bg-gray-600 rounded-md transition-colors" aria-current="page">Contact</Link>
          </li>

          <li className='w-full'>
            <button id='book-eve' className='p-4 w-full bg-blue-600 text-white hover:bg-blue-700 rounded-md transition-colors'>
              <Link to="/booking">BOOK EVE</Link>
            </button>
          </li>
        </ul>
      </div>
    </>
  );
}

export default Navbar;
