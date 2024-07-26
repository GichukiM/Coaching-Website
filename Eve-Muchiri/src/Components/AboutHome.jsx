import React from 'react';
import imagePath from '../assets/yr-coach.JPG';

function AboutHome() {
  return (
    <div className="flex flex-col md:flex-row w-full items-center bg-white shadow dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700" id='home-about'>
      <div className="w-full md:w-1/3 p-4 md:p-0">
        <img 
          className="w-full h-auto object-cover" 
          src={imagePath} 
          alt="Descriptive text for the image" 
        />
      </div>
      <div className="w-full md:w-2/3 p-8 flex flex-col justify-center text-white">
        <h5 className="mb-4 text-3xl font-bold tracking-tight">
          Uncover Your Potential with Eve
        </h5>
        <p className="mb-4 text-lg">
          In the midst of life's complexities, finding direction can often seem daunting. Eve, with her rich tapestry of experiences from sales to personal development, offers a beacon of clarity and wisdom. Her coaching is not just about navigating obstacles but about empowering you to redefine your path with confidence and purpose.
        </p>
        <p className="mb-4 text-lg">
          Eve’s approach to personal development is deeply rooted in empathy and practicality. She combines her vast knowledge with a genuine understanding of individual struggles, creating tailored strategies that resonate on a personal level. Through her guidance, clients discover new pathways and unlock potential they didn't know existed.
        </p>
        <p className="mb-4 text-lg">
          Transform your life with Eve as your guide. Embrace a future where your aspirations align with actionable steps and heartfelt support. Begin your journey today and experience the profound impact of having a mentor dedicated to your success.
        </p>
        <span className='text-xl font-bold'>
          “The only limit to your impact is your imagination and commitment.” – Tony Robbins
        </span>
      </div>
    </div>
  );
}

export default AboutHome;
