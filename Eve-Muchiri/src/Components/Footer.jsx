import React from 'react'
import { FaFacebookF, FaInstagram, FaTiktok, FaLinkedinIn } from 'react-icons/fa';

function Footer() {
  return (

        <footer class="bg-white dark:bg-gray-900">
            <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
                <div class="md:flex md:justify-between">
                <div class="mb-6 md:mb-0">
                    <a href="#" class="flex items-center">
                        <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Eve Muchiri</span>
                    </a>
                    <a href="#" class="flex items-center">
                        <span class="self-center text-sm font-semibold whitespace-nowrap dark:text-white">Personal Development Coach</span>
                    </a>
                    <p className='w-1/2 flex items-center text-sm whitespace-normal'>Empowering personal and professional growth through tailored coaching and transformative workshops.
                    Discover your potential with Eve's expert guidance and holistic approach to success.</p>
                    <div className="flex mt-4 sm:mt-4">
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white">
                    <FaFacebookF className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Facebook page</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaInstagram className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">Instagram profile</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaTiktok className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">TikTok profile</span>
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5">
                    <FaLinkedinIn className="w-4 h-4" aria-hidden="true" />
                    <span className="sr-only">LinkedIn profile</span>
                </a>
                </div>
                </div>
                
                <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
                    <div>
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Shop</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="https://flowbite.com/" class="hover:underline">E-Books</a>
                            </li>
                            <li class="mb-4">
                                <a href="https://flowbite.com/" class="hover:underline">Journals</a>
                            </li>
                            <li>
                                <a href="https://tailwindcss.com/" class="hover:underline">Stickers</a>
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
                        <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">Legal</h2>
                        <ul class="text-gray-500 dark:text-gray-400 font-medium">
                            <li class="mb-4">
                                <a href="#" class="hover:underline">Privacy Policy</a>
                            </li>
                            <li className='mb-4'>
                                <a href="#" class="hover:underline">Terms &amp; Conditions</a>
                            </li>
                            <li>
                                <a href="#" class="hover:underline">Refunds &amp; Cancellations</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <div class="sm:flex sm:items-center sm:justify-between">
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Eve Muchiri™</a>. All Rights Reserved.
                </span>
                <hr />
                <span class="text-sm text-gray-500 sm:text-center dark:text-gray-400">Created by <a href="https://gichukimuchiri.com/" class="hover:underline">Gichuki Muchiri</a>
                </span>

            </div>
            </div>
        </footer>

  )
}

export default Footer