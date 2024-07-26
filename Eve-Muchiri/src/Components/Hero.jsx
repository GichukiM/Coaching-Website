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
        <h1 className="mb-4 text-4xl font-extrabold tracking-tight leading-none text-white md:text-5xl lg:text-6xl">
          {displayedMessage}
          <span className={`cursor ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </h1>
        <p className="mb-8 text-lg font-normal text-white lg:text-xl sm:px-16 lg:px-48">
        Discover personalized coaching to elevate your personal growth journey. Start transforming your life today with Eve's expert guidance.
        </p>
        <div className="items-center justify-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
        <button id='book-eve' className='p-4 rounded-full text-white hover:bg-gray-100'>
          <a href="">BOOK EVE</a>
        </button>
      </div>
      </div>
    </section>
  );
}

export default Hero;
