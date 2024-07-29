import React from 'react'
import { Link } from 'react-router-dom'; // Import Link for internal navigation
import imagePath from '../assets/home-hero-2.JPG';


function ServicesHero() {
  return (
    <section
      className="relative bg-gray-300 bg-blend-multiply"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <div className="relative px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white mb-4">
          Our Services
        </h1>
        <div className="flex mt-8 flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <Link to="/booking">
            <button
              id="S-button"
              className="p-3 sm:p-4 text-white border-4 duration-300"
            >
              Book a Free Discovery Call
            </button>
          </Link>
        </div>
      </div>
    </section>
  )
}

export default ServicesHero