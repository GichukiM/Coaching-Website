import React from 'react';
import { MdOutlineShoppingBag } from "react-icons/md";

function Topbar() {
  return (
    <div id='top-bar' className="bg-gray-800">
      <nav className="max-w-screen-xl mx-auto p-4 flex flex-wrap items-center justify-between">

        {/* Top bar left: Phone and Email */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center text-white space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-4">
          <a href="tel:+254724489637" className="text-sm lg:text-base">+(254) 724 489 637</a>
          <span className="hidden sm:inline-block">||</span>
          <a href="mailto:evemuchiri@gmail.com" className="text-sm lg:text-base">evemuchiri@gmail.com</a>
        </div>

        {/* Top bar right: Shopping Basket */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center text-white space-y-1 sm:space-y-0 sm:space-x-2 lg:space-x-4">
            <span className="text-sm lg:text-base">Personal Development</span>
            <span className="hidden sm:inline-block">||</span>
            <span className="text-sm lg:text-base">Renewed Mindset</span>
        </div>

      </nav>
    </div>
  );
}

export default Topbar;
