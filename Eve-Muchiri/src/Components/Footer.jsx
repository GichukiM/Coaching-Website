import React from 'react';
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="bg-white dark:bg-gray-900">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="md:flex md:justify-between">
          <div className="md:w-1/4 mb-6 md:mb-0">
            <a href="#" className="flex items-center">
              <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eve Muchiri</span>
            </a>
            <a href="#" className="flex items-center">
              <span className="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Personal Development Coach</span>
            </a>
            <p className="flex items-center text-sm whitespace-normal">
              Empowering personal and professional growth through tailored coaching and transformative workshops. Discover your potential with Eve's expert guidance and holistic approach to success.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-4 md:w-3/4">

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Shop</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">E-Books</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Journals</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Stickers</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Quick Links</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Home</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">About</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Services</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Contact</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li className="mb-4">
                  <a href="#" className="hover:underline">Terms &amp; Conditions</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Refunds &amp; Cancellations</a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Contact Us</h2>
              <ul className="text-gray-500 dark:text-gray-400 font-medium">
                <li className="mb-4">
                  <a href="mailto:evemuchiri@gmail.com" className="hover:underline">evemuchiri@gmail.com</a>
                </li>
                <li className="mb-4">
                  <a href="tel:+254724489637" className="hover:underline">+254724489637</a>
                </li>

                <div className="flex">
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaFacebookF className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Facebook page</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                    <FaInstagram className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Instagram profile</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                    <FaTiktok className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">TikTok profile</span>
                  </a>
                  <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ml-5">
                    <FaLinkedinIn className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn profile</span>
                  </a>
                </div>

              </ul>
            </div>

          </div>
        </div>
        <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="#" className="hover:underline">Eve Muchiri™</a>. All Rights Reserved.</span>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">Created by <a href="https://gichukimuchiri.com/" className="hover:underline">Gichuki Muchiri</a></span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
