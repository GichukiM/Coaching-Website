import React from 'react';
import { RiUserVoiceLine } from 'react-icons/ri';
import { MdOutlineEventNote } from 'react-icons/md';
import { FaUserTie } from 'react-icons/fa';
import { GiMeditation } from 'react-icons/gi';

function ServicesHome() {
  return (
    <div className="w-full pt-8 bg-white dark:bg-gray-800">
      <h2 className="text-center text-3xl font-bold mb-8 text-gray-900 dark:text-white">Our Services</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 dark:border-gray-700">
        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <RiUserVoiceLine className="text-4xl text-gray-900 dark:text-white mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Personalized Coaching Sessions</h3>
          </div>
          <blockquote className="text-gray-500 dark:text-gray-400">
            <p>One-on-one coaching sessions tailored to individual needs, focusing on personal growth, overcoming obstacles, and achieving specific life goals. These sessions can be in-person or virtual, providing flexibility for clients.</p>
            <p>Provides personalized guidance and actionable steps to help clients gain clarity, boost confidence, and make meaningful progress in their personal and professional lives.</p>
          </blockquote>
          <a href="#" id="book-eve" className="mt-4 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">Book a Session</a>
        </figure>

        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <MdOutlineEventNote className="text-4xl text-gray-900 dark:text-white mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Workshops and Seminars</h3>
          </div>
          <blockquote className="text-gray-500 dark:text-gray-400">
            <p>Group workshops and seminars on topics like self-discovery, stress management, effective communication, and goal-setting. These events can be held in-person or online, catering to different audiences.</p>
            <p>Allows clients to learn new skills, gain insights, and connect with others on similar journeys. Workshops are interactive and provide practical tools and techniques for personal and professional development.</p>
          </blockquote>
          <a href="#" id="book-eve" className="mt-4 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">Join a Workshop</a>
        </figure>

        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <FaUserTie className="text-4xl text-gray-900 dark:text-white mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Career and Leadership Coaching</h3>
          </div>
          <blockquote className="text-gray-500 dark:text-gray-400">
            <p>Specialized coaching for professionals looking to advance in their careers, develop leadership skills, or transition to new roles. This service includes resume reviews, interview preparation, and strategic planning for career growth.</p>
            <p>Helps clients navigate career challenges, enhance leadership abilities, and achieve their professional aspirations. Offers support in creating a clear career path and developing a strong personal brand.</p>
          </blockquote>
          <a href="#" id="book-eve" className="mt-4 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">Schedule a Consultation</a>
        </figure>

        <figure className="flex flex-col items-center justify-center p-4 text-center bg-white border border-gray-200 dark:bg-gray-800 dark:border-gray-700">
          <div className="flex items-center justify-center mb-4">
            <GiMeditation className="text-4xl text-gray-900 dark:text-white mr-2" />
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white">Wellness and Life Balance Programs</h3>
          </div>
          <blockquote className="text-gray-500 dark:text-gray-400">
            <p>Programs focused on achieving a balanced and fulfilling life, including aspects of mental well-being, work-life balance, and holistic health. These programs may include mindfulness training, stress reduction techniques, and lifestyle coaching.</p>
            <p>Supports clients in maintaining a healthy balance between personal and professional life, reducing stress, and enhancing overall well-being. Encourages sustainable lifestyle changes that promote long-term health and happiness.</p>
          </blockquote>
          <a href="#" id="book-eve" className="mt-4 inline-block px-6 py-3 text-white bg-blue-500 hover:bg-blue-600 rounded-lg shadow-md transition-shadow duration-300 hover:shadow-lg">Explore Programs</a>
        </figure>
      </div>
    </div>
  );
}

export default ServicesHome;
