import React, { useState, useEffect } from 'react';
import imagePath from '../assets/home-hero-2.JPG';

function Hero() {
  const [currentMessageIndex, setCurrentMessageIndex] = useState(0);
  const [displayedMessage, setDisplayedMessage] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [blink, setBlink] = useState(true);

  const messages = [
    "Unlock Your Full Potential",
    "Transform Your Life Today",
    "Empower Your Personal Growth",
    "Achieve Clarity and Purpose",
    "Master Your Mindset",
    "Build Confidence and Resilience",
    "Navigate Life's Challenges",
    "Create the Life You Desire"
  ];

  useEffect(() => {
    const typingSpeed = 75;
    const deletingSpeed = 100;
    const delayBeforeDeleting = 150;
    const delayBeforeTypingNext = 500;

    if (!isDeleting && displayedMessage === messages[currentMessageIndex]) {
      setTimeout(() => setIsDeleting(true), delayBeforeDeleting);
    } else if (isDeleting && displayedMessage === '') {
      setIsDeleting(false);
      setCurrentMessageIndex((prevIndex) => (prevIndex + 1) % messages.length);
    }

    const typingTimeout = setTimeout(() => {
      if (isDeleting) {
        setDisplayedMessage((prev) => prev.slice(0, -1));
      } else {
        setDisplayedMessage(messages[currentMessageIndex].slice(0, displayedMessage.length + 1));
      }
    }, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(typingTimeout);
  }, [displayedMessage, isDeleting, messages, currentMessageIndex]);

  useEffect(() => {
    const blinkInterval = setInterval(() => setBlink((prev) => !prev), 500);
    return () => clearInterval(blinkInterval);
  }, []);

  return (
    <section
      className="bg-gray-300 bg-blend-multiply"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="px-4 mx-auto max-w-screen-xl text-center py-24 lg:py-56">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white mb-4">
          {displayedMessage}
          <span className={`cursor ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </h1>
        <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-white mb-8 px-4 sm:px-8 lg:px-16">
          Discover personalized coaching to elevate your personal growth journey. Start transforming your life today with Eve's expert guidance.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a href="#">
            <button id='book-eve' className='p-3 sm:p-4 rounded-full text-white bg-blue-500 hover:bg-blue-600 focus:outline-none focus:ring-4 focus:ring-blue-300 transition-colors duration-300'>
              BOOK EVE
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
