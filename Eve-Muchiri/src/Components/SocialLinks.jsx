import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaLinkedinIn } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="w-full flex justify-around bg-black dark:bg-gray-800 py-6">
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
        <FaTiktok className="text-2xl sm:text-3xl lg:text-4xl text-white dark:text-white" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
        <FaInstagram className="text-2xl sm:text-3xl lg:text-4xl text-white dark:text-white" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
        <FaFacebook className="text-2xl sm:text-3xl lg:text-4xl text-white dark:text-white" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
        <FaWhatsapp className="text-2xl sm:text-3xl lg:text-4xl text-white dark:text-white" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2 transition-transform duration-200 transform hover:scale-105 hover:shadow-lg">
        <FaLinkedinIn className="text-2xl sm:text-3xl lg:text-4xl text-white dark:text-white" />
      </a>
    </div>
  );
}

export default SocialLinks;
