import React, { useEffect } from 'react';
import { FaQuoteLeft } from 'react-icons/fa';

function Testimonials() {
  useEffect(() => {
    const carousel = document.getElementById('animation-carousel');
    const items = carousel.querySelectorAll('[data-carousel-item]');
    let currentIndex = 0;

    const showItem = (index) => {
      items.forEach((item, i) => {
        item.classList.toggle('block', i === index);
        item.classList.toggle('hidden', i !== index);
      });
    };

    const nextSlide = () => {
      currentIndex = (currentIndex + 1) % items.length;
      showItem(currentIndex);
    };

    const prevSlide = () => {
      currentIndex = (currentIndex - 1 + items.length) % items.length;
      showItem(currentIndex);
    };

    document.querySelector('[data-carousel-next]').addEventListener('click', nextSlide);
    document.querySelector('[data-carousel-prev]').addEventListener('click', prevSlide);

    // Auto-scroll functionality
    const interval = setInterval(nextSlide, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div id="animation-carousel" className="relative w-full testimonials">
      {/* Carousel wrapper */}
      <div className="relative overflow-hidden rounded-lg md:h-96">
        {/* Carousel container */}
        <div className="flex h-full items-center justify-center transition-transform duration-500 ease-in-out">
          {/* Item 1 */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-6 text-white hidden" data-carousel-item>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
              <FaQuoteLeft className="text-6xl text-gray-400 mb-4" />
              <blockquote className="text-center">
                <p className="text-xl italic font-semibold mb-4">“Eve has been a transformative influence in my life. Her guidance helped me discover my true potential and achieve my goals.”</p>
                <cite className="text-lg font-bold text-gray-300">- Alex Johnson</cite>
              </blockquote>
            </div>
          </div>
          {/* Item 2 */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-6 text-white hidden" data-carousel-item>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
              <FaQuoteLeft className="text-6xl text-gray-400 mb-4" />
              <blockquote className="text-center">
                <p className="text-xl italic font-semibold mb-4">“The workshops led by Eve were enlightening. I gained valuable skills and met wonderful people on the same journey.”</p>
                <cite className="text-lg font-bold text-gray-300">- Maria Gomez</cite>
              </blockquote>
            </div>
          </div>
          {/* Item 3 */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-6 text-white hidden" data-carousel-item>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
              <FaQuoteLeft className="text-6xl text-gray-400 mb-4" />
              <blockquote className="text-center">
                <p className="text-xl italic font-semibold mb-4">“Eve's career coaching helped me navigate a major transition in my professional life. Her insights were invaluable.”</p>
                <cite className="text-lg font-bold text-gray-300">- James Smith</cite>
              </blockquote>
            </div>
          </div>
          {/* Item 4 */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-6 text-white hidden" data-carousel-item>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
              <FaQuoteLeft className="text-6xl text-gray-400 mb-4" />
              <blockquote className="text-center">
                <p className="text-xl italic font-semibold mb-4">“Participating in Eve's wellness program has been a game-changer for me. I feel more balanced and less stressed.”</p>
                <cite className="text-lg font-bold text-gray-300">- Sarah Lee</cite>
              </blockquote>
            </div>
          </div>
          {/* Item 5 */}
          <div className="w-full flex-shrink-0 flex items-center justify-center p-6 text-white hidden" data-carousel-item>
            <div className="flex flex-col items-center justify-center w-1/2 mx-auto">
              <FaQuoteLeft className="text-6xl text-gray-400 mb-4" />
              <blockquote className="text-center">
                <p className="text-xl italic font-semibold mb-4">“Eve's personalized approach makes her coaching truly effective. I've seen remarkable improvements in my personal and professional life.”</p>
                <cite className="text-lg font-bold text-gray-300">- Michael Brown</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </div>
      {/* Slider controls */}
      <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 1 1 5l4 4"/>
          </svg>
          <span className="sr-only">Previous</span>
        </span>
      </button>
      <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
        <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
          <svg className="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
            <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m1 9 4-4-4-4"/>
          </svg>
          <span className="sr-only">Next</span>
        </span>
      </button>
    </div>
  )
}

export default Testimonials;
