import React, { useState } from 'react';
import 'flowbite';

function Navbar() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="bg-gray-900">
      <div className="max-w-screen-xl mx-auto p-4 py-8 flex flex-col md:flex-row items-center justify-between">
        <a href="#" className="flex items-center space-x-3">
          <span className="self-center text-2xl font-bold italic font-chopin whitespace-nowrap text-white">EVE MUCHIRI</span>
        </a>

        <div className="w-full flex text-center justify-between md:justify-center md:w-auto">
          <button 
            type="button" 
            className="flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 md:hidden bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" 
            aria-controls="navbar-dropdown" 
            aria-expanded={isDropdownOpen ? "true" : "false"} 
            onClick={toggleDropdown}
          >
            <span className="sr-only">Open main menu</span>
            {isDropdownOpen ? (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2 2l12 12M14 2L2 14" />
              </svg>
            ) : (
              <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
              </svg>
            )}
          </button>

          <div className={`w-full md:flex md:items-center md:justify-center md:w-auto ${isDropdownOpen ? "block" : "hidden"}`} id="navbar-dropdown">
            <ul className="flex flex-col md:flex-row font-medium md:space-x-8 mt-4 md:mt-0 md:bg-transparent rounded-lg md:p-0 dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">

              <li className='items-center justify-center flex'>
                <a href="#" className="flex items-center justify-between w-full py-4 px-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-current="page">Home</a>
              </li>

              <li className='items-center justify-center flex'>
                <a href="#" className="flex items-center justify-between w-full py-4 px-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-current="page">About</a>
              </li>

              <li className='items-center justify-center flex'>
                <a href="#" className="flex items-center justify-between w-full py-4 px-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-current="page">Services</a>
              </li>

              <li className='items-center justify-center flex'>
                <a href="#" className="flex items-center justify-between w-full py-4 px-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-current="page">Products</a>
              </li>

              <li className='items-center justify-center flex'>
                <a href="#" className="flex items-center justify-between w-full py-4 px-4 text-white md:hover:bg-transparent md:border-0 md:hover:text-gray-300 md:p-0 md:w-auto dark:text-white md:dark:hover:text-blue-500 dark:focus:text-white dark:border-gray-700 dark:hover:bg-gray-700 md:dark:hover:bg-transparent" aria-current="page">Contact</a>
              </li>

              <li className='items-center justify-center flex'>
                <button id='book-eve' className='p-4 w-full text-white hover:bg-gray-100'><a href="">BOOK EVE</a></button>
            </li>

            </ul>
          </div>
        </div>
        
      </div>
    </nav>
  );
}

export default Navbar;
