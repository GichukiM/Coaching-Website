import React from 'react';

// Import images from the assets folder
import animalsImg from '../assets/animals.jpg';
import artImg from '../assets/art.jpg';
import booksImg from '../assets/books.jpg';
import environmentImg from '../assets/environment.jpg';
import foodImg from '../assets/food.jpg';
import languageImg from '../assets/language.jpg';
import natureImg from '../assets/nature.jpg';
import yogaImg from '../assets/yoga.jpg';

// Define fun facts with their respective images
const funFacts = [
  { title: 'Fun Fact #1', description: 'Eve loves hiking and has climbed several mountains around the world.', imageUrl: natureImg },
  { title: 'Fun Fact #2', description: 'Eve is an avid reader and enjoys books on psychology and personal development.', imageUrl: booksImg },
  { title: 'Fun Fact #3', description: 'Eve has a knack for cooking and often experiments with new recipes.', imageUrl: foodImg },
  { title: 'Fun Fact #4', description: 'Eve is fluent in three languages and is learning a fourth.', imageUrl: languageImg },
  { title: 'Fun Fact #5', description: 'Eve volunteers at a local animal shelter in her free time.', imageUrl: animalsImg },
  { title: 'Fun Fact #6', description: 'Eve is passionate about sustainable living and practices eco-friendly habits.', imageUrl: environmentImg },
  { title: 'Fun Fact #7', description: 'Eve enjoys painting as a creative outlet and has exhibited her work.', imageUrl: artImg },
  { title: 'Fun Fact #8', description: 'Eve is a certified yoga instructor and teaches classes occasionally.', imageUrl: yogaImg },
];

function FunFacts() {
  return (
    <>
      <div id="top-bar" className="w-full flex flex-col items-center justify-around bg-black dark:bg-gray-800 py-6">
        <h1 className="text-white font-bold text-center md:text-left mb-4">FUN FACTS</h1>
        <h3 className="text-white font-semibold text-center">Discover Some Fun Facts About Eve</h3>
      </div>

      <section className="w-full items-center max-w-screen-xl">
        <div className="grid grid-cols-2 gap-0 md:grid-cols-4">
          {funFacts.map((fact, index) => (
            <div
              key={index}
              className="relative w-full h-48 bg-cover bg-center text-start text-white overflow-hidden"
              style={{ backgroundImage: `url(${fact.imageUrl})` }}
            >
              <div className="absolute inset-0 flex flex-col justify-left items-start bg-black bg-opacity-50 p-4">
                <h3 className="text-lg font-bold">{fact.title}</h3>
              </div>
              <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-black bg-opacity-60 transition-opacity duration-200 p-4">
                <p className="text-sm">{fact.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}

export default FunFacts;
