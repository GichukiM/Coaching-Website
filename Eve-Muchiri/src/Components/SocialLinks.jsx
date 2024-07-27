import React from 'react';
import { FaFacebook, FaInstagram, FaWhatsapp, FaTiktok, FaLinkedinIn } from 'react-icons/fa';

function SocialLinks() {
  return (
    <div className="w-full flex justify-around bg-black dark:bg-gray-800 py-6">
      <a href="https://www.tiktok.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2">
        <FaTiktok className="text-3xl text-white dark:text-white" />
      </a>
      <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center  dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2">
        <FaInstagram className="text-3xl text-white dark:text-white" />
      </a>
      <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center  dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2">
        <FaFacebook className="text-3xl text-white dark:text-white" />
      </a>
      <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center  dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2">
        <FaWhatsapp className="text-3xl text-white dark:text-white" />
      </a>
      <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="w-1/5 flex items-center justify-center  dark:bg-gray-700 dark:border-gray-600 rounded-lg p-4 mx-2">
        <FaLinkedinIn className="text-3xl text-white dark:text-white" />
      </a>
    </div>
  );
}

export default SocialLinks;
