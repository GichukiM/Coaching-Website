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
    <section className="relative bg-gray-300 bg-blend-multiply"
      style={{
        backgroundImage: `url(${imagePath})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      <div className="absolute inset-0 bg-black opacity-40"></div> {/* Overlay for better text visibility */}
      <div className="relative px-4 mx-auto max-w-screen-xl text-left py-24 lg:py-56">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight leading-none text-white mb-4">
          {displayedMessage}
          <span className={`cursor ${blink ? 'opacity-100' : 'opacity-0'}`}>|</span>
        </h1>
        <div className="flex flex-col sm:flex-row items-start justify-start space-y-4 sm:space-y-0 sm:space-x-4 rtl:space-x-reverse">
          <a href="#">
            <button
              id='S-button'
              className='p-3 sm:p-4 border-4 text-white duration-300'
            >
              BOOK EVE
            </button>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
